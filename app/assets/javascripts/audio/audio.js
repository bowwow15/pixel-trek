var ar_audio = new Howl({
  src: ['/audio/airsoft.mp3'],
  loop: false
});

var reload_audio = new Howl({
  src: ['/audio/reload.mp3'],
  loop: false
});

let randomMusic = Math.floor(Math.random() * (5 - 1)) + 1;
var music_audio = new Howl({
  src: ['/audio/music' + randomMusic + '.mp3'],
  loop: true
});

var Audio = {
	playing_audio: [],

	startAudio: function (audio) {
		audio.play();

		this.playing_audio.push(audio);
	},

	stopAudio: function (audio) {
		audio.stop();

		this.playing_audio.splice(Audio.playing_audio.indexOf(audio), 1); //delete from array
	}
};