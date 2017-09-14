import * as THREE from 'three';
import state from './index';

import visualizerTypes from './visualizerTypes';

const objectPool = [];

function objectFactory(_this, scene) {

    let visualizer = _this;

    // scene.background = new THREE.Color(0xffffff);
    // scene.fog = new THREE.Fog(0xffffff, 1, 10000);

    for (let i = 0; i < visualizer.objNum; i++) {

        let type = visualizerTypes[visualizer.state];

        // assign array position to new 3d objects
        let assignment;
        assignment = new THREE.Mesh(type.geometry, type.material);


        visualizer.objArray[i] = assignment;
        let thisObject = visualizer.objArray[i];
        //NB: probably varying positions


        thisObject.position.set(((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65)), -165, (5 * visualizer.objNum));


        //    // thisObject.position.x.set(type.position.x);
        //    // thisObject.position.y.set(type.position.y);
        // }


        // thisObject.rotation.x += type.rotation;

        // thisObject.rotation.y += 0.01;



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





export default objectFactory;




//bottom
