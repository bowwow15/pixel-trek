var GameMath = {
	events: [],

	seconds: function () {
		return Date.now() / 1000;
	},

	queuedEvents: function () {
		this.events.forEach(function (element, index) {
			if (element.when <= Date.now()) {
				element.event(element.params);

				GameMath.events.splice(index, 1); //delete
			}
		});
	},

	queueEvent: function (event, when, params) {
		this.events.push({
			event: event, //function stored in object
			when: when,
			params: params
		});
	}
};