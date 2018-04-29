var airsoft_audio = new Audio('/audio/airsoft.mp3');
var reload_audio = new Audio('/audio/reload.mp3');

let randomMusic = Math.floor(Math.random() * (5 - 1)) + 1;
var music_audio = new Audio('/audio/music' + randomMusic + '.mp3');

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

music_audio.addEventListener('ended', function() { //loop music audio, started by M key...
    this.currentTime = 0;
    this.play();
}, false);