import * as THREE from 'three';
// import fil from './audio';




window.onload = () => {
  // let viz = new Visualizer();
  let viz  =  new Visualizer();
  viz.initialize();
  viz.createObjects();
};



//document on load is going to generate everything needed



function Visualizer() {
  //set some constants

  //(at this time) arbitrary number of bars
  this.objNum = 60;

  // //store 3d objects to be manipulated 
  this.objArray = new Array();

  // // body...
  this.scene;
  this.camera; 
  this.renderer;
  this.controls;
  this.analyser;

}

Visualizer.prototype.initialize = function(){
 let scene, camera, renderer;
  let geometry, material, mesh;

  let HEIGHT = window.innerHeight;
  let WIDTH = window.innerWidth;

  renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});

  renderer.setSize( WIDTH, HEIGHT );

  renderer.setClearColor(0xffffff);

  renderer.setPixelRatio(window.devicePixelRatio);

  this.scene = new THREE.Scene();


  camera = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 1, 8000);
  camera.position.z = 50;


  //updating the camera

  geometry = new THREE.BoxGeometry( 100, 100, 100, 100 );

  // geometry = new THREE.BufferGeometry();

  material = new THREE.MeshLambertMaterial( { color: 0xBADA55 } );

  mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0,0, -1000)
  this.scene.add(mesh);

  var light = new THREE.AmbientLight(0xffffff, 0.5);
  this.scene.add(light);

  var pointLight = new THREE.PointLight(0xffffff, 0.5);
  this.scene.add(pointLight);

  var directLight = new THREE.DirectionalLight(0xffffff, 0.5);
  this.scene.add(directLight)

  // let audio = fileUpload();
  // console.log(audio);
  let that = this;

  function animate() {
      requestAnimationFrame( animate );

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(that.scene, camera );
  }
  animate();

};


Visualizer.prototype.createObjects = function() {

  for (let i = 0; i < this.objNum; i++) {
    //one geometry plz 

    //precursors for 3d object
    let geometry = new THREE.BoxGeometry( 0.7, 0.7, 0.7);
    let material = new THREE.MeshLambertMaterial( { color: 0xBADA55 } );

    //assign array position to new 3d objects
    this.objArray[i] = new THREE.Mesh( geometry, material );
    this.objArray[i].position.set(i - this.objNum, 5, 10);
    

    this.scene.add(this.objArray[i]);
  }

};


Visualizer.prototype.updateObjects = function() {

  //seperate getting obj?
  //get data, then affect the objArray. Scale on z - axis?
}


//Getting audio fall under the visualizer class? how else to access it?


Visualizer.prototype.processAudo = function() {
  let analyser;
  const context = new AudioContext();
  const audio = document.getElementById('audio-player');

  const audioSource = context.createMediaElementSource(audio);

  this.analyser = context.createAnalyser();

  audioSource.connect(analyser);
  //connect to actually hear sound when played
  audioSource.connect(context.destination); 

  var frequencyData = new Uint8Array(analyser.frequencyBinCount);

  //function renderframe == gets byte frequency, request animation frame 
  this.renderframe(frequencyData);

  function renderFrame() {
    requestAnimationFrame( renderFrame );

    this.analyser.getByteFrequencyData(frequencyData);
  } 

  renderFrame();
}



// Visualizer.prototype.renderFrame = function(frequencyData) {
//  requestAnimationFrame( renderFrame );
//  this.analyser.getByteFrequencyData(frequencyData);

//   const offset = frequencyData / this.numObj;

//  for (var i = 0; i < this.numObj; i++) {
//     let j = 
//  }
// }








 function renderFrame() {
  //        requestAnimationFrame(renderFrame);
   //       analyser.getByteFrequencyData(frequencyData);

        //STIL
  //        var width = Math.floor(1/frequencyData, 10);


      //ITERATE THROUGH AND SCALE THE Z AXIS 

      // how much scale: could be lengh of freq / numObj?

      const offset = frequencyData / this.numObj;

   //     for (let i = 0; i < this.numObj; i++) {
   //       let value = frequencyData[i];
   //       var percent = value / 256;
   //       height = HEIGHT * percent;

            //***dont need positioning offset for THREE 
   //       offset = HEIGHT - height - 1;

        //*dont need width either
   //       var bar_width = (WIDTH/(analyser.frequencyBinCount / 2));


   //       ctx.fillRect(i * bar_width, offset, bar_width, height); 

   //     }
  //       }
  //       // audio.play();
  //       renderFrame();
  //   };
















// window.onload = getAudio();

  //   function getAudio() {
  //       var context = new AudioContext();
  //       var audio = document.getElementById('audio-player');
  //       var audioSource = context.createMediaElementSource(audio);
  //    // audioSource.crossOrigin = "anonymous";
  //       var analyser = context.createAnalyser();
  //       analyser.fftSize = 8192;
  //       analyser.smoothingTimeConstant = 0.8;
  //       audioSource.connect(analyser);
  //       audioSource.connect(context.destination);

  //       var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  //           console.log(analyser.frequencyBinCount);

  //        ctx.clearRect(0,0,canvas.width, canvas.height);

  //        var WIDTH = canvas.height;
    // var HEIGHT = canvas.width;


  //   function renderFrame() {
  //        requestAnimationFrame(renderFrame);
   //       analyser.getByteFrequencyData(frequencyData);

        //STIL
  //        var width = Math.floor(1/frequencyData, 10);


      //ITERATE THROUGH AND SCALE THE Z AXIS 

      // how much scale: could be lengh of freq / numObj?

      const offset = frequencyData / this.numObj;

   //     for (let i = 0; i < this.numObj; i++) {
   //       let value = frequencyData[i];
   //       var percent = value / 256;
   //       height = HEIGHT * percent;

            //***dont need positioning offset for THREE 
   //       offset = HEIGHT - height - 1;

        //*dont need width either
   //       var bar_width = (WIDTH/(analyser.frequencyBinCount / 2));


   //       ctx.fillRect(i * bar_width, offset, bar_width, height); 

   //     }
  //       }
  //       // audio.play();
  //       renderFrame();
  //   };

    // console.log(global);

    // for(let j = 0; j < global.length; j++) {
    //  console.log(global[j]);
    // }
    // console.log(renderer);






//bottom of file















