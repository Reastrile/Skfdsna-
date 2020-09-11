import { decrypt } from './decrypt.js';
import { hash } from './hash.js';
import { password, encrypteddisplaytext } from './stor.js';

function getInputValue() {
	var input = document.getElementById("Password").value;

	if (hash(input) == password) {
		alert("Correct: ".concat(decrypt(encrypteddisplaytext)));
	} else {
		alert("Incorrect");
	}
}
