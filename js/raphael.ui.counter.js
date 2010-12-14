function draw (r, x, y options) {
	
	var x = 243;
	var y = 14;
	var width = 70;
	var height = 30;
	var radius = 3;
	var backgroundColor = "#666";
	var outlineColor = "#333";
	var triangleColor = "#000";
	var textColor = "#000";
	var fontStyle = '400 20px "Helvetica Neue", Helvetica, sans-serif';
	var currentValue = 0;
	var minimumValue = 0;
	var maximumValue = 20;
	
    var r = Raphael("canvas", 620, 250);


    bg = r.rect(x, y, width, height, radius).attr({
        fill: backgroundColor,
        stroke: outlineColor
    });
    
	innerBg = r.rect(x + width/4, y, width/2, height, radius).attr({
        fill: backgroundColor,
        stroke: outlineColor
    });

	text = r.text(x + width/2, y+height/2, currentValue).attr({
        fill: textColor,
        stroke: "none",
        "font": fontStyle
    });

	var xOffset = 10;

	left = r.text(x + xOffset, y+height/2, "-").attr({
        fill: triangleColor,
        stroke: "none",
        "font": fontStyle
    });

	right = r.text(x + width - xOffset , y+height/2, "+").attr({
        fill: triangleColor,
        stroke: "none",
        "font": fontStyle
    });

    var animation = function() {
        if (currentValue == maximumValue+1) {
            currentValue = maximumValue;
        }
        if (currentValue == minimumValue-1) {
            currentValue = minimumValue;
        }

        text.attr({
            text: currentValue
        });
    };

    right.node.onclick = right.node.onclick = function() {
        currentValue++;
        animation();
    };

    left.node.onclick = left.node.onclick = function() {
        currentValue--;
        animation();
    };
	
}