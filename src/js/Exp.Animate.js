function animate() {
    var textPos = 0;
    var scrollSpeed = .05;
    window.addEventListener('wheel', function(e) {
    	textPos += e.deltaY * scrollSpeed;
    	textPos = textPos < 0 ? 0 : textPos;
    	textPos = textPos > textHolder.size.y ? textHolder.size.y : textPos;
    	textHolder.position.y = textPos;
    });
}