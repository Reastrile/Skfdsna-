function getInputValue() {
	var input = document.getElementById("Password").value;

	if (hash(input) == password) {
		alert("Correct: ".concat(decrypt(encrypteddisplaytext)));
	} else {
		alert("Incorrect");
	}
}
