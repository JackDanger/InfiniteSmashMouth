function init() {
	buffer = new Tone.Buffer("https://dl.dropboxusercontent.com/u/37873577/chunk.mp3", function(){
		meme();
	});
}

var buffer;

function meme() {
	var player = new Tone.Player().toMaster();
	player.buffer = buffer;
	player.start();
	setTimeout(meme, 8715);
}
