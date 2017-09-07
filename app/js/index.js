import * as THREE from 'three';
// import fil from './audio';




window.onload = () => {
  // let viz = new Visualizer();
  let viz  =  new Visualizer();
  viz.initialize();
  viz.createObjects();
  viz.processAudio();
};


function Visualizer() {
  //set some constants

  //(at this time) arbitrary number of bars
  this.objNum = 80;

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

  this.renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});

  this.renderer.setSize( WIDTH, HEIGHT );

  this.renderer.setClearColor(0x313a49);

  this.renderer.setPixelRatio(window.devicePixelRatio);

  this.scene = new THREE.Scene();


  this.camera = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 1, 8000);
  this.camera.position.z = 50;


  //updating the camera

  geometry = new THREE.BoxGeometry( 100, 100, 100, 100 );


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

  let that = this;

  function animate() {
      requestAnimationFrame( animate );

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      that.renderer.render(that.scene, that.camera );
  }
  animate();

};


Visualizer.prototype.createObjects = function() {

  for (let i = 0; i < this.objNum; i++) {

    //precursors for 3d object
    let geometry = new THREE.BoxGeometry( 0.7, 0.7, 0.7);
    let material = new THREE.MeshLambertMaterial( { color: 0xBADA55 } );

    //assign array position to new 3d objects
    this.objArray[i] = new THREE.Mesh( geometry, material );
    this.objArray[i].position.set(((i - this.objNum) * 1.3), 5, 10);
    

    this.scene.add(this.objArray[i]);
  }

};


Visualizer.prototype.processAudio = function() {

  let analyser;
  const context = new AudioContext();
  const audio = document.getElementById('audio-player');

  const audioSource = context.createMediaElementSource(audio);
  audioSource.crossOrigin = "anonymous";


  this.analyser = context.createAnalyser();

  this.analyser.fftSize = 8192;
  this.analyser.smoothingTimeConstant = 0.8;

  audioSource.connect(this.analyser);
  //connect to actually hear sound when played
  audioSource.connect(context.destination); 

  var frequencyData = new Uint8Array(this.analyser.frequencyBinCount);


  let that = this;

  function renderFrame() {
    requestAnimationFrame( renderFrame );

    that.analyser.getByteFrequencyData(frequencyData);

    const offset = Math.round(frequencyData.length / that.objNum);

    that.renderer.render(that.scene, that.camera);

    for (var i = 0; i < that.objNum; i++) {

      debugger;
      let value = frequencyData[i * offset] / 5;
      value = value < 1 ? 1 : value;
      that.objArray[i].scale.y = value;
      that.objArray[i].scale.z = value * 0.2;

      if( value > 37) {
        that.objArray[i].material.color.setHex( 0xd6399a);
      }
      else if (value > 30 && value <= 37) {
        that.objArray[i].material.color.setHex( 0xdd1713);
      } else if (value < 30 && value > 20 ){
        that.objArray[i].material.color.setHex( 0xff960c);
      } else if (value < 20 && value > 10) {
         that.objArray[i].material.color.setHex( 0xffdc44);
      } else {
          that.objArray[i].material.color.setHex( 0xBADA55);
      }
    }
  } 


  renderFrame();
}








//bottom of file















