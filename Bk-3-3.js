//This is some of the example code and personal code for Book 3 Ch 3 of YDKJS

function objectCon() {
    var str = "Hello Thar.";

    var strObj = new String("Hello There.");

    console.log(str);
    console.log(strObj.toString());
}
function objMist() {

var myObject = { };

myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";

console.log(myObject["true"]);				// "foo"
console.log(myObject["3"]);					// "bar"
console.log(myObject["[object Object]"]);	// "baz"
}

function preFixObj() {

    var prefix = "Taint";

    var obj = {
        [prefix + "man"]: "Taintman",
        [prefix + "girl"]: "Taintgirl"
    };

    console.log(obj.Taintman);
    console.log(obj.Taintgirl);
}

function myGetter() {

var myObj = {
	//This is define a getter property for myObj using literal syntax
	get a() {
		return 2;
    }
};

Object.defineProperty(
	//This is to define an additional property for myObj using the Object built in functions
	myObj,	//	Target
	"b",	//	Name of property
    {		
		get: function(){return this.a*2},	//	Define the get property descriptor for the property 'b'
		
		enumerable: true	//	This is the property descriptor that allows the property to be accessed.
    }
);	//	end of defining property

console.log(myObj.a);	//	=	2
console.log(myObj.b);	//	=	4
}
myGetter();