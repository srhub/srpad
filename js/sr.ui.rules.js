function RulesUI(properties, weaponTypes) {

    this.defaultProperties = {
        "baseId": "base",
        "modifiersId": "modifiers"
    };

	this.properties = this.getProperties(properties);

	this.weaponTypes = weaponTypes;
	this.calculationObject;
	
    this.draw = function() {
		this.deleteAllChildren(this.properties["baseId"]);
		this.deleteAllChildren(this.properties["modifiersId"]);
	
		var weaponName =  this.weaponTypes.filterByField("id", this.calculationObject.weaponType)[0].name;
		var baseTag = document.getElementById(this.properties["baseId"]);
		baseTag.appendChild(this.getBaseTag(weaponName, this.calculationObject.baseTarget));
		
		 
		
		console.log(this.calculationObject.weaponType);
		
		var modifiersTag = document.getElementById(this.properties["modifiersId"]);
		var modifierTags = this.getModifierTags (this.calculationObject.modifiers);
		for (i = 0, length = modifierTags.length; i < length; i++) {
            modifiersTag.appendChild(modifierTags[i]);
        }
    };

    /**
	 * Returns the base div tag
	 * <div id="base">
	 * 	<p class="reason">Heavy Pistol, Medium Range (50m)</p>
	 * <p class="target">4</p>
	 * </div>
	 */
    this.getBaseTag = function(weaponName, baseTarget) {
        var baseTag = document.createElement('div');
        baseTag.setAttribute('id', "base");
        baseTag.appendChild(this.getParagraphTag("reason", weaponName + ", " + baseTarget.reason));
        baseTag.appendChild(this.getParagraphTag("target", baseTarget.modifier));
        return baseTag;
    };

    /**
	 * Returns a collection of modifier tags
	 */
    this.getModifierTags = function(modifiers) {
        var modifierTags = [];
        for (i = 0, length = modifiers.length; i < length; i++) {
            modifierTags.push(this.getModifierTag(modifiers[i]));
        }
        return modifierTags;
    };

    /**
	 * Returns the modifier div tag
	 * <div class="modifier">
	 * 	<p class="reason">Blind</p>
	 *  <p class="target">+8</p>
	 * </div>
	 */
    this.getModifierTag = function(modifier) {
        var modifierTag = document.createElement('div');
        modifierTag.setAttribute('class', "modifier");
        modifierTag.appendChild(this.getParagraphTag("reason", this.getSignedNumber(modifier.reason)));
        modifierTag.appendChild(this.getParagraphTag("target", this.getSignedNumber(modifier.modifier)));
        return modifierTag;
    };

	this.getSignedNumber = function (number) {
		if (Math.signum(number) > 0) {
			return "+" + number;
		} else 
			return number;
	};

    /**
	 * Returns the a classed paragraph tag
	 * 	<p class="reason">Blind</p>
	 */
    this.getParagraphTag = function(clazz, content) {
        var p = document.createElement('p');
        p.setAttribute('class', clazz);
        p.appendChild(document.createTextNode(content));
        return p;
    };

    this.deleteAllChildren = function(fatherId) {
        var father = document.getElementById(fatherId);
        if (father.hasChildNodes()) {
            while (father.childNodes.length >= 1) {
                father.removeChild(father.firstChild);
            }
        }
    };

};
RulesUI.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};