/*
* 각종 경로 관련 모듈
*/

const path = require('path');

console.log("OS에 따른 경로 구분자 : ", path.sep);
console.log("환경변수 구분자 : ",path.delimiter);
console.log("파일 경로 : ", path.dirname(__filename));
console.log("파일 확장자 : ",path.extname(__filename));
console.log("파일 이름 : ",path.basename(__filename));
console.log("파일 정보 분해 : ",path.parse(__filename));
console.log("경로가 절대경로인지 확인 : ", path.isAbsolute('C:\\'));
console.log("A에서 B로 가는 상대 경로를 보여줌 : ", path.relative('C:\\', 'C:\\jdk11\bin\java.exe'));



