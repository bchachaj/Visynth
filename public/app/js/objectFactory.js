import * as THREE from 'three';
import state from './index';

import visualizerTypes from './visualizerTypes';

const objectPool = [];

const place = { next: {
        geometry: new THREE.TetrahedronBufferGeometry(19.7),
        material: new THREE.MeshPhongMaterial({
            color: 0xffffff,


        }),
        position: {
            y: Math.random() * 1000 - 500,
            z: Math.random() * 700 - 500,
        },
        rotation: {
            x: Math.random() * 2 * Math.PI,
            y: Math.random() * 2 * Math.PI
        },
        group: new THREE.Group()
    }
};

function viewFactory(_this, scene) {

    let visualizer = _this;

    // scene.background = new THREE.Color(0xffffff);
    // scene.fog = new THREE.Fog(0xffffff, 1, 10000);

    for (let i = 0; i < visualizer.objNum; i++) {

        let type = visualizerTypes["next"];

        // assign array position to new 3d objects
        let assignment;

        assignment = new THREE.Mesh(type.geometry, type.material);

        visualizer.objArray[i] = assignment;
        let thisObject = visualizer.objArray[i];
        //NB: probably varying positions


        thisObject.position.set(((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65)), -165, (5 * visualizer.objNum));
     

        // let x = type.position.x;

        // if(x){
           // thisObject.position.x.set(type.position.x);
        // thisObject.position.set((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65), type.position.y, (5 * visualizer.objNum));
            // console.log(type.position);
            // thisObject.rotation.x += type.rotation;
            // thisObject.rotation.y += 0.01;
        // }
        // }

        let that = visualizer;
        that.objArray[i].rotation.x = 0;
        function animate() {
            requestAnimationFrame(animate);
            that.objArray[i].rotation.x += 0.005;

        }
        animate();

        scene.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 1, 10000);

        // mesh.matrixAutoUpdate = false;
        // mesh.updateMatrix();
        // group.add(mesh);
        // thisObject = group;
        // scene.add( group );

        scene(thisObject);

    }

}


function objectFactory(_this, scene) {

    let visualizer = _this;

    // scene.background = new THREE.Color(0xffffff);
    // scene.fog = new THREE.Fog(0xffffff, 1, 10000);

    for (let i = 0; i < visualizer.objNum; i++) {

        let type = visualizerTypes["next"];

        // assign array position to new 3d objects
        let assignment;

        assignment = new THREE.Mesh(type.geometry, type.material);

        visualizer.objArray[i] = assignment;
        let thisObject = visualizer.objArray[i];
        //NB: probably varying positions


        thisObject.position.set(((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65)), -165, (5 * visualizer.objNum));
     

        // let x = type.position.x;

        // if(x){
           // thisObject.position.x.set(type.position.x);
        // thisObject.position.set((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65), type.position.y, (5 * visualizer.objNum));
            // console.log(type.position);
            // thisObject.rotation.x += type.rotation;
            // thisObject.rotation.y += 0.01;
        // }
        // }

        let that = visualizer;
        that.objArray[i].rotation.x = 0;
        function animate() {
            requestAnimationFrame(animate);
            that.objArray[i].rotation.x += 0.005;

        }
        animate();

        scene.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 1, 10000);

        // mesh.matrixAutoUpdate = false;
        // mesh.updateMatrix();
        // group.add(mesh);
        // thisObject = group;
        // scene.add( group );

        scene(thisObject);

    }

}





export default viewFactory;




//bottom
