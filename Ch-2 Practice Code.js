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
