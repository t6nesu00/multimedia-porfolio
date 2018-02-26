function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}
if (storageAvailable('localStorage')) {
	//console.log("Storage is available");
}
else {
	console.log("Storage is not available");
}
function toggleAudio() {
	var status =  document.getElementById('audioPlayer');
	var buttonStatus = document.getElementById("playPause"); 
	if (audioPlayer.paused){
		status.play();
		buttonStatus.innerHTML = "Pause";
	}
	else {
		status.pause();
		buttonStatus.innerHTML = "Play";
	}

}

function toggleVideo() {
	var status =  document.getElementById('videoPlayer');
	var vButtonStatus = document.getElementById("videoControl"); 
	if (videoPlayer.paused){
		status.play();
		vButtonStatus.innerHTML = "Pause";
	}
	else {
		status.pause();
		vButtonStatus.innerHTML = "Play";
	}

}
function goFullscreen(id) {
  var element = document.getElementById("videoPlayer");       
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }  
}