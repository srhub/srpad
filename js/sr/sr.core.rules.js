function Rules() {

    var models = new Array();

    // hook the model to the ruleset
    this.register = function(model) {
        model.register(this);
        models[model.id] = model;
    };

    this.change = function(id, value) {
        console.log(id + ": " + value);
        this.calculate();
    };

    this.calculate = function() {
		// base target
        var baseTarget = getBaseTarget(models["range"].value, models["magnification"].value);

        // visibility
		var visibilityModifier = getVisibilityModifier(models["blind"].value, models["light"].value, models["smoke"].value, models["thermo"].value, models["lowlight"].value);
		var aimedModifier = getAimedModifier(models["aimed"].value);
		var calledModifier = getCalledModifier(models["called"].value);
		var lasersightModifier = getLasersightModifier(models["laser"].value);
		
		// enhancements modifier
		var smartgunModifier = getSmartgunModifier(models["smartgun"].value);
		
		// attacker modifier
		var meleeModifier = getMeleeModifier(models["melee"].value);
		var woundedModifier = getWoundedModifier(models["wounded"].value);
		
		// target modifier
		var targetMovementModifier = getTargetMovementModifier(models["targetmovement"].value);
		var coverModifier = getCoverModifier(models["cover"].value);
		var additionalTargetsModifier = getAdditionalTargetsModifier(models["targets"].value);
		
		// recoil, movement
		var attackerMovementModifier = getAttackerMovementModifier (models["attackermovement"].value, models["ground"].value);
		var gyroAndMovementModifier = getGyroAndMovementGyroModifier (models["gyro"].value, attackerMovementModifier);
		
		var recoilModifier = getRecoilModifier(models["recoil"].value, models["bullets"].value, models["gyro"].value, gyroAndMovementModifier, attackerMovementModifier);
		
		// TODO push base
		console.log(baseTarget);
		
		// TODO push modifier
		var modifiers = getModifiers(new Array (
			visibilityModifier,
			aimedModifier,
			calledModifier,
			lasersightModifier,
			smartgunModifier,
			meleeModifier,
			woundedModifier,
			targetMovementModifier,
			coverModifier,
			additionalTargetsModifier,
			gyroAndMovementModifier,
			recoilModifier
		));
		console.log(modifiers);
		
		
    };

	getBaseTarget = function(range, magnification) {
		if (range == 4) {
			if (magnification == 0 ) {
				return new Modifier("Short Range", 4);
			}
		} else if (range == 5) {
			if (magnification == 0 ) {
				return new Modifier("Medium Range", 5);
			} else 	if (magnification == 1 ) {
				return new Modifier("Medium Range, Magnification 1", 4);
			} else 	if (magnification == 2 ) {
				return new Modifier("Medium Range, Magnification 2", 4);
			} else 	if (magnification == 3 ) {
				return new Modifier("Medium Range, Magnification 3", 4);
			}
		} else if (range == 6) {
			if (magnification == 0 ) {
				return new Modifier("Long Range", 6);
			} else 	if (magnification == 1 ) {
				return new Modifier("Long Range, Magnification 1", 5);
			} else 	if (magnification == 2 ) {
				return new Modifier("Long Range, Magnification 2", 4);
			} else 	if (magnification == 3 ) {
				return new Modifier("Long Range, Magnification 3", 4);
			}
		} else if (range == 9) {
			if (magnification == 0 ) {
				return new Modifier("Extreme Range", 9);
			} else 	if (magnification == 1 ) {
				return new Modifier("Extreme Range, Magnification 1", 6);
			} else 	if (magnification == 2 ) {
				return new Modifier("Extreme Range, Magnification 2", 5);
			} else 	if (magnification == 3 ) {
				return new Modifier("Extreme Range, Magnification 3", 4);
			}
		}
		
	};


	getVisibilityModifier = function(blind, light, smoke, thermo, lowlight) {
		var blindModifier = getBlindModifier(blind);
		if (blindModifier.modifier == 8) {
			return blindModifier;
		}
		
		var lightModifier = getLightModifier(light, thermo, lowlight);
		var smokeModifier = getSmokeModifier(smoke, thermo, lowlight);
		
		if (isNaN(lightModifier.modifier)) {
			
			if (isNaN(smokeModifier.modifier)) {
				return new Modifier ("Normal visibility", "NaN");
			} else {
				return smokeModifier;
			}
			
		} else {
			
			if (isNaN(smokeModifier.modifier)) {
				return lightModifier;
			} else {
				
				if (lightModifier.modifier + smokeModifier.modifier >= 8) {
					return new Modifier("Effectively Blind", 8);
				} else { 
					return new Modifier (lightModifier.reason + "\n" +  smokeModifier.reason, lightModifier.modifier + smokeModifier.modifier );
				}
			}
		}
	};

	getLightModifier = function(light, thermo, lowlight) {
		// TODO sort after thermo and lowlight, compare resutimg modifiers, return best
		
		if (light == "normal") {
			
            return new Modifier("Normal Light", "NaN");

        } else if (light == "dark") {
	
			if (thermo == "cyberware") {
				return new Modifier("Dark, Thermo View (Cyberware)", 4);
			} else if (thermo == "natural"){
				return new Modifier("Dark, Thermo View (natural)", 2);
			} else {
				return new Modifier("Dark", 8);
			}
			
        } else if (light == "minimal") {
	
			if (thermo == "cyberware") {
				return new Modifier("Minimal Light, Thermo View (Cyberware)", 4);
			} else if (thermo == "natural"){
				return new Modifier("Minimal Light, Thermo View (Natural)", 2);
			} else	if (lowlight == "cyberware"){
				return new Modifier("Minimal Light, Low Light View (Cyberware)", 4);
			} else	if (lowlight == "natural"){
				return new Modifier("Minimal Light, Low Light View (Natural)", 2);
			} else {
				return new Modifier("Minimal Light", 6);
			}
	
        } else if (light == "partial") {
	
			if (thermo == "cyberware") {
				return new Modifier("Partial Light, Thermo View (Cyberware)", 2);
			} else if (thermo == "natural"){
				return new Modifier("Partial Light, Thermo View (Natural)", 1);
			} else	if (lowlight == "cyberware"){
				return new Modifier("Partial Light, Low Light View (Cyberware)", 1);
			} else	if (lowlight == "natural"){
				return new Modifier("Partial Light, Low Light View (Natural)", 0);
			} else {
				return new Modifier("Minimal Light", 2);
			}
	
        } else if (light == "glare") {
	
            if (thermo == "cyberware") {
				return new Modifier("Glare, Thermo View (Cyberware)", 4);
			} else if (thermo == "natural"){
				return new Modifier("Glare, Thermo View (Natural)", 2);
			} else	if (lowlight == "cyberware"){
				return new Modifier("Glare, Low Light View (Cyberware)", 4);
			} else	if (lowlight == "natural"){
				return new Modifier("Glare, Low Light View (Natural)", 2);
			} else {
				return new Modifier("Glare", 2);
			}
        }
	};
	
	getSmokeModifier = function(smoke, thermo, lowlight) {
		if (smoke == "none") {
			
            return new Modifier("No Smoke/Fog", "Nan");

        } else if (smoke == "mist") {
	
			if (thermo == "cyberware") {
				return new Modifier("Mist, Thermo View (Cyberware)", 0);
			} else if (thermo == "natural"){
				return new Modifier("Mist, Thermo View (Natural)", 0);
			} else	if (lowlight == "cyberware"){
				return new Modifier("Mist, Low Light View (Cyberware)", 2);
			} else	if (lowlight == "natural"){
				return new Modifier("Mist, Low Light View (Natural)", 0);
			} else {
				return new Modifier("Mist", 0);
			}
			
        } else if (smoke == "minimal") {
	
			if (thermo == "cyberware") {
				return new Modifier("Light Smoke/Fog/Rain, Thermo View (Cyberware)", 0);
			} else if (thermo == "natural"){
				return new Modifier("Light Smoke/Fog/Rain, Thermo View (Natural)", 0);
			} else	if (lowlight == "cyberware"){
				return new Modifier("Light Smoke/Fog/Rain, Low Light View (Cyberware)", 4	);
			} else	if (lowlight == "natural"){
				return new Modifier("Light Smoke/Fog/Rain, Low Light View (Natural)", 2);
			} else {
				return new Modifier("Light Smoke/Fog/Rain", 4);
			}
	
        } else if (smoke == "partial") {
	
			if (thermo == "cyberware") {
				return new Modifier("Heavy Smoke/Fog/Rain, Thermo View (Cyberware)", 1);
			} else if (thermo == "natural"){
				return new Modifier("Heavy Smoke/Fog/Rain, Thermo View (Natural)", 0);
			} else	if (lowlight == "cyberware"){
				return new Modifier("Heavy Smoke/Fog/Rain, Low Light View (Cyberware)", 6);
			} else	if (lowlight == "natural"){
				return new Modifier("Heavy Smoke/Fog/Rain, Low Light View (Natural)", 4);
			} else {
				return new Modifier("Heavy Smoke/Fog/Rain", 6);
			}
	
        } 
	};
	
	getBlindModifier = function(blind) {
		if (blind == "true") {
			return new Modifier("Blindness", 8);
		} else {
			return new Modifier("Normal Sight", 0);
		}
	};
	
	getAimedModifier = function(aimed) {
		if (aimed == 0) {
			return new Modifier("Not aiming", "NaN");
		} else {
			return new Modifier("Aimed Shot", aimed);
		}
	};
	
	getCalledModifier = function(called) {
		if (called == "true") {
			return new Modifier("Called Shot", 4);
		} else {
			return new Modifier("Not Called Shot", "NaN");
		}
	};
	
	getLasersightModifier = function(laser) {
		if (laser == "true") {
			return new Modifier("Laser Sight", -1);
		} else {
			return new Modifier("No Laser Sight", "NaN");
		}
	};

	getSmartgunModifier = function(smartgun) {
		if (smartgun == "link") {
			return new Modifier("Smartlink", -2);
		} else if (smartgun == "goggles"){
			return new Modifier("Smart Goggles", -1);
		} else {
			return new Modifier("No Smartgun", "NaN");
		}
	};

	getMeleeModifier = function(melee) {
		if (melee == 0) {
			return new Modifier("No melee opponents", "NaN");
		} else {
			return new Modifier("Melee opponents", melee * 2);
		}
	};
	
	getWoundedModifier = function(wounded) {
		if (wounded == "uninjured") {
			return new Modifier("Not wounded", "NaN");
		} else if (wounded == "light") {
			return new Modifier("Light Wound", 1);
		} else if (wounded == "moderate") {
			return new Modifier("Moderate Wound", 2);
		} else if (wounded == "serious") {
			return new Modifier("Serious Wound", 3);
		}
	};
	
	getTargetMovementModifier = function(targetmovement) {
		if (targetmovement == "stationary") {
			return new Modifier("Stationary Target", -1);
		} else if (targetmovement == "running") {
			return new Modifier("Running Target", 2);
		} else {
			return new Modifier("No target movement", "NaN");
		}
	};
	
	getCoverModifier = function(cover) {
		if (cover == "false") {
			return new Modifier("No partial cover", "NaN");
		} else {
			return new Modifier("Partial Cover", 4);
		}
	};
	
	getAdditionalTargetsModifier = function(targets) {
		if (targets == 0) {
			return new Modifier("No additional targets", "NaN");
		} else if (targets == 1) {
			return new Modifier("1 Additional Target", 2);
		} else if (targets > 1) {
			return new Modifier(targets + " Additional Targets", targets * 2);
		}
	};

	getAttackerMovementModifier = function(attackermovement, ground) {
		if (attackermovement == "walking") {
			
			if (ground == "difficult") {
				return new Modifier ("Walking Attacker, Difficult Ground", 2);
			} else {
				return new Modifier ("Walking Attacker", 1);
			}
			
		} else if (attackermovement == "running") {
			
			if (ground == "difficult") {
				return new Modifier ("Running Attacker, Difficult Ground", 6);
			} else {
				return new Modifier ("Running Attacker", 4);
			}

		} else {
			return new Modifier ("Stationary Attacker", "NaN");
		}
	};
	
	getGyroAndMovementGyroModifier = function(gyro, attackerMovementModifier) {
		if (isNaN(attackerMovementModifier.modifier)) {
			
			if (gyro == 0) {
				return new Modifier ("No Gyro", "NaN");
			} else {
				return new Modifier ("No Gyro Used", "NaN");
			}
			
		} else {
			
			if (gyro == 0) {
				return attackerMovementModifier;
			} else {
				var used = (attackerMovementModifier.modifier - gyro) > 0 ? gyro : attackerMovementModifier.modifier;
				var rest = (attackerMovementModifier.modifier - gyro) >= 0 ? (attackerMovementModifier.modifier - gyro) : 0;
				
				return new Modifier (attackerMovementModifier.reason + ", Gyro Stabilization " + used, rest);
			}
			
		}
	};

	getRecoilModifier = function(recoil, bullets, gyro, gyroAndMovementModifier, attackerMovementModifier) {
		if (bullets > 1 ) {
			
			var restGyro = 0;
			if (isNaN(gyroAndMovementModifier.modifier)) {
				restGyro = gyro;
			} else {
				
				if (isNaN(attackerMovementModifier.modifier)) {
					restGyro = gyro;
				} else {
					restGyro = gyro - (attackerMovementModifier.modifier - gyroAndMovementModifier.modifier);
				}
				
				
			}
			var bulletsModifier = (bullets - 1 - restGyro - recoil) >= 0 ? (bullets - 1 - restGyro - recoil) : 0;
			if (recoil > 0) {
				
				if (restGyro > 0) {
					return new Modifier ("Recoil " + (bullets - 1) + ", Gyro Stabilization " + restGyro + ", Recoil Compensation " + recoil , bulletsModifier);
				} else {
					return new Modifier ("Recoil " + (bullets - 1) + ", Recoil Compensation " + recoil , bulletsModifier);
				}
				
			} else {
				if (restGyro > 0) {
					return new Modifier ("Recoil " + (bullets - 1) + ", Gyro Stabilization " + restGyro, bulletsModifier);
				} else {
					return new Modifier ("Recoil " + (bullets - 1), (bullets - 1));
				}
				
			}
			
		} else {
			
			if (isNaN(gyroAndMovementModifier.modifier)) {
				return new Modifier ("No Recoil or Movement", "NaN");
			} else {
				return new Modifier ("Gyro Modifier already under consideration", "NaN");
			}
			
		}

		throw "Error";
	};
	
	getModifiers = function(modifiers) {
		var length = modifiers.length;
		var validModifiers = new Array();
		for (i = 0; i < length; i++) {
			if (!isNaN(modifiers[i].modifier)) {
				validModifiers.push(modifiers[i]);
			}
		}
		return validModifiers;
	};

};
