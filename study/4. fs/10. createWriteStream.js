// 이번에는 파일을 쓰는 스트림이다.
const fs = require('fs');

const writeStream = fs.createWriteStream(__dirname+'/writeme2.txt');
// 첫 번째 인수로는 출력 파일명, 두 번째 인수로는 옵션 객체인데 여기서는 사용하지 않는다.

writeStream.on('finish', ()=>{ // 파일 쓰기를 끝냈을 때
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n'); // 파일 쓰기
writeStream.write('한 번 더 씁니다.'); 
writeStream.end(); // 스트림 종료
