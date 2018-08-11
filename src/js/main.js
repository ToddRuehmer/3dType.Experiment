//Init Canvas
var renderer = new THREE.WebGLRenderer({
	alpha: true,
	antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ccc');
document.body.appendChild(renderer.domElement);

//Scene
var scene = new THREE.Scene();

//Ground
var surface = new Surface();

//Sphere
var obj = new Body();

//Text
loadFont();

//Animate Text
animate();

//Camera
var camera = new Camera;

//Lights
light();

//Begin Render
renderer.render(scene, camera.camera);
render = function() {
	requestAnimationFrame(render);
	renderer.render(scene, camera.camera);
};

//Render
render();