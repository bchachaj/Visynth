const audioContext = new (window.AudioContext || window.webkitAudioContext)();


// function audioAnalyzer() {
// 	this.ctx = new audioContext

// 	ctx.createMediaStreamSource()
// }

// take in audio

// window.onload = function() {
//   var ctx = new AudioContext();
//   var audio = document.getElementById('audio-player');
//   var audioSrc = ctx.createMediaElementSource(audio);
//   var analyser = ctx.createAnalyser();
//   // we have to connect the MediaElementSource with the analyser 
//   audioSrc.connect(analyser);
//   // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
 
//   // frequencyBinCount tells you how many values you'll receive from the analyser
//   var frequencyData = new Uint8Array(analyser.frequencyBinCount);
 
//   // we're ready to receive some data!
//   // loop
//   function renderFrame() {
//      requestAnimationFrame(renderFrame);
//      // update data in frequencyData
//      analyser.getByteFrequencyData(frequencyData);
//      // render frame based on values in frequencyData
//      // console.log(frequencyData)
//   }
//   audio.start();
//   renderFrame();
// };
// window.addEventListener('load', fileUpload, false);


// const fileUpload = () => {



// 	input.onchange = function(e) {
// 		var sound = document.getElementById('audio-player');
// 		sound.src = URL.createObjectURL(this.files[0]);

// 		sound.onend = function(e) {
// 			URL.revokeObjectURL(this.src);
// 	}


// }


// }

// var source = context.createBufferSource();


// var analyser = context.createAnalyser();

// console.log(context);
// console.log(analyser);

// var bufferLength = analyser.frequencyBinCount;
// var dataArray = new Uint8Array(bufferLength);
// var c = analyser.getByteTimeDomainData(dataArray);

// return c;

// };

// export default fileUpload;









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