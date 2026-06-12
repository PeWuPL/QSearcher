let questionDbKey = "QS_question_db";
let removeDiacriticsKey = "QS_remove_diacritics";
async function loadDBFromURL(url) {
	console.log("Loading DB from URL: " + url);

	const response = await fetch(url);

	const json = await response.json();

	loadDBFromJson(json);
}

function loadDBFromJson(json) {
	validateJSON(json);

	document.querySelector("#status-all").innerHTML = json.length;
	localStorage.setItem(questionDbKey, JSON.stringify(json));
}

function validateJSON(jsonArray) {
	if(!Array.isArray(jsonArray)) {
		throw new Error("JSON is not an array!");
	}

	for (let item of jsonArray) {
		if(typeof item !== 'object') {
			throw new Error("One of the elements in an array is not an object!");
		}

		if(!item.hasOwnProperty("question")) {
			throw new Error("Item doesn't have 'question' property!");
		}

		if(!item.hasOwnProperty("correct-answers") || !Array.isArray(item["correct-answers"])) {
			throw new Error("Item doesn't have 'correct-answers' property or it's not an array!");
		}

		if(!item.hasOwnProperty("incorrect-answers") || !Array.isArray(item["incorrect-answers"])) {
			throw new Error("Item doesn't have 'incorrect-answers' property or it's not an array!");
		}

		for (let value of item["correct-answers"]) {
			if(typeof value !== 'string') {
				throw new Error("One of correct answers is not a string!");
			}
		}

		for (let value of item["incorrect-answers"]) {
			if(typeof value !== 'string') {
				throw new Error("One of incorrect answers is not a string!");
			}
		}
	}
}


async function handlePredefinedButton(loadBtn, url) {
	if(currentlySelectedPredefinedBtn) {
		deselectButton(currentlySelectedPredefinedBtn);
	}
	currentlySelectedPredefinedBtn = loadBtn;
	loadBtn.innerHTML =
		"<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div>" +
		"<span class=\"sr-only\"> Ładowanie...</span>"
	try {
		await loadDBFromURL(url)
	}
	catch (e) {
		console.error(e);
		selectButtonError(currentlySelectedPredefinedBtn);
		return;
	}
	selectButtonNormal(currentlySelectedPredefinedBtn);
}


function deselectButton(btn) {
	btn.classList.remove('disabled')
	btn.classList.add('btn-primary')
	btn.classList.remove('btn-outline-primary')
	btn.classList.remove('btn-danger')
	btn.innerHTML = "Wybierz"
}

function selectButtonError(btn) {
	btn.classList.add('disabled')
	btn.classList.remove('btn-primary')
	btn.classList.add('btn-danger')
	btn.innerHTML = "Błąd (sprawdź konsolę)"
}

function selectButtonNormal(btn) {
	btn.classList.add('disabled')
	btn.classList.remove('btn-primary')
	btn.classList.add('btn-outline-primary')
	btn.innerHTML = "Wybrane"
}