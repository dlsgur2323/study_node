/**
 *  child_process
 *  - 노드에서 다른 프로그램을 실행하거나 명령어를 수행하고 싶을 때 사용하는 모듈이다.
 *  - 이 모듈을 통해 다른 언어의 코드를 실행하고 결과값을 받을 수 있다.
 *  
 */
const exec = require('child_process').exec;

// 아래의 예제는 간단하게 명령 프롬프트의 dir (맥,리눅스의 경우 ls) 명령어를 수행하는 코드이다.
const process = exec('ls'); // 맥,리눅스 : ls, 윈도우 : dir

process.stdout.on('data', function(data){
    console.log(data.toString());
});

process.stderr.on('data', function(data){
    console.error(data.toString());
});

