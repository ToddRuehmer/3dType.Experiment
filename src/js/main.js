var planetsText = '';
$.each($('.planetnav a'), function(i) {
	var text = i != 0 ? '\n' + $(this).text() : $(this).text();
	planetsText += text;
});

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
function Surface(name) {

	var self = this;
	self.name = name;
	self.geometry = new THREE.PlaneGeometry(50, 50, 10, 10);
	self.material = new THREE.MeshPhongMaterial({
		color: 0x999999,
		wireframe: true
	});
	self.mesh = new THREE.Mesh(self.geometry, self.material);
	self.mesh.position.y = 0
	self.mesh.rotation.x = Math.PI / -2;
	scene.add(self.mesh);
}
var surface = new Surface();

//Sphere
function Body({
	color = 'ff0000',
	size = 1
} = {}) {
	var self = this;
	self.geometry = new THREE.SphereGeometry(size, 100, 100);
	self.material = new THREE.MeshBasicMaterial({
		color: '#' + color,
		wireframe: false
	});
	self.mesh = new THREE.Mesh(self.geometry, self.material);

	scene.add(self.mesh);
};
var obj = new Body();

//Text
var text,
	textMesh,

  textMaterial = new THREE.MeshBasicMaterial({
	  color: 0xffffff,
	  wireframe: false
  }),
  font;

function loadFont() {

	var loader = new THREE.FontLoader();
	loader.load('/fonts/optima.json', function(response) {

		font = response;
		textGeometry = new THREE.TextGeometry(planetsText, {
			font: font,
			weight: 'regular',
			size: 2,
			height: 0
		});

		textMesh = new THREE.Mesh(textGeometry, textMaterial);
		textMesh.boundingBox = new THREE.Box3().setFromObject(textMesh)
		textMesh.size = textMesh.boundingBox.getSize();
		//scene.add(textMesh);
	});


}
loadFont();

//Animate Text
var textPos = 0;
var scrollSpeed = .05;
window.addEventListener('wheel', function(e) {
	textPos += e.deltaY * scrollSpeed;
	textPos = textPos < 0 ? 0 : textPos;
	textPos = textPos > textMesh.size.y ? textMesh.size.y : textPos;
	textMesh.position.y = textPos;
});

//Camera
function Camera() {
	var self = this;
	self.camera = new THREE.PerspectiveCamera(30, // Field of view
		window.innerWidth / window.innerHeight, // Aspect ratio
		0.1, // Near plane
		10000 // Far plane
	);
	self.camera.position.set(50, 50, 50);
	self.lookAtPos = new THREE.Vector3();
	self.camera.lookAt(self.lookAtPos);
}
var camera = new Camera;

//Lights
var light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.3);
light.position.set(0, 500, 0);
scene.add(light);
dirLight = new THREE.PointLight(0xffffff, .75);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(0, 0, 0);
dirLight.position.multiplyScalar(50);
scene.add(dirLight);

//Begin Render
renderer.render(scene, camera.camera);
render = function() {
	requestAnimationFrame(render);
	renderer.render(scene, camera.camera);
};
revolve = function() {
	requestAnimationFrame(revolve);
};
revolve();

//Render
render();