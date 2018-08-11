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