//Playing around with arrays as they are presented.

function AwesomeArray(){
    var arr = [
        "Hello world",
        42,
        true
    ];

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr.length);

    console.log(typeof arr);
}

function GoodFunctions() {
    function foo() {
        return 42;
    }

    foo.bar = "hello world";

    console.log(typeof foo);
    console.log(typeof foo());
    console.log(typeof foo.bar);
}

function BuiltInType() {
    var a = "hello world";
    var b = 3.14159;

    console.log(a.length());
    console.log(a.topUpperCase());
    console.log(b.toFixed(4));

}

function Coercion(){
    var a = "42";

    var b = Number(a);

    console.log(a);
    console.log(b);

}

function ImplicitCoercion(){
    var a = "42";

    var b = a * 1;

    console.log(a);
    console.log(b);

}

function TrueOrFalse(){
    var a = "42";

    var b = 42;

    console.log(a == b);
    console.log(a === b);
}

function NotEqual(){
    var a = [1,2,3];
    var b = [1,2,3];
    var c = "1,2,3";

    console.log(a == c);
    console.log(b == c);
    console.log(a == b);
}