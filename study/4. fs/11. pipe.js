/**
 * createReadStream으로 파일을 읽고 createWriteStream으로 파일을 쓸 수도 있다.
 * 스트림끼리 연결하는 것을 파이핑 한다고 표현한다.
 */

const fs = require('fs');

const readFile = fs.createReadStream(__dirname + '/readme4.txt');
const writeFile = fs.createWriteStream(__dirname+"/writeme3.txt");
readFile.pipe(writeFile);