async function loadDBFromURL(url) {
	console.log("Loading DB from URL: " + url);

	const response = await fetch(url);

	const json = await response.json();

	if(!validateJSON(json)) {
		throw new Error("JSON is in invalid format!");
	}

	document.querySelector("#status-all").innerHTML = json.length;
	localStorage.setItem("question_db", JSON.stringify(json));

	const myModal = new bootstrap.Modal(document.querySelector('#myModal'));
	myModal.show();
}

function validateJSON(jsonArray) {
	if(!Array.isArray(jsonArray)) {
		return false;
	}

	for (let item of jsonArray) {
		if(typeof item !== 'object') {
			return false;
		}

		if(!item.hasOwnProperty("question")) {
			return false;
		}

		if(!item.hasOwnProperty("correct-answers") || !Array.isArray(item["correct-answers"])) {
			return false;
		}

		if(!item.hasOwnProperty("incorrect-answers") || !Array.isArray(item["incorrect-answers"])) {
			return false;
		}

		for (let value of item["correct-answers"]) {
			if(typeof value !== 'string') {
				return false;
			}
		}

		for (let value of item["incorrect-answers"]) {
			if(typeof value !== 'string') {
				return false;
			}
		}
	}
	return true;
}


(async () => {
	document.querySelector("#load-sm").addEventListener('click', ()=>loadDBFromURL("https://gist.githubusercontent.com/PeWuPL/446ad1d7a3e738e23ac36bf27246dc30/raw/sm_questions.json"));

	const currentDB = localStorage.getItem("question_db");
	if(currentDB) {
		let parsedDB = JSON.parse(currentDB);
		document.querySelector("#status-all").innerHTML = parsedDB.length;
	}

})()