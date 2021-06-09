/**
 * node.js는 이벤트 기반의 비동기 프로그램으로 많은 객체들이 이벤트 기능을 상속 받아서 사용하고 있다.
 * node 에서는 addListener 또는 on 을 사용하여 이벤트를 등록할 수 있다.
 */

const eventHandler = () => {
    console.log('Exit');
}

const eventHandler2 = () => {
    console.log("Exit on");
}

process.addListener("exit", eventHandler); // 프로세스가 exit(종료) 될때 실행
process.on("exit", eventHandler2); // 프로세스가 exit(종료) 될때 실행

// 결과는 둘 다 모두 출력된다.
// 즉 둘 다 같은 것

// emit 메소드를 이용하여 이벤트를 강제로 발생 시킬 수 있다.
process.on('test', ()=>{
    console.log('TEST event');
});

process.emit("test");
/**
 * 이는 마치 test 라는 이벤트를 만들고
 * 어떠한 조건에 따라 test 이벤트를 실행 시키는 것 처럼 보인다.
 */