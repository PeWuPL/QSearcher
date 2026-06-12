let currentlySelectedPredefinedBtn;




(async () => {
	const loadSMBtn = document.querySelector("#load-sm");
	loadSMBtn?.addEventListener('click', ()=>{
		handlePredefinedButton(loadSMBtn,"https://gist.githubusercontent.com/PeWuPL/446ad1d7a3e738e23ac36bf27246dc30/raw/sm_questions.json");
	});

	const loadTDBtn = document.querySelector("#load-td");
	loadTDBtn?.addEventListener('click', ()=>{
		handlePredefinedButton(loadTDBtn,"https://gist.githubusercontent.com/PeWuPL/446ad1d7a3e738e23ac36bf27246dc30/raw/sm_questions.json");
	});

	const clearDatabaseBtn = document.querySelector("#clear-database");
	clearDatabaseBtn?.addEventListener('click', ()=>{
		localStorage.removeItem(questionDbKey);
		document.querySelector("#status-all").innerHTML = "0";
		if(currentlySelectedPredefinedBtn) {
			deselectButton(currentlySelectedPredefinedBtn);
		}
	})

	const loadCustomJsonUrlBtn = document.querySelector("#load-custom-json-url");
	const customJsonUrl = document.querySelector("#custom-json-url");

	customJsonUrl?.addEventListener("input", ()=>{
		if(currentlySelectedPredefinedBtn === loadCustomJsonUrlBtn) {
			deselectButton(currentlySelectedPredefinedBtn);
		}
	})
	loadCustomJsonUrlBtn?.addEventListener("click", ()=>{
		handlePredefinedButton(loadCustomJsonUrlBtn, customJsonUrl.value)
	})

	const loadCustomJsonBodyBtn = document.querySelector("#load-custom-json-body");
	const customJsonBody = document.querySelector("#custom-json-body");

	customJsonBody?.addEventListener("input", ()=>{
		if(currentlySelectedPredefinedBtn === loadCustomJsonBodyBtn) {
			deselectButton(currentlySelectedPredefinedBtn);
		}
	})

	loadCustomJsonBodyBtn?.addEventListener("click", ()=> {
		if(currentlySelectedPredefinedBtn) {
			deselectButton(currentlySelectedPredefinedBtn);
		}

		currentlySelectedPredefinedBtn = loadCustomJsonBodyBtn;
		try {
			const json = JSON.parse(customJsonBody.value);
			console.log(json);
			loadDBFromJson(json)
		}
		catch(err) {
			console.error(err);
			selectButtonError(currentlySelectedPredefinedBtn);
			return;
		}
		selectButtonNormal(currentlySelectedPredefinedBtn);
	})

	const removeDiacriticsInSearchBtn = document.querySelector("#remove-diacritics-in-search");
	removeDiacriticsInSearchBtn?.addEventListener("click", (ev)=>{
		localStorage.setItem(removeDiacriticsKey,ev.target.checked);
	})

	const currentDB = localStorage.getItem(questionDbKey);
	if(currentDB) {
		const parsedDB = JSON.parse(currentDB);
		document.querySelector("#status-all").innerHTML = parsedDB.length;
	}

	const isDiacriticsEnabled = localStorage.getItem(removeDiacriticsKey);
	if(isDiacriticsEnabled === 'true') {
		removeDiacriticsInSearchBtn.checked = true;
	}


})()