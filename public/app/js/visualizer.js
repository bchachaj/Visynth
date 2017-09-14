    import viewFactory from './objectFactory';
import state from './index';
import * as THREE from 'three';
const OrbitControls = require( 'three-orbit-controls' )( THREE );
import * as TWEEN from 'tween.js';

function Visualizer() {

    this.objNum = 60;
    this.objArray = new Array();
    this.state = state;

    this.scene;
    this.camera;
    this.renderer;
    this.controls;
    this.analyser;
}


Visualizer.prototype.initialize = function() {
    let scene, camera, renderer;
    let geometry, material, mesh, controls;

    this.scene = new THREE.Scene();


    let HEIGHT = window.innerHeight;
    let WIDTH = window.innerWidth;

    this.renderer = new THREE.WebGLRenderer({
     antialias: true,
     canvas: document.getElementById('canvas')

      });

    this.renderer.setSize(WIDTH, HEIGHT);
    this.renderer.setClearColor(0x090909);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1800;

    // this.camera.lookAt(window.innerWidth / 0.5, -165, 250);

    const light = new THREE.AmbientLight(0xffffbb, 0.9);
    this.scene.add(light);
    const l2 = new THREE.HemisphereLight(0xffffbb, 0.9);
    this.scene.add(l2);
    // const l3 = new THREE.AmbientLight(0xffffbb, 0.9, 2);
    // this.scene.add(l3);

    const pointLight = new THREE.PointLight(0xffffbb, 0.8);
    this.scene.add(pointLight);

    // const directLight = new THREE.DirectionalLight(0xffffbb, 0.3);
    // this.scene.add(directLight);

    const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    this.scene.add(hemiLight);

    // this.controls = new OrbitControls(this.camera);
    // controls.update();

    let that = this;

};


Visualizer.prototype.generateObjects = function() {

    let that = this;

    const _addtoscene = (arg) => {
        this.scene.add(arg);
    };

    const factory = (function() {
        viewFactory(that, _addtoscene);

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

    this.analyser.fftSize = 2048;
    this.analyser.smoothingTimeConstant = 0.8;

    audioSource.connect(this.analyser);
    //connect to actually hear sound when played
    audioSource.connect(context.destination);

    var frequencyData = new Uint8Array(this.analyser.frequencyBinCount);


    let that = this;

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.addEventListener( 'change', renderFrame );
    // this.controls.autoRotate = true;
    // this.controls.target.set(100,100,100);
    // this.controls.enableZoom = true;
    
    var radius = 1800;
    var theta = 0;

    function renderFrame() {

     theta += 0.1;
     that.camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta / 2 ));
     that.camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta / 5 ));
     // that.camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ));
     that.camera.lookAt(that.objArray[30].position);
     requestAnimationFrame(renderFrame);
        // that.controls.update();
    // that.camera.lookAt(that.objArray[17].position);
        that.analyser.getByteFrequencyData(frequencyData);
        const offset = Math.round(frequencyData.length / that.objNum / 2);
        that.renderer.render(that.scene, that.camera);
        // that.controls.update();

        for (var i = 0; i < that.objNum; i++) {
            let value = frequencyData[i * offset] / 10;

            value = value < 2 ? 2 : value;
            that.objArray[i].scale.y = value;
            that.objArray[i].scale.z = value;
            that.objArray[i].scale.x = value * 0.1; 
           
        }
    }

    renderFrame();
};



export default Visualizer;









//bottom of file
