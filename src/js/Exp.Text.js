var textHolder = new THREE.Group(),
textHeight = 0,
text,
textMesh,

textMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: false
}),
font,
planets = [
    { name: 'Mercury' },
    { name: 'Venus' },
    { name: 'Earth' },
    { name: 'Mars' },
    { name: 'Jupiter' },
    { name: 'Saturn' },
    { name: 'Uranus' },
    { name: 'Neptune' },
];

function loadFont() {

var loader = new THREE.FontLoader();
loader.load('/fonts/optima.json', function(response) {

    font = response;
    for(var i=0;i<planets.length;i++) {
        var textGeometry = new THREE.TextGeometry(planets[i].name, {
            font: font,
            weight: 'regular',
            size: 2,
            height: 0
        });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.boundingBox = new THREE.Box3().setFromObject(textMesh);
        textMesh.size = textMesh.boundingBox.getSize();
        textMesh.position.y = -textHeight;
        textHeight += 3;
        textHolder.add(textMesh);
    }
    textHolder.boundingBox = new THREE.Box3().setFromObject(textHolder);
    textHolder.size = textHolder.boundingBox.getSize();
    scene.add(textHolder);

});


}