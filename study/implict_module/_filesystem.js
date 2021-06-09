/**
 * File system 모듈
 *  - file 처리와 관련된 작업들을 한다.
 *  - 대부분의 함수들이 동기/비동기로 나뉘어진다.
 *  - 동기식의 경우 Sync 라는 키워드가 붙어있다고 보면 편하다.
 *  - 비동기 방식은 콜백 함수를 마지막에 추가하면 된다.
 *  
 *  - 파일 시스템을 처리하는 방식에는 예외처리가 중요하다.
 *  - 동기 함수의 경우 try/catch 로 처리하고
 *  - 비동기 함수의 경우 콜백 함수에서 예외처리를 한다.
 */

// 비동기 방식

var fs = require('fs');

// 파일 쓰기

fs.writeFile('test.txt', 'testing~', 'utf-8', function(error){
    if(error){ // 에러가 존재한다면
        console.log(error);
    } else {
        console.log("파일 작성 완료");
    }
});

// 파일 읽기
fs.readFile('test.txt', 'utf-8', function(error, data){
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
});


// 동기 방식

try {
    fs.writeFileSync('text.txt', 'Sync Test~', 'utf-8');
    console.log("파일 작성 완료");
} catch (error) {
    console.log(error);
}