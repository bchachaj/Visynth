import * as THREE from 'three';
import state from './index';

const visualizerTypes = {
    disk: {
        geometry: new THREE.BoxGeometry(19.7, 19.7, 19.7),
        material: new THREE.MeshStandardMaterial({
            color: 0xb30000,
            roughness: 0.2,
            metalness: 0.7
        }),
        rotation: 0.02
    },

    spike: {
        geometry: new THREE.TetrahedronBufferGeometry(50),
        material: new THREE.MeshLambertMaterial({ color: 0xBADA55 }),
        position: {
            y: Math.random() * 1000 - 500,
            z: Math.random() * 700 - 500,
        },
        rotation: {
            x: Math.random() * 2 * Math.PI,
            y: Math.random() * 2 * Math.PI
        },
        group: new THREE.Group()
    },



};



function objectFactory(_this, scene) {

    let visualizer = _this;
    //precursors for 3d object



    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 1, 10000);

    for (let i = 0; i < visualizer.objNum; i++) {
        // assign array position to new 3d objects
        const z = new THREE.Mesh(visualizerTypes.disk.geometry, visualizerTypes.disk.material)
        visualizer.objArray[i] = z;

        //NB: probably varying positions

        visualizer.objArray[i].position.set(((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65)), -165, (5 * visualizer.objNum));

        visualizer.objArray[i].rotation.x += visualizerTypes.disk.rotation;
        // visualizer.objArray[i].rotation.y += 0.01;



        let that = visualizer;

        function animate() {
            requestAnimationFrame(animate);
            that.objArray[i].rotation.x += 0.005;
            // that.objArray[i].rotation.y += 0.015;
        }

        animate();

        scene.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 1, 10000);


        // mesh.matrixAutoUpdate = false;
        // mesh.updateMatrix();
        // group.add(mesh);


        // visualizer.objArray[i] = group;


        // scene.add( group );


        scene(visualizer.objArray[i]);

    }

}





export default objectFactory;




//bottom