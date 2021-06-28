// 버퍼를 사용하는 readFile과 writeFile을 사용한다.
const fs = require('fs');
console.log('before :', process.memoryUsage().rss); // 메모리 사용량

const data = fs.readFileSync(__dirname+'/big.txt');
fs.writeFileSync(__dirname+'/big2.txt', data);
console.log(process.memoryUsage().rss);
// 2천6백7십7만B
// 9억9천7백6십 약 10억B
// 메모리 소모량이 엄청난다.