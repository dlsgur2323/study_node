/**
 * 노드는 대부분의 메서드를 비동기 방식으로 처리한다.
 * 하지만 몇몇의 메서드는 동기 방식으로도 사용할 수 있다.
 * 특히 fs 모듈이 그러한 메서드를 많이 가지고 있다.
 * 
 */

// 파일 하나를 여러번 읽어보는 예제

const fs = require('fs');

console.log('시작');
fs.readFile(__dirname+'/readme2.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
});
fs.readFile(__dirname+'/readme2.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile(__dirname+'/readme2.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});

console.log('끝');

// 위 코드를 실행하면 시작과 끝이 먼저 나오고 1번~3번까지 순서가 맞지 않을 수 있다.
/**
 * 비동기 메서드들은 백그라운드에 요청만하고 다음 작업으로 넘어간다.
 * 따라서 위 코드는 파일 읽기 요청만 세번 보내고 console.log('끝')을 수행하는 것이다.
 * 나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알린다.
 * 메일 스레드는 그제서야 등록된 콜백함수를 실행한다.
 */