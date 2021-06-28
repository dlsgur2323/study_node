/**
 * 노드에서 멀티 스레드 방식으로 작업하는 방법
 * 
 */

// 먼저 간단한 사용 방법
const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if(isMainThread) {// 부모일때
   const worker = new Worker(__filename);  // 현재 파일을 처리하는 worker 라는 스레드를 만든다.
    worker.on('message', message => console.log('from worker ', message)); //worker 스레드가 message를 보내면 console.log 수행
    worker.on('exit', ()=>console.log('worker exit')); // worker 스레드가 exit 하면 console.log 수행
    worker.postMessage('ping');  // worker에게 ping 이라는 메시지 전송
} else { // 워커일때
    parentPort.on('message', (value) => { // 부모 스레드가 message를 보내면 수행
        console.log('from parent ' , value); // console.log
        parentPort.postMessage('pong'); // 부모 스레드에게 pong 이라는 message 전송
        parentPort.close(); // 부모와의 연결 종료, worker는 exit 하게된다.
    });
}

