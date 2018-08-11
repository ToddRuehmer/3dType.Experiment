function light() {
    var light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.3);
    light.position.set(0, 500, 0);
    scene.add(light);
    dirLight = new THREE.PointLight(0xffffff, .75);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(0, 0, 0);
    dirLight.position.multiplyScalar(50);
    scene.add(dirLight);
}