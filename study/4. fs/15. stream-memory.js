// 이번에는 스트림으로 big 파일을 복사한다.
const fs = require('fs');

console.log('before :', process.memoryUsage().rss);

const readStream = fs.createReadStream(__dirname+'/big.txt', {highWaterMark : 1049000});
const writeStream = fs.createWriteStream(__dirname+'/big3.txt');
readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log('stream :', process.memoryUsage().rss);
});

// 2천 6백7십만 B
// 2억 3천 5십5만 B

