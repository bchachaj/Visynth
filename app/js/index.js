import * as THREE from 'three';
import fileUpload from './audio';


let scene, camera, renderer;
let geometry, material, mesh;

renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});

renderer.setSize( window.innerWidth, window.innerHeight );

renderer.setClearColor(0x00ff00);


renderer.setPixelRatio(window.devicePixelRatio);

  scene = new THREE.Scene();


  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 8000);
  camera.position.z = 50;

  geometry = new THREE.BoxGeometry( 100, 100, 100, 100 );

  // geometry = new THREE.BufferGeometry();



  material = new THREE.MeshLambertMaterial( { color: 0xBADA55 } );

  mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(0,0, -1000)
  scene.add(mesh);

  var light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  var pointLight = new THREE.PointLight(0xffffff, 0.5);
  scene.add(pointLight);

  var directLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directLight)

let audio = fileUpload();
console.log(audio);
  
function animate() {
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera );
}

animate();
