import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// create a scene, that will hold all our elements such as objects, cameras and lights and add escritorio.gltf.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

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

camera.position.set( -0.5, 0.5, 0.3 );
camera.lookAt( 0, 0.5, 0.3 );

var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
