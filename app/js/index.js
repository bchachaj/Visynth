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
    // console.log(i);

    //one geometry plz 


    let geometry = new THREE.BoxGeometry( 0.7, 0.7, 0.7);

  // geometry = new THREE.BufferGeometry();



    let material = new THREE.MeshLambertMaterial( { color: 0xBADA55 } );

    this.objArray[i] = new THREE.Mesh( geometry, material );
    this.objArray[i].position.set(i - this.objNum, 5, 10);
    

    this.scene.add(this.objArray[i]);
    //export
    // this.objArray.push(mesh);
  }

};

































