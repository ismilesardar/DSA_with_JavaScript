// console.log('In Direct Recursion Data Structure in JavaScript');
// In Direct Recursion Data Structure in JavaScript

let money = 100;
let totalAppel = 0;

function bayApple(x) {
    if(x>0){
        // if(totalAppel==0) totalAppel += Math.floor(x/10);
        console.log(`Money ${x} BayApple ${totalAppel}`);
        bayMore(x);
    }else{
        console.log(`Total Apple is ${totalAppel}`);
    }
}

function bayMore(y) {
    // totalAppel--;
    totalAppel++;
    bayApple(y-10);
    // console.log(y);
}

// bayApple(money);

function test(x) {
    console.log(x)
    if (x>0) {
        test(x-1)
        // console.log('t++')
    }
    console.log(x)
}
test(5);