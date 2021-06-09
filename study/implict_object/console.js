
// console.log
console.log("hello");
console.log("숫자 : %d + %d = %d" , 243, 442, 243+442);
console.log("문자열 : %s", 'hello,','world');
console.log("\u001b[31m", "빨간색");

//  console.time 실행시간을 측정
// 같은 label을 가진 time과 timeEnd이 한쌍

console.time('tag');

var output = 1;
for(var i=1; i<=10; i++){
    output *= i;
    console.log(output);
}
console.timeEnd('tag');

