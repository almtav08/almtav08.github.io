import * as THREE from 'https://unpkg.com/three@0.153.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.153.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
var canvas = document.getElementById("canv-div");
const renderer = new THREE.WebGLRenderer();
renderer.setSize( canvas.clientWidth, canvas.clientHeight );
canvas.appendChild( renderer.domElement );

var loader = new GLTFLoader();
loader.load( 'static/desktop.gltf', function ( gltf ) {
        gltf.scene.position.set(0, 0, 0);
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    }
);

scene.background = new THREE.Color( 0xffffff );
var light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
scene.add( light );

// create a camera to see the object as if was infront of the camera and in real size and look at the object
const camera = new THREE.PerspectiveCamera( 75, canvas.clientWidth / canvas.clientHeight, 0.1, 100 );
camera.position.set(-0.6, 0.6, 0.2);
camera.lookAt(2, 0, 0.6);

var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
