// Question database URL
const QUESTION_DATABASE_URL = "https://gist.githubusercontent.com/PeWuPL/446ad1d7a3e738e23ac36bf27246dc30/raw/e7a863aa694a6ad56c7f163b13e96a75a13b580f/sm_questions.json"

// Will remove diacritics from searching logic (user will still see them, they will just not be considered in search)
const ENABLE_DIACRITICS_REMOVAL = true;


var qaDatabase;
var selectedQA;

async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	// `tab` will either be a `tabs.Tab` instance or `undefined`.
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

function removeDiacritics(str) {
	//str = "Żółw"
	return str
		.replace(/ł/g, "l") //str = "Żólw"
		.replace(/Ł/g, "L")
		.normalize("NFD") //str = "Z.o`lw"
		.replace(/[\u0300-\u036f]/g, ""); //str = "Zolw"
}

function normalizeString(str) {
	if(ENABLE_DIACRITICS_REMOVAL) {
		str = removeDiacritics(str);
	}

	str = str.toLowerCase();

	return str;
}

// Searching logic
function lookupPhrase(searchTerm) {
	const resultsDiv = document.getElementById("results");
	const answerContainer = document.getElementById("answerContainer");
	const answerText = document.getElementById("answerText");

	resultsDiv.innerHTML = "";

	if (searchTerm === "") return;


	// Main search logic - remove diacritics if applicable, check if question and answer includes the search term
	const filteredQuestions = qaDatabase.filter(item => {
		const questionText = normalizeString(item.question);
		return questionText.includes(searchTerm);
	});

	const filteredAnswers = qaDatabase.filter(item => {
		const answerText = normalizeString(item["correct-answers"].join("<br>"));
		return answerText.includes(searchTerm)
	});

	if (filteredQuestions.length === 0 && filteredAnswers.length === 0) {
		resultsDiv.innerHTML = "<p>Brak wyników</p>";
		return;
	}

	// Adds a question, which after clicking will show the answer
	filteredQuestions.forEach(item => {
		const questionDiv = document.createElement("div");
		questionDiv.className = "question";
		questionDiv.textContent = item.question;
		questionDiv.addEventListener("click", () => {
			if(selectedQA) {
				selectedQA.classList.remove("selected")
			}

			questionDiv.classList.add("selected");
			selectedQA = questionDiv

			//answerText.textContent = item.answer;
			answerText.innerHTML = item["correct-answers"].map(i => "&#x2022; "+i).join("<hr>");
			answerContainer.style.display = "block";
		});
		resultsDiv.appendChild(questionDiv);
	});

	// Adds an answer, which after clicking will show the question
	filteredAnswers.forEach(item => {
		const answerDiv = document.createElement("div");
		answerDiv.className = "answer";
		//answerDiv.textContent = item.answer;

		answerDiv.innerHTML = item["correct-answers"].join("<hr>");
		answerDiv.style.fontStyle = "italic";
		answerDiv.style.color = "rgb(255, 180, 0)";
		answerDiv.addEventListener("click", () => {
			if(selectedQA) {
				selectedQA.classList.remove("selected")
			}

			questionDiv.classList.add("selected");
			selectedQA = questionDiv;

			//answerText.textContent = item.question;
			answerText.innerHTML = item.question.replace(/\n/g, "<br>");
			answerContainer.style.display = "block";
		});
		resultsDiv.appendChild(answerDiv);
	});
}

// Search on typing event
searchInput.addEventListener("input", (e) => {
	const searchTerm = normalizeString(e.target.value);

	lookupPhrase(searchTerm)
});

(async () => {
	const searchInput = document.getElementById("searchInput");

	// Focus if search is existent
	if (searchInput) {
		searchInput.focus();
	}

	// Load question database
	var response = await fetch(QUESTION_DATABASE_URL);

	qaDatabase = await response.json();

	let tab = await getCurrentTab();
	chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, response => {
		if(!response)
			return;

		searchInput.value = response.body;
		lookupPhrase(normalizeString(response.body));
	});
})()
