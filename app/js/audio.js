// var audio = new Audio();

// audio.src = 'data/filler.mp3';
// audio.controls = true;
// audio.autoplay = true;
// audio.loop = true;


// take in audio

const fileUpload = () => {

	console.log('conn');

input.onchange = function(e) {
	debugger;
	var sound = document.getElementById('audio-player');
	sound.src = URL.createObjectURL(this.files[0]);

//revoking the blobURI when you don't need it 
	sound.onend = function(e) {
		URL.revokeObjectURL(this.src);
	}
}
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

console.log(audioCtx);
console.log(analyser);

var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
var c = analyser.getByteTimeDomainData(dataArray);

return c;

};

export default fileUpload;
//analyzer node 



// //node is connect at some point between your source and your destination

// source = audioCtx.createMediaStreamSource(stream);
// source.connect(analyser);

// analyser.connect(distortion);

// distortion.connect(audioCtx.destination);

// //will caption audio data in a certain frequency domain, depending of what is specified 
// //in AnalyserNode.fftSize ( default is 2048 );



// // specifiy a data array to be fed from the source


// var bufferLength = analyser.frequencyBinCount;
// var dataArray = new Uint8Array(bufferLength);
// analyser.getByteTimeDomainData(dataArray);

//array



//different data averaging constants = AnalyserNode.smoothingTimeConstant;


//Capture frequency data 

// Analyser.getFloatFrequencyData() 








//bottom of file