/**
 * readFile 방식의 버퍼가 편리하기는 하지만 문제가 있다.
 * 만약 용량이 100MB인 파일이 있다면, 읽을 때 마다 100MB의 버퍼를 만들어야 한다.
 * 이 작업을 동시에 몇번을 하면 그만큼 100MB의 버퍼를 만들어야 한다.
 * 서버처럼 몇 명이 사용할지 모르는 환경에서는메모리 문제가 발생할 수 있다.
 * 
 * 또한 모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어가므로 파일 읽기, 압축, 파일 쓰기 등의 조작을 연달아 할때 매번 전체 용량을 채워야 다음 단계로 넘어갈 수 있다.
 * 
 * 그래서 나온 것이 버퍼의 크기를 작게 쪼갠 후 여러번 나눠 보내는 방식의 스트림이다.
 * 예를 들면 100MB의 파일을 읽을때 1MB의 버퍼를 만든 후 1MB씩 100번 읽어 보내는 것이다.
 * 
 * 노드에서 파일을 읽는 스트림 메서드로는 createReadStream이 있다.
 */

const fs = require('fs');

const readStream = fs.createReadStream(__dirname+"/readme3.txt", {highWaterMark:16}); // 첫번째 인수로 읽을 파일을, 두번째 인수는 옵션 객체인데, highWaterMark는 버퍼의 크기(바이트 단위)를 설정한다. 지금은 16B 
const data = [];

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data :', chunk, chunk.length, chunk.toString());
});

readStream.on('end', ()=>{
    console.log('end :', Buffer.concat(data).toString());
})

readStream.on('error', (err)=>{
    console.error(err);
})