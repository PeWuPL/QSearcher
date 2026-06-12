let questionDbKey = "QS_question_db";
let removeDiacriticsKey = "QS_remove_diacritics";

let qaDatabase;
let selectedQA;

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
	let isDiacriticsEnabled = localStorage.getItem(removeDiacriticsKey);
	if(isDiacriticsEnabled === 'true') {
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
		questionDiv.className = "question p-2 border border-secondary rounded";
		questionDiv.innerHTML = "<a class='text-white pe-auto' style='text-decoration:none'>"+item.question+"</a>";
		questionDiv.addEventListener("click", () => {
			if(selectedQA) {
				selectedQA.classList.remove("bg-gradient")
			}

			questionDiv.classList.add("bg-gradient");
			selectedQA = questionDiv

			//answerText.textContent = item.answer;
			answerText.innerHTML = item["correct-answers"].map(i => "&#x2022; "+i).join("<hr>");
			answerContainer.classList.remove("d-none")
		});
		resultsDiv.appendChild(questionDiv);
	});

	// Adds an answer, which after clicking will show the question
	filteredAnswers.forEach(item => {
		const answerDiv = document.createElement("div");
		answerDiv.className = "answer p-2 border border-warning rounded pe-auto";
		//answerDiv.textContent = item.answer;

		answerDiv.innerHTML = "<a class='text-warning pe-auto' style='text-decoration:none'>"+item["correct-answers"].join("<hr>")+"</a>";
		answerDiv.style.fontStyle = "italic";
		answerDiv.style.color = "rgb(255, 180, 0)";
		answerDiv.addEventListener("click", () => {
			if(selectedQA) {
				selectedQA.classList.remove("bg-gradient")
			}

			answerDiv.classList.add("bg-gradient");
			selectedQA = answerDiv;

			//answerText.textContent = item.question;
			answerText.innerHTML = item.question.replace(/\n/g,"<br>");
			answerContainer.classList.remove("d-none")
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

	const currentDB = localStorage.getItem(questionDbKey);
	if(currentDB) {
		qaDatabase = JSON.parse(currentDB);
	}

	let tab = await getCurrentTab();
	chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, response => {
		if(!response)
			return;

		searchInput.value = response.body;
		lookupPhrase(normalizeString(response.body));
	});
})()
