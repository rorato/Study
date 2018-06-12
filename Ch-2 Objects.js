//Explore and practice objects

function Object1(){
var obj = {
    a: "hello world",
    b: 42,
    c: true
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
}

//----------------------------------------------------------

function Object2(){
    var obj = {
        a: "Jerkin Gerkin",
        b: 1337
    };

    var b = "Bullsnit";

    console.log(obj[a]);
    console.log(obj[b]);
    console.log(obj['b']);
}

Object1();
Object2();