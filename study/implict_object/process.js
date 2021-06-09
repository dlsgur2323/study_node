/**
 * process 객체는 프로그램과 관련된 정보를 나타내는 객체이다.
 *  - 즉 프로그램이 어떤 환경에서 실행되고 있고, 어떤 상태인지 등의 정보를 지닌 객체이다.
 */

console.log(process.env); // 실행되고 있는 컴퓨터의 각종 정보를 가진 객체
console.log(process.version); // 노드의 버전
console.log(process.versions); // 노드를 포함한 각종 모듈 버전들
console.log(process.arch); // 프로세서 아키텍처 정보
console.log(process.platform); // OS 정보
console.log(process.memoryUsage()); // 현재 메모리 사용정보
console.log(process.uptime()); // 프로세스 실행 후 흐른 시간(초)



// process.nextTick()
//  - 이벤트 루프가 다른 콜백 함수보다 nextTick의 콜백을 우선적으로 처리한다.
//  - 이것은 그 어떤 timer 보다 우선하는데, 자세한건 교과서에...


setImmediate(()=>{
    console.log("immediate");
});
process.nextTick(()=>{
    console.log("우선처리");
});


setTimeout(()=>{
    console.log("program exit");
    process.exit()
}, 1000);
 // 프로그램 종료. (파라미터를 생략하거나 0 을 넣으면 정상종료, 1을 넣으면 비정상 종료);