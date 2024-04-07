var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 1.115;
	console.log("Speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current time: " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerText = "Mute";
	} else {
		video.muted = true;
		this.innerText = "Unmute";
	}
});

document.getElementById("slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	console.log("The current volume is " + video.volume);
	document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	console.log("Old School Video")
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
