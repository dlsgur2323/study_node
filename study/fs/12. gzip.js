/**
 * pipe는 스트림 사이에 여러번 연결할 수 있다.
 * 이번 예제는 파일을 읽은 후 gzip 방식으로 압축하는 코드이다.
 * 파일을 읽고 압축 한 후 파일을 쓰는 코드이다.
 */

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream(__dirname + '/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream(__dirname+'/readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

