var addEventListener(typeOfEvent, callback) {
	var eventThatHappened = {
		eventType: "keydown",
		key: "p",
		durationOfKeypress: 2 
	}

	if (eventThatHappened.eventType === typeOfEvent) {
		callback(eventThatHappened);
	}
}
