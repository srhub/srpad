window.onload = function() {
	var width = 768;
	var height = 1024/2;
    var paper = Raphael("canvas", width, height);

	new RangedCombat (paper).draw();
	new Roller(paper).draw();

};