window.onload = function() {
	var width = 768;
	var height = 1024/2;
    var r = Raphael("canvas", width, height);
	var rect = r.rect(0, 0, width, height);

	// draw header bar
	

	// draw attacker
	drawAvatar(r, {x: 20, y: 60, name: "Aquila", path: "resources/avatars/avatar2.jpg"});
	
	// draw target
	drawAvatar(r, {x: 600, y: 60, name: "NPC", path: "resources/avatars/avatar3.jpg"});
	
	// draw options
	
	

};

function drawAvatar(paper, options) {
	var avatar = new Avatar (paper, options);
	avatar.draw();
}