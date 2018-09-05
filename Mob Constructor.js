function attack(dmg) {
	dmg = defenseChk(dmg, this.defense);
	this.health = this.health - dmg;
}
function defenseChk(attk, def){
	if (def > attk) {
		return 0;
    }
	else return attk - def;
}

function Mob(name, health, attk, defense) {
	this.name = name;
	this.health = health;
	this.attk = attk;
	this.defense = defense;
    this.attack = attack;
	this.stats = function() {
		return console.log("\nName: " + this.name + "\nHealth: " + this.health + "\nAttack Power: " + this.attk + "\nDefense: " + this.defense);
    }
}

var jack = new Mob("Jack", 1243, 300, 300);
var jordan = new Mob("Jordan", 600, 500, 150);