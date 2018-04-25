var GameMath = {
	events: [],

	seconds: function () {
		return Date.now() / 1000;
	},

	queuedEvents: function () {
		this.events.forEach(function (element, index) {
			if (element.when <= Date.now()) {
				if (!element.deprecate) {
					element.event(element.params);
				}

				GameMath.events[index].deprecate = true; //deprecate
			}
		});
	},

	queueEvent: function (event, when, params) {
		this.events.push({
			event: event, //function stored in object
			when: when,
			params: params,

			deprecate: false
		});
	},

	element: function (tag_id) {
		return document.getElementById(tag_id)
	}
};