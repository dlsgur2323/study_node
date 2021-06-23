// 파일 읽기를 순서대로 하고 싶다면 아래처럼 구성하면 된다.

const fs = require('fs');

console.log('시작');
let data = fs.readFileSync(__dirname+'/readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync(__dirname+'/readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync(__dirname+'/readme2.txt');
console.log('3번',data.toString());

console.log('끝');

// sync는 콜백함수 대신 읽어들인 데이터 버퍼를 return 한다.
// 동시메서드들은 대체로 뒤에 sync 라는 이름이 붙어있다.
// 근데 비동기 방식으로 순서를 지키려면 어떻게 해야할까?