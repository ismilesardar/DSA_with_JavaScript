// Head and Tail Recursion in JavaScript
console.log('Head and Tail Recursion in JavaScript');

function test4() {
    let data = 20;
    console.log(data);
}
function test3() {
    test4();
}
function test2() {
    test3()
}
function test1() {
    test2();
}
test1();

function test(x) {
    console.log(x)//Head Recursion
    if (x>0) {
        test(x-1)
        // console.log('t++')
    }
    console.log(x)//Tail Recursion
}
test(5);