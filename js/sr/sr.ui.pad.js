window.onload = function() {
	var width = 768;
	var height = 1024/2;
    var paper = Raphael("canvas", width, height);
	var modifierTextAttribute = {
        fill: "#1C1C1C",
        stroke: "none",
        "font": '800 10px "Helvetica Neue", Helvetica',
		"text-anchor": "start"
	};
	var avatarTextAttribute = {
        fill: "#1C1C1C",
        stroke: "none",
        "font": '800 12px "Helvetica Neue", Helvetica',
		"text-anchor": "start"
	};

	// header bar
	paper.roundedRect(10, 0, 746, 30, 0, 0, 10, 10);

	// attacker avatar
	paper.text(20, 50, "ATTACKER").attr(avatarTextAttribute);	
	var attacker = new Avatar (paper, {x: 20, y: 60, name: "Aquila", path: "resources/avatars/avatar2.jpg"}).draw();
	
	// target avatar
	paper.text(605, 50, "TARGET").attr(avatarTextAttribute);
	var target = new Avatar (paper, {x: 605, y: 60, name: "NPC", path: "resources/avatars/avatar3.jpg"}).draw();
	
	
	/********** MODIFIER **********/
	var rules = new Rules();
	
	// thermo modifier
	paper.text(175, 52, "Thermovision").attr(modifierTextAttribute);
	thermoModel = new PickerModel ("thermo", "none", new Array("natural", "cyberware"));
	rules.register(thermoModel);
	thermoProperties = { 
		x: 175, y:60,  
		valuePaths: {
			"natural": "M16,8.286C8.454,8.286,2.5,16,2.5,16s5.954,7.715,13.5,7.715c5.771,0,13.5-7.715,13.5-7.715S21.771,8.286,16,8.286zM16,20.807c-2.649,0-4.807-2.156-4.807-4.807c0-2.65,2.158-4.807,4.807-4.807c2.648,0,4.807,2.158,4.807,4.807C20.807,18.648,18.648,20.807,16,20.807zM16,13.194c-1.549,0-2.806,1.256-2.806,2.806S14.45,18.807,16,18.807S18.807,17.55,18.807,16C18.807,14.451,17.55,13.194,16,13.194z", 
			"cyberware": "M 16,8.286 C 8.454,8.286 2.5,16 2.5,16 2.5,16 8.454,23.715 16,23.715 21.771,23.715 29.5,16 29.5,16 29.5,16 21.771,8.286 16,8.286 z m 0,12.521 c -2.649,0 -4.807,-2.156 -4.807,-4.807 0,-2.65 2.158,-4.807 4.807,-4.807 2.648,0 4.807,2.158 4.807,4.807 0,2.648 -2.159,4.807 -4.807,4.807 z m 0,-7.613 c -1.549,0 -2.806,1.256 -2.806,2.806 0,1.55 1.256,2.807 2.806,2.807 1.55,0 2.807,-1.257 2.807,-2.807 0,-1.549 -1.257,-2.806 -2.807,-2.806 z m 9.303912,-11.0687023 0,3 -3,0 0,2 3,0 0,3.0000003 2,0 0,-3.0000003 3,0 0,-2 -3,0 0,-3 z"
		}
	 };
	new Picker (paper, thermoModel, thermoProperties).draw();
	
	// lowlight modifier
	paper.text(175, 104, "Low Light").attr(modifierTextAttribute);	
	var lowlightModel = new PickerModel ("lowlight", "none", new Array("natural", "cyberware"));
	rules.register(lowlightModel);
	var lowlightProperties = { 
		x: 175, y:112,  
		valuePaths: {
			"natural": "M16,8.286C8.454,8.286,2.5,16,2.5,16s5.954,7.715,13.5,7.715c5.771,0,13.5-7.715,13.5-7.715S21.771,8.286,16,8.286zM16,20.807c-2.649,0-4.807-2.156-4.807-4.807c0-2.65,2.158-4.807,4.807-4.807c2.648,0,4.807,2.158,4.807,4.807C20.807,18.648,18.648,20.807,16,20.807zM16,13.194c-1.549,0-2.806,1.256-2.806,2.806S14.45,18.807,16,18.807S18.807,17.55,18.807,16C18.807,14.451,17.55,13.194,16,13.194z", 
			"cyberware": "M 16,8.286 C 8.454,8.286 2.5,16 2.5,16 2.5,16 8.454,23.715 16,23.715 21.771,23.715 29.5,16 29.5,16 29.5,16 21.771,8.286 16,8.286 z m 0,12.521 c -2.649,0 -4.807,-2.156 -4.807,-4.807 0,-2.65 2.158,-4.807 4.807,-4.807 2.648,0 4.807,2.158 4.807,4.807 0,2.648 -2.159,4.807 -4.807,4.807 z m 0,-7.613 c -1.549,0 -2.806,1.256 -2.806,2.806 0,1.55 1.256,2.807 2.806,2.807 1.55,0 2.807,-1.257 2.807,-2.807 0,-1.549 -1.257,-2.806 -2.807,-2.806 z m 9.303912,-11.0687023 0,3 -3,0 0,2 3,0 0,3.0000003 2,0 0,-3.0000003 3,0 0,-2 -3,0 0,-3 z"
		}
	 };
	new Picker (paper, lowlightModel, lowlightProperties).draw();
	
	// blind fire modifier
	paper.text(175, 155, "Blind Fire").attr(modifierTextAttribute);	
	var blindModel = new PickerModel ("blind", "false", new Array("true"));
	rules.register(blindModel);
	var blindProperties = { 
		x: 175, y:163,  
		valuePaths: {
			"true": "m 20.645,20.312 c 0,2.761424 -2.238576,5 -5,5 -2.761423,0 -5,-2.238576 -5,-5 0,-2.761423 2.238577,-5 5,-5 2.761424,0 5,2.238577 5,5 z m 9,-9 c 0,2.761424 -2.238576,5 -5,5 -2.761423,0 -5,-2.238576 -5,-5 0,-2.7614235 2.238577,-4.9999997 5,-4.9999997 2.761424,0 5,2.2385762 5,4.9999997 z m -18,0 c 0,2.761424 -2.2385763,5 -5,5 -2.7614238,0 -5,-2.238576 -5,-5 0,-2.7614235 2.2385762,-4.9999997 5,-4.9999997 2.7614237,0 5,2.2385762 5,4.9999997 z"
		}
	 };
	new Picker (paper, blindModel, blindProperties).draw();
	
	// smartgun modifier
	paper.text(175, 206, "Smartgun").attr(modifierTextAttribute);	
	var smartgunModel = new PickerModel ("smartgun", "none", new Array("link", "goggles"));
	rules.register(smartgunModel);
	var smartgunProperties = { 
		x: 175, y:214,  
		valuePaths: {
			"link": "M 22,17 H 11 c -0.551,0 -1,-0.449 -1,-1 0,-0.551 0.449,-1 1,-1 h 11 c 0.552,0 1,0.449 1,1 0,0.551 -0.448,1 -1,1 z m 0,0 m 4.699,3 H 21.301 C 19.48,20 18,18.311 18,16.233 V 15.767 C 18,13.69 19.48,12 21.301,12 h 5.398 C 28.52,12 30,13.69 30,15.767 v 0.466 C 30,18.311 28.52,20 26.699,20 z M 21.301,13 C 20.032,13 19,14.241 19,15.767 v 0.466 C 19,17.759 20.032,19 21.301,19 h 5.398 C 27.968,19 29,17.759 29,16.233 V 15.767 C 29,14.241 27.968,13 26.699,13 H 21.301 z M 11.7,20 H 6.3 C 4.48,20 3,18.336 3,16.291 V 15.709 C 3,13.664 4.48,12 6.3,12 h 5.4 c 1.82,0 3.3,1.664 3.3,3.709 v 0.582 C 15,18.336 13.52,20 11.7,20 z M 6.3,13 C 5.032,13 4,14.215 4,15.709 v 0.582 C 4,17.785 5.032,19 6.3,19 h 5.4 C 12.969,19 14,17.785 14,16.291 V 15.709 C 14,14.215 12.968,13 11.7,13 H 6.3 z", 
			"goggles": "m 15.731459,14.163989 c 1.193027,0.0324 1.36226,1.196627 1.36226,1.196627 1.311849,5.555855 4.576467,6.820895 8.269568,5.925525 4.072374,-0.987787 3.615087,-6.523238 3.605485,-6.999729 -0.0073,-0.47529 0.169233,-0.488492 0.501694,-0.482492 0.316861,0.0048 0.356469,-0.105623 0.358869,-0.184834 0,-0.07802 0,0.0084 -0.0168,-0.458486 -0.01921,-0.493294 -0.373271,-0.513699 -0.373271,-0.513699 -0.94938,-0.07802 -0.855762,-0.124823 -1.183425,-0.31926 -3.622288,-2.142407 -9.791459,-0.464488 -11.172921,0.908573 -0.283255,-0.130825 -1.36946,-0.181235 -1.36946,-0.181235 0,0 -1.068202,0.05042 -1.351457,0.181235 C 12.975738,11.864352 6.8077691,10.194836 3.1890824,12.340843 2.86022,12.53648 2.9562383,12.582089 2.0056579,12.661304 c 0,0 -0.3540672,0.0204 -0.3720707,0.513698 -0.016803,0.468089 -0.016803,0.380472 -0.016803,0.459686 0.0012,0.07802 0.043208,0.189638 0.358868,0.183636 0.3336634,-0.0048 0.5076964,0.0073 0.5004949,0.482492 -0.0084,0.475289 -0.4548862,6.01194 3.6162863,6.994927 3.6918999,0.890569 6.9577186,-0.379272 8.2611666,-5.937527 0,0.0011 0.182434,-1.227832 1.377861,-1.194227 z"
		}
	 };
	new Picker (paper, smartgunModel, smartgunProperties).draw();
	
	// light conditions modifier
	paper.text(445, 52, "Light Conditions").attr(modifierTextAttribute);	
	var lightModel = new PickerModel ("light", "normal", new Array("partial", "low", "dark", "glare"));
	rules.register(lightModel);
	var lightProperties = { 
		x: 445, y:60,  
		valuePaths: {
			"partial": "M 13.097,23.463 12.628,23.244 C 9.817,21.938 8,19.094 8,16 c 0,-4.411 3.589,-8 8,-8 1.973,0 3.868,0.729 5.339,2.054 l 0.392,0.353 -5.378,5.378 -3.256,7.678 z m -2.055213,6.764041 -1.8476,-0.7656 2.046832,-4.939558 1.8476,0.7656 z m 9.512564,-22.858643 -1.8476,-0.7656 2.020419,-4.8758163 1.8476,0.7656 z m 3.128033,2.511238 -1.3728,-1.4544 3.428021,-3.2356897 1.3728,1.4544 z M 1.5020584,22.175334 0.73645844,20.322734 5.9309858,18.17525 l 0.7656,1.8476 z m 4.701598,-8.80006 -4.5293913,-1.876869 0.7656,-1.8475998 4.5293913,1.8768688 z M 11.216578,7.4323025 8.8480472,1.7142854 l 1.8477998,-0.7654 2.368531,5.7180171 z M 2,15 6,15 6,17 2,17 z M 6.6565782,25.831241 5.283865,24.377968 7.722223,22.074777 9.0949362,23.52805 z M 7.6686493,9.9217378 5.2984501,7.5515386 l 1.4142,-1.4142 2.3701992,2.3701992 z M 15,3 l 2,0 0,3 -2,0 z", 
			"low": "M 15.941,17 H 8 v -0.5 c 0,-4.897 3.215,-8.188 8,-8.188 2.137,0 3.982,0.646 5.339,1.866 L 21.708,10.511 15.941,17 z m 4.613351,-9.631602 -1.8476,-0.7656 2.020419,-4.8758163 1.8476,0.7656 z m 3.128033,2.511238 -1.3728,-1.4544 3.428021,-3.2356897 1.3728,1.4544 z M 6.2036564,13.370274 1.6742651,11.493405 2.4398651,9.6458052 6.9692564,11.522674 z M 11.216578,7.4323025 8.8480472,1.7142854 l 1.8477998,-0.7654 2.368531,5.7180171 z M 2,15 6,15 6,17 2,17 z M 7.6686493,9.9217378 5.2984501,7.5515386 l 1.4142,-1.4142 2.3701992,2.3701992 z M 15,3 l 2,0 0,3 -2,0 z",
			"dark": "M 15.749,17.218 12.364,9.05 12.847,8.867 C 13.821,8.499 14.882,8.312 16,8.312 c 2.137,0 3.982,0.646 5.339,1.866 l 0.369,0.333 -5.959,6.707 z m 4.805351,-9.849602 -1.8476,-0.7656 2.020419,-4.8758163 1.8476,0.7656 z m 3.128033,2.511238 -1.3728,-1.4544 3.428021,-3.2356897 1.3728,1.4544 z M 11.216578,7.4323025 8.8480472,1.7142854 l 1.8477998,-0.7654 2.368531,5.7180171 z M 15,3 l 2,0 0,3 -2,0 z",
			"glare": "m 15.674,23.793 c -4.411,0 -8,-3.589 -8,-8 0,-4.411 3.588,-8 8,-8 4.412,0 8,3.589 8,8 0,4.411 -3.589,8 -8,8 z m 0,-15 c -3.859,0 -7,3.14 -7,7 0,3.859 3.14,7 7,7 3.86,0 7,-3.141 7,-7 0,-3.86 -3.141,-7 -7,-7 z m 7.5,7 c 0,4.143 -3.357,7.5 -7.5,7.5 -4.142,0 -7.5,-3.357 -7.5,-7.5 0,-4.142 3.358,-7.5 7.5,-7.5 4.142,0 7.5,3.358 7.5,7.5 z m -11.933,8.728 1.848,0.766 -2.047,4.939 -1.848,-0.766 2.047,-4.939 z M 29.902,9.782 30.668,11.63 25.475,13.782 24.709,11.934 29.902,9.782 z M 20.727,1.726 22.575,2.492 20.554,7.368 18.706,6.603 20.727,1.726 z m 4.474,16.858 4.826,1.999 -0.765,1.848 -4.827,-1.999 0.766,-1.848 z m -5.012,5.937 1.988,4.799 -1.848,0.766 -1.988,-4.799 1.848,-0.766 z M 25,15 h 3 v 2 H 25 V 15 z M 25.736,5.189 27.109,6.644 23.682,9.88 22.309,8.426 25.736,5.189 z m -2,16.844 2.369,2.371 -1.414,1.414 -2.369,-2.371 1.414,-1.414 z M 14,26 h 2 v 3 H 14 V 26 z M 5.931,18.17 6.697,20.018 1.502,22.17 0.736,20.322 5.931,18.17 z M 2.44,9.646 6.969,11.523 6.204,13.37 1.675,11.493 2.44,9.646 z M 10.696,0.949 13.064,6.667 11.216,7.433 8.848,1.714 10.696,0.949 z M 2,15 h 4 v 2 H 2 v -2 z m 5.722,7.075 1.373,1.453 -2.438,2.304 -1.373,-1.453 2.438,-2.304 z M 6.713,6.137 9.083,8.507 7.669,9.921 5.298,7.551 6.713,6.137 z M 15,3 h 2 V 6 H 15 V 3 z"
		}
	 };
	new Picker (paper, lightModel, lightProperties).draw();
	
	// smoke conditions modifier
	paper.text(482, 104, "Smoke/Fog").attr(modifierTextAttribute);
	var smokeModel = new PickerModel ("smoke", "normal", new Array("partial", "half", "full"));
	rules.register(smokeModel);
	var smokeProperties = { 
		x: 482, y:112,  
		valuePaths: {
			"partial": "M 11.59375 9.0625 C 10.775734 9.1067 9.95075 9.4059998 9.40625 9.90625 C 8.92125 10.35325 8.6675 10.932499 8.6875 11.5625 C 8.179 11.6445 7.517688 11.79 6.875 12.0625 C 6.232312 12.335 5.60825 12.7345 5.09375 13.3125 C 4.79075 13.653 4.44169 14.14925 4.40625 14.78125 C 4.388531 15.09725 4.44807 15.443218 4.625 15.8125 C 4.80193 16.181781 5.10575 16.5905 5.5625 17 C 5.9856466 17.37897 6.4360044 17.590877 6.90625 17.71875 L 17.5625 10.6875 C 17.504924 10.653344 17.465234 10.591748 17.40625 10.5625 C 17.006187 10.36412 16.5835 10.28125 16.1875 10.28125 L 16.15625 10.28125 L 15.96875 10.28125 C 15.31675 10.28125 14.60575 10.29075 13.96875 10.71875 C 13.93975 10.73775 13.916 10.75025 13.875 10.78125 C 13.833 10.50925 13.745 10.26325 13.625 10.03125 C 13.367 9.5322501 12.95225 9.19475 12.40625 9.09375 C 12.147 9.04625 11.866423 9.04777 11.59375 9.0625 z", 
			"half": "M 11.59375 9.0625 C 10.775734 9.1067 9.95075 9.4059998 9.40625 9.90625 C 8.92125 10.35325 8.6675 10.932499 8.6875 11.5625 C 8.179 11.6445 7.517688 11.79 6.875 12.0625 C 6.232312 12.335 5.60825 12.7345 5.09375 13.3125 C 4.79075 13.653 4.44169 14.14925 4.40625 14.78125 C 4.388531 15.09725 4.44807 15.443218 4.625 15.8125 C 4.80193 16.181781 5.10575 16.5905 5.5625 17 C 6.051 17.4375 6.575 17.665313 7.125 17.78125 C 7.675 17.89719 8.251 17.90125 8.8125 17.84375 C 8.7785 17.93675 8.73575 18.024 8.71875 18.125 C 8.64125 18.60175 8.80082 18.996508 9.09375 19.34375 C 9.38668 19.690992 9.8143447 19.992594 10.25 20.21875 C 11.121313 20.671062 12.049 20.88775 12.125 20.90625 C 12.3748 20.967748 12.617739 21.018808 12.875 21.0625 L 25.21875 12.90625 C 25.021497 12.891715 24.82545 12.8996 24.625 12.90625 C 24.636 12.47425 24.54175 11.98875 24.34375 11.46875 C 24.17525 11.026249 23.861125 10.570312 23.3125 10.3125 C 22.763875 10.054687 21.98075 9.9950003 20.84375 10.3125 C 20.82175 10.3185 19.42825 10.703749 18.40625 11.46875 C 18.18375 11.074749 17.806313 10.760875 17.40625 10.5625 C 17.006187 10.36412 16.5835 10.28125 16.1875 10.28125 L 16.15625 10.28125 L 15.96875 10.28125 C 15.31675 10.28125 14.60575 10.29075 13.96875 10.71875 C 13.93975 10.73775 13.916 10.75025 13.875 10.78125 C 13.833 10.50925 13.745 10.26325 13.625 10.03125 C 13.367 9.5322501 12.95225 9.19475 12.40625 9.09375 C 12.147 9.04625 11.866423 9.04777 11.59375 9.0625 z",
			"full": "m 11.58791,9.0574291 c 0.272673,-0.01473 0.553251,-0.01625 0.812501,0.03125 0.546,0.101 0.96075,0.4385 1.21875,0.9374999 0.12,0.232 0.208,0.478 0.25,0.75 0.041,-0.031 0.06475,-0.0435 0.09375,-0.0625 0.637,-0.428 1.348,-0.4375 2,-0.4375 l 0.1875,0 0.03125,0 c 0.396,0 0.818687,0.08287 1.21875,0.28125 0.400063,0.198375 0.7775,0.51225 1,0.906251 1.022,-0.765001 2.4155,-1.150251 2.4375,-1.156251 1.137,-0.3174997 1.920125,-0.257813 2.46875,0 0.548625,0.257812 0.86275,0.71375 1.03125,1.156251 0.198,0.52 0.29225,1.0055 0.28125,1.4375 0.844,-0.028 1.696,0.13375 2.25,0.46875 0.451,0.2715 0.771,0.699062 0.9375,1.21875 0.1665,0.519687 0.1795,1.1315 0,1.6875 -0.209,0.648 -0.65575,0.985125 -1.15625,1.1875 -0.5005,0.202375 -1.05475,0.27 -1.53125,0.3125 -1.21,0.109 -2.52825,0.08975 -3.78125,-0.03125 0.2625,0.3655 0.517688,0.788937 0.6875,1.21875 0.169812,0.429813 0.25425,0.866 0.15625,1.25 -0.0445,0.173 -0.135625,0.35 -0.3125,0.53125 -0.176875,0.18125 -0.4395,0.36675 -0.8125,0.46875 -0.54,0.14695 -1.082,0.14525 -1.625,0.15625 l -1.125,-0.0625 c -0.752,0.035 -1.52525,-0.03125 -2.28125,-0.03125 -1.303,0 -2.65925,-0.068 -3.90625,-0.375 -0.076,-0.0185 -1.003688,-0.235188 -1.875001,-0.6875 -0.4356553,-0.226156 -0.8633193,-0.527758 -1.1562493,-0.875 -0.29293,-0.347242 -0.4525,-0.742 -0.375,-1.21875 0.017,-0.101 0.05975,-0.18825 0.09375,-0.28125 -0.5615,0.0575 -1.1375,0.05344 -1.6875,-0.0625 -0.55,-0.115937 -1.074,-0.34375 -1.5625,-0.78125 -0.45675,-0.4095 -0.76057,-0.818219 -0.9375,-1.1875 -0.17693,-0.369282 -0.236469,-0.71525 -0.21875,-1.03125 0.03544,-0.632 0.3845,-1.12825 0.6875,-1.46875 0.5145,-0.578 1.138562,-0.9775 1.78125,-1.25 0.642688,-0.2725 1.304,-0.418 1.8125,-0.5 -0.02,-0.630001 0.23375,-1.209251 0.71875,-1.6562507 0.5445,-0.5002502 1.3694833,-0.7995502 2.1874993,-0.8437502 z"
		}
	 };
	new Picker (paper, smokeModel, smokeProperties).draw();
	
	// aiming modifier
	paper.text(519, 155, "Aiming").attr(modifierTextAttribute);
	var aimingModel = new CounterModel ("aimed", 0, 0, 5);
	rules.register(aimingModel);
	new Counter (paper, aimingModel, {x: 519, y:163}).draw();
	
	// called shot modifier
	paper.text(556, 206, "Called").attr(modifierTextAttribute);
	var calledModel = new PickerModel ("called", "false", new Array("true"));
	rules.register(calledModel);
	var calledProperties = { 
		x: 556, y:214,  
		valuePaths: {
			"true": "M 26.482,15.944 C 26.482,10.151 21.791,5.459 16.001,5.457 10.21,5.459 5.517,10.151 5.517,15.943 c 0,5.789 4.693,10.482 10.484,10.482 5.794,0 10.481,-4.949 10.481,-10.481 z M 16.001,22.427 C 12.419,22.419 9.523,19.523 9.517,15.943 9.523,12.361 12.42,9.465 16.001,9.457 c 3.579,0.008 6.478,2.904 6.483,6.486 -0.005,3.579 -2.904,6.476 -6.483,6.484 z M 18,11.109 H 15 V 15 h -3.833 v 2 H 15 v 3.834 h 2 V 17 h 3.771 V 15 H 17 L 16.973,11.109 H 18 z"
		}
	 };
	new Picker (paper, calledModel, calledProperties).draw();
	
	/********************************/
	
	// attacker movement modifier
	paper.text(20, 257, "Movement").attr(modifierTextAttribute);	
	var attackermovementModel = new PickerModel ("attackermovement", "stationary", new Array("walking", "running"));
	rules.register(attackermovementModel);
	var attackermovementProperties = { 
		x: 20, y:265,  
		valuePaths: {
			"walking": "m 18.894,4.9770002 c 0,1.0195177 -0.826482,1.846 -1.846,1.846 -1.019517,0 -1.846,-0.8264823 -1.846,-1.846 0,-1.0195176 0.826483,-1.8459999 1.846,-1.8459999 1.019518,0 1.846,0.8264823 1.846,1.8459999 z m -1.23455,2.4774502 2.383,1.132 1.574,3.2479996 -1.334,3.182 -1.63,-0.246 1.412501,-2.71 -2.302916,-2.3910876 -1.745585,5.2820876 1.775,5.056 0.186,5.578 -1.706,-0.553 -0.377,-4.213 -1.722,-4.097 -1.805,4.726 -3.4739996,4.137 -1.084,-1.469 3.4329996,-4.607 0.815,-5.657 2.245169,-4.6960037 -2.832169,0.9180037 -0.698244,2.854418 -1.0712506,-0.566 0.8514946,-3.2704176 4.305,-1.838 z", 
			"running": "m 19.447,7.459 1.314,0.78 0.682,4.28 4.188,1.412 -0.15,1.702 -5.352,-1.021 -1.26,-2.918 -1.801,3.162 4.375,4.426 -2.867,6.957 -1.8,-0.585 1.699,-5.205 -3.251,-2.724 -2.585,4.134 -6.271,-1.798 0.19,-1.947 5.013,0.925 1.313,-5.107 2.047,-3.844 -2.142,0.099 -0.784,3.988 -1.409,-0.097 0.292,-6.177 7.201,-1.071 1.358,0.629 z m 3.065,-2.333 c 0,-0.518 -0.174,-0.982 -0.529,-1.387 -0.357,-0.404 -0.793,-0.608 -1.316,-0.608 -0.617,0 -1.1,0.204 -1.457,0.608 -0.355,0.405 -0.537,0.869 -0.537,1.387 0,0.519 0.182,0.964 0.537,1.338 0.357,0.372 0.84,0.558 1.457,0.558 0.523,0 0.959,-0.186 1.316,-0.558 0.355,-0.374 0.529,-0.819 0.529,-1.338 z"
		}
	 };
	new Picker (paper, attackermovementModel, attackermovementProperties).draw();
	
	// ground modifier
	paper.text(124, 257, "Ground").attr(modifierTextAttribute);	
	var groundModel = new PickerModel ("ground", "normal", new Array("difficult"));
	rules.register(groundModel);
	var groundProperties = { 
		x: 124, y:265,  
		valuePaths: {
			"difficult": "M 27.795,12.738 23.474,13.751 18.275,8.282 10.999,16.704 8.278,14.293 4.372,17.754 V 24.25 H 27.795 V 12.738 z"
		}
	 };
	new Picker (paper, groundModel, groundProperties).draw();
	
	// melee modifier
	paper.text(20, 308, "Melee").attr(modifierTextAttribute);
	var meleeModel = new CounterModel ("melee", 0, 0, 5);
	rules.register(meleeModel);
	new Counter (paper, meleeModel, {x: 20, y:316}).draw();
	
	// wounded modifier
	paper.text(20, 359, "Wounded").attr(modifierTextAttribute);	
	var woundedModel = new PickerModel ("wounded", "uninjured", new Array("light", "moderate", "serious"));
	rules.register(woundedModel);
	var woundedProperties = { 
		x: 20, y:367,  
		valuePaths: {
			"light": "m 19.153465,20.885496 0,-1.888 -4.08,0 0,-9.5359999 -2.304,0 0,11.4239999 6.384,0", 
			"moderate": "m 10.618991,20.885496 2.112,0 0,-9.12 0.032,0 2.032,9.12 1.792,0 2.032,-9.12 0.032,0 0,9.12 2.112,0 0,-11.4239999 -3.408,0 -1.648,8.0639999 -0.032,0 -1.632,-8.0639999 -3.424,0 0,11.4239999",
			"serious": "m 12.122991,17.317496 0,0.464 c 0,2.111998 1.024003,3.328 3.632,3.328 2.495998,0 3.968,-1.088002 3.968,-3.504 0,-1.391998 -0.448001,-2.272001 -2.176,-3.024 l -1.776,-0.768 c -0.975999,-0.415999 -1.184,-0.848001 -1.184,-1.552 0,-0.671999 0.272001,-1.328 1.312,-1.328 0.879999,0 1.248,0.624001 1.248,1.696 l 2.208,0 0,-0.32 c 0,-2.191998 -1.488002,-3.0719999 -3.536,-3.0719999 -2.175997,0 -3.536,1.1360019 -3.536,3.3599999 0,1.903998 0.944002,2.752001 2.992,3.456 1.519999,0.528 2.048,0.912001 2.048,1.952 0,0.959999 -0.672,1.408 -1.376,1.408 -1.215998,0 -1.52,-0.688001 -1.52,-1.76 l 0,-0.336 -2.304,0"
		}
	 };
	new Picker (paper, woundedModel, woundedProperties).draw();
	
	/****************************/
	
	// recoil compensation modifier
	paper.text(175, 257, "Recoil Comp").attr(modifierTextAttribute);
	var recoilcompensationModel = new CounterModel ("recoilcompensation", 0, 0, 8);
	rules.register(recoilcompensationModel);
	new Counter (paper, recoilcompensationModel, {x: 175, y:265}).draw();
	
	// gyro modifier
	paper.text(175, 308, "Gyro Stab").attr(modifierTextAttribute);
	var gyroModel = new CounterModel ("gyro", 0, 0, 8);
	rules.register(gyroModel);
	new Counter (paper, gyroModel, {x: 175, y:316}).draw();
	
	// second firearm modifier
	paper.text(175, 359, "Second Firearm").attr(modifierTextAttribute);	
	var secondfirearmModel = new PickerModel ("secondfirearm", "false", new Array("true"));
	rules.register(secondfirearmModel);
	var secondfirearmProperties = { 
		x: 175, y:367,  
		valuePaths: {
			"true": "m 11.066,11.611 17.696,-0.079 0.195,0.195 v 0.431 h 0.17 v 1.477 h -0.176 v 0.377 l 0.102,0.108 v 0.431 l -0.148,0.115 -0.061,0.652 -0.557,0.557 h -1.592 l -0.133,-0.13 h -0.307 v 0.086 l -4.086,0.136 -0.545,0.531 0.061,1.759 -0.574,0.635 -5.627,0.322 -1.032,2.561 0.128,0.412 -0.963,1.436 0.053,0.035 -0.936,1.551 0.243,0.26 v 0.365 L 8.278,25.713 8.104,25.34 8.448,24.936 V 24.842 H 8.165 V 24.735 L 7.282,24.512 7.019,24.006 10.51,16.653 9,14.422 9.558,11.645 h 0.77 l 0.256,-0.364 H 10.9 l 0.175,0.189 -0.009,0.141 0,0 0,0 z m 6.637,5.963 -0.035,0.445 2.016,-0.039 1.146,-1.724 -0.742,-0.481 -2.164,0.25 -0.221,1.549 0,0 0,0 z m -1.026,-0.64 0.6,1.046 -0.6,-1.046 0,0 0,0 z M 7.154,5.638 22.546,5.569 l 0.17,0.17 v 0.374 h 0.146 V 7.397 H 22.71 v 0.328 l 0.088,0.094 v 0.375 l -0.129,0.1 -0.053,0.569 -0.484,0.483 H 20.745 L 20.632,9.233 h -0.268 v 0.075 l -3.552,0.117 -0.476,0.463 0.053,1.53 -0.498,0.551 -4.896,0.281 -0.896,2.229 0.111,0.357 -0.838,1.249 0.046,0.029 -0.814,1.349 0.211,0.227 v 0.316 L 4.728,17.902 4.577,17.58 4.876,17.226 V 17.144 H 4.629 V 17.05 L 3.861,16.857 3.632,16.418 6.669,10.023 5.357,8.083 5.842,5.667 H 6.511 L 6.734,5.351 h 0.275 l 0.152,0.164 -0.007,0.123 0,0 0,0 z m 5.771,5.188 -0.029,0.387 1.753,-0.035 L 15.645,9.677 15,9.261 l -1.882,0.217 -0.193,1.348 0,0 0,0 z m -0.89,-0.557 0.521,0.909 -0.521,-0.909 0,0 0,0 z	"
		}
	 };
	new Picker (paper, secondfirearmModel, secondfirearmProperties).draw();
	
	/****************************/
	
	// image magnification modifier
	paper.text(519, 257, "Magnification").attr(modifierTextAttribute);
	var magnificationModel = new CounterModel ("magnification", 0, 0, 3);
	rules.register(magnificationModel);
	new Counter (paper, magnificationModel, {x: 519, y:265}).draw();

	// laser sight modifier
	paper.text(556, 308, "Sight").attr(modifierTextAttribute);	
	var laserModel = new PickerModel ("laser", "false", new Array("true"));
	rules.register(laserModel);
	var laserProperties = { 
		x: 556, y:316,  
		valuePaths: {
			"true": "m 28.504,16.021 c 0,-0.693 -0.096,-1.321 -0.279,-1.821 -0.186,-0.465 -0.424,-0.96 -1.072,-1.01 l -21.746,-0.038 -2.426,5.665 24.162,0.03 c 0.65,-0.047 0.889,-0.541 1.078,-1.007 0.181,-0.495 0.283,-1.125 0.283,-1.819 z m -9.734,1.812 c 0.201,-0.425 0.336,-1.081 0.336,-1.828 0,-0.745 -0.129,-1.403 -0.328,-1.829 l 8.322,0.013 c 0.045,0.047 0.156,0.21 0.232,0.494 0.105,0.343 0.172,0.816 0.172,1.337 0,0.595 -0.094,1.129 -0.225,1.475 -0.061,0.173 -0.133,0.295 -0.18,0.343 -0.004,0.006 -0.006,0.01 -0.01,0.012 L 18.77,17.833 z"
		}
	 };
	new Picker (paper, laserModel, laserProperties).draw();

	// bullets modifier
	paper.text(519, 359, "Bullets").attr(modifierTextAttribute);
	var bulletsModel = new CounterModel ("bullets", 1, 1, 15);
	rules.register(bulletsModel);
	new Counter (paper, bulletsModel, {x: 519, y:367}).draw();

	/****************************/

	// target movement modifier
	paper.text(605, 257, "Movement").attr(modifierTextAttribute);	
	var targetmovementModel = new PickerModel ("targetmovement", "stationary", new Array("moving"));
	rules.register(targetmovementModel);
	var targetmovementProperties = { 
		x: 605, y:265,  
		valuePaths: {
			"moving": "m 18.894,4.9770002 c 0,1.0195177 -0.826482,1.846 -1.846,1.846 -1.019517,0 -1.846,-0.8264823 -1.846,-1.846 0,-1.0195176 0.826483,-1.8459999 1.846,-1.8459999 1.019518,0 1.846,0.8264823 1.846,1.8459999 z m -1.23455,2.4774502 2.383,1.132 1.574,3.2479996 -1.334,3.182 -1.63,-0.246 1.412501,-2.71 -2.302916,-2.3910876 -1.745585,5.2820876 1.775,5.056 0.186,5.578 -1.706,-0.553 -0.377,-4.213 -1.722,-4.097 -1.805,4.726 -3.4739996,4.137 -1.084,-1.469 3.4329996,-4.607 0.815,-5.657 2.245169,-4.6960037 -2.832169,0.9180037 -0.698244,2.854418 -1.0712506,-0.566 0.8514946,-3.2704176 4.305,-1.838 z"
		}
	 };
	new Picker (paper, targetmovementModel, targetmovementProperties).draw();
	
	// cover modifier
	paper.text(605, 308, "Cover").attr(modifierTextAttribute);	
	var coverModel = new PickerModel ("cover", "false", new Array("true"));
	rules.register(coverModel);
	var coverProperties = { 
		x: 605, y:316,  
		valuePaths: {
			"true": "m 13.155,10.179 2.141,-0.099 -1.11,2.085 4.777,0 0.315,-1.397 0.816,1.368 1.66,0.029 -0.626,-3.933 -1.315,-0.779 -1.357,-0.631 -7.201,1.071 -0.203,4.272 1.713,0 z M 21.272,7.71 c 0.523,0 0.959,-0.186 1.316,-0.558 0.355,-0.375 0.529,-0.819 0.529,-1.338 0,-0.518 -0.174,-0.982 -0.529,-1.387 -0.357,-0.404 -0.793,-0.608 -1.316,-0.608 -0.617,0 -1.1,0.204 -1.457,0.608 -0.355,0.405 -0.537,0.869 -0.537,1.387 0,0.519 0.182,0.964 0.537,1.338 0.358,0.372 0.84,0.558 1.457,0.558 z m 5.362001,13.785001 7.062,0 0,3.383 -7.062,0 z M -1.383,21.493 l 8.3830004,0 0,3.383 -8.3830004,0 z m 3.4250001,4.153 8.3819999,0 0,3.383 -8.3819999,0 z m 19.7399999,0 8.383,0 0,3.383 -8.383,0 z m -10.129,0 8.380999,0 0,3.383 -8.380999,0 z m 5.431999,-4.153 8.381,0 0,3.383 -8.381,0 z m -9.3829989,0 8.3830009,0 0,3.383 -8.3830009,0 z m 18.4810009,-8.421 7.061999,0 0,3.382999 -7.061999,0 z M -1.834,13.071 l 8.3830004,0 0,3.383 -8.3830004,0 z m 3.425,4.153001 8.3819999,0 0,3.383 -8.3819999,0 z m 19.739999,0 8.383001,0 0,3.383 -8.383001,0 z m -10.129999,0 8.382,0 0,3.383 -8.382,0 z m 5.431999,-4.152001 8.382,0 0,3.382 -8.382,0 z m -9.382999,0 8.382,0 0,3.382 -8.382,0 z"
		}
	 };
	new Picker (paper, coverModel, coverProperties).draw();
	
	// bullets modifier
	paper.text(605, 359, "Targets").attr(modifierTextAttribute);
	var targetsModel = new CounterModel ("targets", 0, 0, 3);
	rules.register(targetsModel);
	new Counter (paper, targetsModel, {x: 605, y:367}).draw();
	
	/****************************/
	
	// range slider
	var sliderProperties = {
		x: 280, 
		y: 180,
		width: 200,
		minimumValue: 0,
		maximumValue: 120,
		stops: new Array(0, 50, 70, 100)
	};
	var sliderModel = new SliderModel("slider", 4, 0, 200, 5, new Array (10, 50, 80));
	rules.register(sliderModel);
	new Slider(paper, sliderProperties, sliderModel).draw();
	
	// weapon chooser
	var weaponModel = new PickerModel("weapon", "heavy.pistol", new Array("hold-out.pistol","light.pistol","heavy.pistol","smg","taser","shotgun","sporting.rifle","sniper.rifle","assault.rifle","light.machine.gun","medium.machine.gun","heavy.machine.gun","assault.cannon","grenade.launcher","missile.launcher","bow","light.crossbow","medium.crossbow","heavy.crossbow","thrown.knife","shuriken"));
	rules.register(weaponModel);
	
	var valuePaths = {
		"hold-out.pistol": "resources/weapons/holdout.png",
		"light.pistol": "resources/weapons/holdout.png",
		"heavy.pistol": "resources/weapons/holdout.png",
		"smg": "resources/weapons/holdout.png",
		"taser": "resources/weapons/holdout.png",
		"shotgun": "resources/weapons/holdout.png",
		"sporting.rifle": "resources/weapons/holdout.png",
		"sniper.rifle": "resources/weapons/holdout.png",
		"assault.rifle": "resources/weapons/holdout.png",
		"light.machine.gun": "resources/weapons/holdout.png",
		"medium.machine.gun": "resources/weapons/holdout.png",
		"heavy.machine.gun": "resources/weapons/holdout.png",
		"assault.cannon": "resources/weapons/holdout.png",
		"grenade.launcher": "resources/weapons/holdout.png",
		"missile.launcher": "resources/weapons/holdout.png",
		"bow": "resources/weapons/holdout.png",
		"light.crossbow": "resources/weapons/holdout.png",
		"medium.crossbow": "resources/weapons/holdout.png",
		"heavy.crossbow": "resources/weapons/holdout.png",
		"thrown.knife": "resources/weapons/holdout.png",
		"shuriken": "resources/weapons/holdout.png"
	};
	var valueTitles = {
		"hold-out.pistol": "Hold Out Pistol",
		"light.pistol": "Light Pistol",
		"heavy.pistol": "Heavy Pistol",
		"smg": "SMG",
		"taser": "Taser",
		"shotgun": "Shotgun",
		"sporting.rifle": "Sporting Rifle",
		"sniper.rifle": "Sniper Rifle",
		"assault.rifle": "Assault Rifle",
		"light.machine.gun": "Light Machine Gun",
		"medium.machine.gun": "Medium Machine Gun",
		"heavy.machine.gun": "Heavy Machine Gun",
		"assault.cannon": "Assault Cannon",
		"grenade.launcher": "Grenade Launcher",
		"missile.launcher": "Missile Launcher",
		"bow": "Bow",
		"light.crossbow": "Light Crossbow",
		"medium.crossbow": "Medium Crossbow",
		"heavy.crossbow": "Heavy Crossbow",
		"thrown.knife": "Thrown Knife",
		"shuriken": "Shuriken"
	};
	
	var groups = {};
	groups["Firearms"] = new Array("hold-out.pistol","light.pistol","heavy.pistol","smg","taser","shotgun","sporting.rifle","sniper.rifle","assault.rifle");
	groups["Heavy Weapons"] = new Array("light.machine.gun","medium.machine.gun","heavy.machine.gun","assault.cannon","grenade.launcher","missile.launcher");
	groups["Impact Projectiles"] = new Array("bow","light.crossbow","medium.crossbow","heavy.crossbow","thrown.knife","shuriken");
	
	var weaponChooser = new GroupChooser(paper, weaponModel, {"valueTitles": valueTitles, "groups": groups});
	
	var weaponProperties = { 
		x: 265, y: 265, 
		"valuePaths": valuePaths, 
		"valueTitles": valueTitles,
		"chooser": weaponChooser
	 };
	new Chooser(paper, weaponModel, weaponProperties).draw();
};