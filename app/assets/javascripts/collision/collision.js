var Collision = {
	check: function (object1, object2, object1Width, object1Height, object2Width, object2Height) {
	    let touching = false;

	    if (object1[0] < object2[0] + object2Width  && object1[0] + object1Width  > object2[0] && object1[1] < object2[1] + object2Height && object1[1] + object1Height > object2[1]) {
	      touching = true;
	    }

	    return touching;
	},

	inverseCheck: function (object1, object2, object1Width, object1Height, object2Width, object2Height) {
		let touching = false;

	    if (object1[0] > object2[0] + object2Width  && object1[0] - object1Width  < object2[0] && object1[1] > object2[1] + object2Height && object1[1] + object1Height < object2[1]) {
	      touching = true;
	    }

	    return touching;
	}
};