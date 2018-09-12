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
preFixObj();