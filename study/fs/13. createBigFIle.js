/**
 * 이번에는 1GB용량의 텍스트파일을 만들어 파일을 읽고 쓰는데 버퍼와 스트림의 차이를 극명하게 느껴볼 것입니다.
 * 
 */

const fs = require('fs');
const file = fs.createWriteStream(__dirname+'/big.txt');

for(let i=0; i<10000000;i++){
    file.write('안녕하세요. 엄청나게 큰 파일을 만들어 볼 겁니다. 각오 단단히 하세요!\n');
}
file.end();