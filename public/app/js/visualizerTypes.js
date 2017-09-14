import * as THREE from 'three';


const visualizerTypes = {
    disk: {
        geometry: new THREE.BoxGeometry(29.7, 29.7, 29.7),
        material: new THREE.MeshStandardMaterial({
            color: 0xff0000,
            roughness: 0.2,
            metalness: 0.7
        }),
        rotation: 0.02
    },

    spike: {
        geometry: new THREE.TetrahedronBufferGeometry(19.7),
        material: new THREE.MeshPhongMaterial({
            color: 0x2f49dd,
            wireframe: true

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
    },

    next: {
        geometry: new THREE.TetrahedronBufferGeometry(19.7),
        material: new THREE.MeshStandardMaterial({
            color: 0x2fd4f4,
            metalness: 0.9, 
            roughness: 0.2

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
    },

    ghost: {
       geometry: new THREE.BoxGeometry(39.7, 39.7, 39.7),
        material: new THREE.MeshStandardMaterial({
            color: 0x2fd4f4,
            roughness: 0.2,
            metalness: 0.7

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


export default visualizerTypes;