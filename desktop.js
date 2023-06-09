import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
var canvas = document.getElementById("canv-div");
const renderer = new THREE.WebGLRenderer();
renderer.setSize( canvas.clientWidth, canvas.clientHeight );
canvas.appendChild( renderer.domElement );

var loader = new GLTFLoader();
loader.load( 'desktop.gltf', function ( gltf ) {
        gltf.scene.position.set(0, 0, 0);
        gltf.scene.rotation.x = 0.3;
        gltf.scene.rotation.y = 0.95;
        //gltf.scene.rotation.z = -Math.PI / 10;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    }
);

scene.background = new THREE.Color( 0xffffff );
var light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
scene.add( light );

const camera = new THREE.PerspectiveCamera( 40, canvas.clientWidth / canvas.clientHeight, 0.1, 100 );
camera.position.z = 1.3;
camera.position.y = 0.3;
camera.position.x = 0.25;

var animate = function () {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}

animate();