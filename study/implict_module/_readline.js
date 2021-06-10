/**
 * Readline 모듈
 *  - 콘솔에서 입력한 값을 받아 사용하는 모듈
 *  - java의 nextLine 같은 것
 *  
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('숫자 입력');


var input = [];

rl.on('line', function(line) {
    input.push(line);
    if(input.length == 1){
        console.log("두번째 숫자 입력");
    }
    if(input.length == 2){
        rl.close();
    }
}).on("close", function() {
    const sum = parseInt(input[0]) + parseInt(input[1]);
    console.log(`num1 + num2 = ${sum}`);
});
