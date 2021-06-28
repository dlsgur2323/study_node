// setTimeout() 지정한 시기에 실행
// 첫번째 파라미터로 콜백 함수를 받고,
// 두번째 파라미터로 지연시킬(기다릴) 밀리초를 받는다.
// 그 이후 파라미터는 콜백 함수의 파라미터로 들어간다.
// 모든 timer 함수는 설정한 timeout을 참조하는 Timeout 객체를 반환한다.
// 이를 통해서 설정한 timeout을 변경,취소 할 수 있다.

function myFunc(arg){
    console.log('arg was => %s', arg);
}

setTimeout(myFunc, 1500, 'funky'); // 1.5초 후에 myFunc 라는 함수를 실행. 함수에 전달힐 파라미터는 funky 라는 문자열

const timeOut = setTimeout(myFunc, 1600, 'this is timeOut'); // timeOut이라는 변수에 timeout 객체 담기

/*
    setImmediate() : 현재 작동중인 이벤트 루프 직후에 바로 실행
    첫번째 파라미터는 실행할 콜백함수
    그 다음 파라미터는 콜백함수에 넘겨줄 파라미터
*/

console.log("before immediate");

setImmediate((arg) => {
    console.log(`executing immediate : ${arg}`);
}, 'this is immediate');

console.log('after immediate');

/*
    setInterval()
    - 지정된 시간마다 실행
    - 첫번째 파라미터로 콜백함수를 받고
    - 두번째 파라미터로 반복할 주기(시간)을 받는다.
    - 그 이후 파라미터는 콟개함수에 넘겨줄 파라미터

*/

function intervalFunc(){
    console.log('can\'t stop me now!');
}

setInterval(intervalFunc, 1500);

/**
 * timer 취소하기
 * - 각각의 setTimeout(), setImmediate(), setInterval()을 중단하는 함수는
 * - clearTimeout(), clearImmediate(), clearInterval() 이다. (set -> clear);
 * - 파라미터로 설정된 timer객체를 넣어야 해당 timer가 중지된다.
 */

const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
}, 2000);

const immediateObj = setImmediate(()=>{
    cinsole.log("immediately executing immediate");
});

const intervalObj = setInterval(()=>{
    console.log('interviewing the inteval');
}, 500);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);

const timerObj = setTimeout(()=> {
    console.log("will i run?");
});

timerObj.unref();
console.log("not now!");

setTimeout(()=>{
    timerObj.ref();
    console.log("yes!");
}, 3000);