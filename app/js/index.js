import * as THREE from 'three';
import objectFactory from './objectFactory';
import visualMediator from './mediator';


window.onload = () => {
  // let viz = new Visualizer();
  let viz  =  new Visualizer();
  viz.initialize();
  // viz.createObjects();
  viz.processAudio();

  let med = visualMediator();

  // console.log(visualMediator);

  // console.log(visualMediator().init());

  med.init()
  med.setVisualState('spike');
  console.log(med.state);

  //object set c = [...click]

};



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

  this.scene = new THREE.Scene();


  let HEIGHT = window.innerHeight;
  let WIDTH = window.innerWidth;

  this.renderer = new THREE.WebGLRenderer({antialias: true, canvas: document.getElementById('canvas')});

  this.renderer.setSize( WIDTH, HEIGHT );

  this.renderer.setClearColor(0xd0101010);

  this.renderer.setPixelRatio(window.devicePixelRatio);

  this.scene = new THREE.Scene();


  // this.camera = new THREE.PerspectiveCamera( 42, WIDTH / HEIGHT, 1, 10000);
  // this.camera.position.z = 6000;
  // this.camera.position.x = -WIDTH * 5 ;

  this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
  this.camera.position.z = 1200;



  //updating the camera


  geometry = new THREE.TetrahedronBufferGeometry( 550 );
  material = new THREE.MeshLambertMaterial( { color: 0x2f4f4f} );

  mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.x += 0.21;
      mesh.rotation.y += 0.52;
      mesh.rotation.z += 0.75;
  mesh.position.set(0,0, -1000)
  this.scene.add(mesh);

  //field of anti-tank barriers => lay out a grid, and jump position up/down. plus size


  //light, camera, action

  const light = new THREE.AmbientLight(0xffffbb, 0.9);
  this.scene.add(light);

  const pointLight = new THREE.PointLight(0xffffbb, 0.8);
  this.scene.add(pointLight);

  const directLight = new THREE.DirectionalLight(0xffffbb, 0.3);
  this.scene.add(directLight);

  var hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  this.scene.add( light );


  let that = this;

  function animate() {
      requestAnimationFrame( animate );

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      that.renderer.render(that.scene, that.camera );
  }
  animate();

  const _addtoscene = (arg) => {
    this.scene.add(arg);
  };

  const factory = (function(){
    objectFactory(that, _addtoscene);

  }).bind(this);
  factory();
};







Visualizer.prototype.processAudio = function() {

  let analyser;
  const context = new AudioContext();
  const audio = document.getElementById('audio-player');

  const audioSource = context.createMediaElementSource(audio);
  audioSource.crossOrigin = "anonymous";


  this.analyser = context.createAnalyser();

  // this.analyser.fftSize = 2048;
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
      let value = frequencyData[i * offset] / 10;


      //bullshit, don't do this
      //(checking that it's a group though)
      if(that.objArray[i].children[0]) {
        value = value < 10 ? 10 : value;
        that.objArray[i].scale.z = value / 10;
        that.objArray[i].children[0].material.color.setHex( 0x157cd6);
      } else {
        
      that.objArray[i].material.color.setHex( 0x157cd6);
      value = value < 1 ? 1 : value;
      that.objArray[i].scale.y = value;
      that.objArray[i].scale.z =  value ;

      // ????
      that.objArray[i].scale.x = value * 0.1;
      }


      // //icicle values



      // that.objArray[i].scale.x = value * 0.1;

      // var hue = i/this.analyser.frequencyBinCount * 360;
     // drawContext.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
      // if( value > 7) {
      //   that.objArray[i].children[0].material.color.setHex( 0x157cd6);
      //   // that.objArray[i].children[0].material.color.setHex( 0x800000);
      // }
      // else if (value > 30 && value <= 37) {
      //   that.objArray[i].children[0].material.color.setHex( 0x578adb);
      //   // that.objArray[i].children[0].material.color.setHex( 0xcc0000);
      // } else if (value < 30 && value > 20 ){
      //   that.objArray[i].children[0].material.color.setHex( 0x9ec3ff);
      //   // that.objArray[i].children[0].material.color.setHex( 0xe60000);
      // } else if (value < 20 && value > 10) {
      //    that.objArray[i].children[0].material.color.setHex( 0xbec9db);
      //    // that.objArray[i].children[0].material.color.setHex( 0xff3300);
      // } else {
      //     that.objArray[i].children[0].material.color.setHex( 0x000000);
      //     // that.objArray[i].children[0].material.color.setHex( 0xff3333);
      // }
    }
  } 


  renderFrame();
}



//helper --> can check material of object directly 


//bottom of file















