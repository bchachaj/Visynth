import * as THREE from 'three';
import state from './index';

import visualizerTypes from './visualizerTypes';



function objectFactory(_this, scene) {

    let visualizer = _this;
    for (let i = 0; i < visualizer.objNum; i++) {

        let type = visualizerTypes[visualizer.state];
        // assign array position to new 3d objects
        let assignment;
        assignment = new THREE.Mesh(type.geometry, type.material);

        visualizer.objArray[i] = assignment;
        let thisObject = visualizer.objArray[i];

        thisObject.position.set(((i - visualizer.objNum) * 50.3 + (window.innerWidth / 0.65)), -165, (5 * visualizer.objNum));

        let that = visualizer;

        that.objArray[i].rotation.x = 0;
        function animate() {
            requestAnimationFrame(animate);
            thisObject.rotation.x += 0.005;
        }
        animate();
        scene(thisObject);

    }

}





export default objectFactory;




//bottom