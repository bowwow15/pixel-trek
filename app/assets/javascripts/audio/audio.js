var airsoft_audio = new Audio('/audio/airsoft.mp3');
var reload_audio = new Audio('/audio/reload.mp3');

var Audio = {
	playing_audio: [],

	startAudio: function (audio) {
		audio.play()

		this.playing_audio.push(audio);
	},

	stopAudio: function (audio) {
		audio.pause();
		audio.currentTime = 0;

		this.playing_audio.splice(Audio.playing_audio.indexOf(audio), 1); //delete from array
	}
};