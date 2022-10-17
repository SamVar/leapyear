function ckeckYear() {
	let textField = document.getElementById("textID");
	let result = document.getElementById("result");
	let year = textField.value;
	var isLeap;

	if (isNaN(year)) {
		alert("Not a valid year");
		textField.value = "";
	} else if (year == 0 || year == null) {
		alert("No data has been entered");
	} else {
		if (year % 4 == 0) {
			if (year % 100 == 0) {
				if (year % 400 == 0) {
					isLeap = "Leap";
					result.style.color = "green";
					result.innerHTML = year + " is a " + isLeap + " year";
				} else {
					isLeap = "Not a leap";
					result.innerHTML = year + " is " + isLeap + " year";
					result.style.color = "red";
				}
			} else {
				isLeap = "Leap";
				result.style.color = "green";
				result.innerHTML = year + " is a " + isLeap + " year";
			}
		} else {
			isLeap = "Not a leap";
			result.style.color = "red";
			result.innerHTML = year + " is " + isLeap + " year";
		}
	}

	result.style.fontSize = "1.3rem";
	result.style.marginBottom = "3%";
}

function startOver() {
	let textField = document.getElementById("textID");
	let result = document.getElementById("result");
	result.innerHTML = "";
	textField.value = "";
}
