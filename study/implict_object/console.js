
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

/**
 * console.dir() 
 * - 객체를 콘솔에 표시할 때 사용한다.
 * - 첫 번째 파라미터는 표시할 객체
 * - 두 번째 파라미터는 옵션
 * - colors 를 true 로 하면 색깔이 입혀져 보기 좋아진다.
 * - depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정한다.
 */
