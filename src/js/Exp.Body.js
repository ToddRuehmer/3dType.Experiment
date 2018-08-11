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