window.onload = function() {
	var width = 768;
	var height = 1024/2;
    var paper = Raphael("canvas", width, height);

	// weapon type chooser
	var weaponTypes = [
		new WeaponType ("hold-out.pistol", "firearm", "Hold-Out Pistol", "images/weapons/holdout.png", [5, 15, 30, 50]),
		new WeaponType ("light.pistol", "firearm", "Light Pistol", "images/weapons/holdout.png", [5, 15, 30, 50]),
		new WeaponType ("heavy.pistol", "firearm", "Heavy Pistol", "images/weapons/holdout.png", [5, 20, 40, 60]),
		new WeaponType ("smg", "firearm", "SMG", "images/weapons/holdout.png", [10, 40, 80, 150]),
		new WeaponType ("taser", "firearm", "Taser", "images/weapons/holdout.png", [5, 10, 12, 15]),
		new WeaponType ("shotgun", "firearm", "Shotgun", "images/weapons/holdout.png", [10, 20, 50, 100]),
		new WeaponType ("sporting.rifle", "firearm", "Sporting Rifle", "images/weapons/holdout.png", [100, 250, 500, 750]),
		new WeaponType ("sniper.rifle", "firearm", "Sniper Rifle", "images/weapons/holdout.png", [150, 300, 700, 1000]),
		new WeaponType ("assault.rifle", "firearm", "Assault Rifle", "images/weapons/holdout.png", [50, 150, 350, 550]),
		new WeaponType ("light.machine.gun", "heavy", "Light Machine Gun", "images/weapons/holdout.png", [75, 200, 400, 800]),
		new WeaponType ("medium.machine.gun", "heavy", "Medium Machine Gun", "images/weapons/holdout.png", [80, 250, 750, 1200]),
		new WeaponType ("heavy.machine.gun", "heavy", "Heavy Machine Gun", "images/weapons/holdout.png", [80, 250, 800, 1500]),
		new WeaponType ("assault.cannon", "heavy", "Assault Cannon", "images/weapons/holdout.png", [100, 300, 900, 2400]),
		new WeaponType ("grenade.launcher", "heavy", "Grenade Launcher", "images/weapons/holdout.png", [50, 100, 150, 300]),
		new WeaponType ("missile.launcher", "heavy", "Missile Launcher", "images/weapons/holdout.png", [150, 450, 1200, 3000]),
		new WeaponType ("bow", "Bow", "projectile", "images/weapons/holdout.png", [1, 10, 30, 60], 5),
		new WeaponType ("light.crossbow", "projectile", "Light Crossbow", "images/weapons/holdout.png", [2, 8, 20, 40], 5),
		new WeaponType ("medium.crossbow", "projectile", "Medium Crossbow", "images/weapons/holdout.png", [3, 12, 30, 50], 5),
		new WeaponType ("heavy.crossbow", "projectile", "Heavy Crossbow", "images/weapons/holdout.png", [5, 15, 40, 60], 5),
		new WeaponType ("thrown.knife", "projectile", "Thrown Knife", "images/weapons/holdout.png", [1, 2, 3, 5], 5),
		new WeaponType ("shuriken", "projectile", "Shuriken", "images/weapons/holdout.png", [1, 2, 5, 7], 5)
	];
	var rules = new Rules(new RulesUI({}, weaponTypes));
	
	
	new RangedCombat (paper, rules, weaponTypes).draw();
	rules.change("weapontype", "heavy.pistol");

};