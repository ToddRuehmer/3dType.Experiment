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