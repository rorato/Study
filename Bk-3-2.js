newtab?rlz=1C5CHFA_enUS748US748&ie=UTF-8:8 SW registered
Main_Login.asp:1 Failed to load resource: net::ERR_FAILED
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
undefined
jack.stats
ƒ () {
		return console.log("\nName: " + this.name + "\nHealth: " + this.health + "\nAttack Power: " + this.attk + "\nDefense: " + this.defense);
    }
jack.stats;
ƒ () {
		return console.log("\nName: " + this.name + "\nHealth: " + this.health + "\nAttack Power: " + this.attk + "\nDefense: " + this.defense);
    }
jack.stats();
 
Name: Jack
Health: 1243
Attack Power: 300
Defense: 300
undefined
jordan.stats();
 
Name: Jordan
Health: 600
Attack Power: 500
Defense: 150
undefined
jordan.attack(jack.attk);
undefined
jordan.stats();
 
Name: Jordan
Health: 450
Attack Power: 500
Defense: 150
undefined
jack.attack(jordan.attk);
undefined
jack.stats();
 
Name: Jack
Health: 1043
Attack Power: 300
Defense: 300
undefined
function foo() {
	console.log(this.a);
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: "This is obj's a."
}

var c = bind(foo, obj);

c();
VM463:2 This is obj's a.
undefined
foo();
VM463:2 Whoops, Global
undefined
function foo() {
	console.log(this.a);
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: "This is obj's a."
}

var c = bind(foo, obj);
var d = foo(obj);

c();
VM476:2 Whoops, Global
VM476:2 This is obj's a.
undefined
c();
VM476:2 This is obj's a.
undefined
d();
VM486:1 Uncaught TypeError: d is not a function
    at <anonymous>:1:1
(anonymous) @ VM486:1
d;
undefined
console.log(d);
VM500:1 undefined
undefined
function foo() {
	console.log(this.a);
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: "This is obj's a."
}

var c = bind(foo, obj);
var d = foo(obj);
VM503:2 Whoops, Global
undefined
c();
VM503:2 This is obj's a.
undefined
d;
undefined
d(obj);
VM521:1 Uncaught TypeError: d is not a function
    at <anonymous>:1:1
(anonymous) @ VM521:1
foo(obj);
VM503:2 Whoops, Global
undefined
foo.call(obj);
VM503:2 This is obj's a.
undefined
c();
VM503:2 This is obj's a.
undefined
function foo(something) {
	console.log(this.a);
	return this.a + something;
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: 2
}

var c = bind(foo(2), obj);
var d = foo(obj);
VM572:2 Whoops, Global
VM572:2 Whoops, Global
undefined
c();
VM572:8 Uncaught TypeError: fn.apply is not a function
    at <anonymous>:8:13
    at <anonymous>:1:1
(anonymous) @ VM572:8
(anonymous) @ VM577:1
c;
ƒ (){
		return fn.apply(obj, arguments);
    }
function foo(something) {
	console.log(this.a);
	return this.a + something;
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: 2
}

var c = bind(foo, obj, 2);
var d = foo(obj);
VM603:2 Whoops, Global
undefined
c();
VM603:2 2
NaN
function foo(something) {
	console.log(this.a);
	return this.a + something;
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: 2
}

var c = bind(foo, 2, obj);
var d = foo(obj);
VM626:2 Whoops, Global
undefined
c();
VM626:2 undefined
NaN
function foo(something) {
	console.log(this.a);
	return this.a + something;
}

function bind(fn, obj) {
	return function(){
		return fn.apply(obj, arguments);
    }
}

var a = "Whoops, Global";

var obj = {
	a: 2
}

var c = bind(foo, obj);
var d = foo(obj);

var bar = c(3);
VM653:2 Whoops, Global
VM653:2 2
undefined
console.log(bar);
VM667:1 5

function pengas(a,b) {
	console.log("A: " + a + "B: " + b);
}

var c = [3,5];
pengas.apply(null, c);

VM968:2 A: 3B: 5
undefined
function pengas(a,b) {
	console.log("A: " + a + " B: " + b);
}

var c = [3,5];
pengas.apply(null, c);

VM972:2 A: 3 B: 5
undefined