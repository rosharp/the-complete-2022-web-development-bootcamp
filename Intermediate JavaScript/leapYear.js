var result = ""
if (year % 4 === 0) {
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			result = "Not leap year."
		}
	}
	else {
		result = "Leap year."
	}
}
else {
	result = "Not leap year."
}
