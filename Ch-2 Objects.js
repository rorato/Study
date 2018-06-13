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

    var b = "a";

    console.log(obj['a']);
    console.log(obj[b]);
    console.log(obj['b']);
}

function Object3(){
    var obj = {
        Polly: "Pocket",
        b: "Not a Pocket"
    };
    
    var a = "Polly";

    console.log(obj['b']);
    console.log(obj[a]);

}

function FunObject(){
    var obj = {
        Kunta: "You sir, are a Keentei",
        Keentei: "Let us not have an argument now...",
        Jack: "Not this guy Jake",
        Pickle: "Pickle Riiiiiiiiiick?"
    };
    var validProperty = false;
    var answerPrompt;

    while(validProperty == false){
        answerPrompt = prompt("Guess an Object Property!");
        if(obj.hasOwnProperty(answerPrompt)){
            alert(obj[answerPrompt]);
            validProperty = true;
        } else alert("Not a property, try again");

    }
    
}

Object1();
Object2();
Object3();
FunObject();