/**
 * 여기서는 간단하게 파일을 읽는 예제를 살펴본다.
 * readme.txt를 읽을 것이다.
 */

const fs = require('fs');

fs.readFile(__dirname+'/readme.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

// readFile 메서드의 첫번째 인자로 읽을 파일의 경로+파일명을 넣는다, 두번째 인자로는 콜백 함수를 넣는다. 이 콜백 함수는 에러와 파일을 읽은 데이터를 받는다.
// data를 그냥 console.log 하면 이상한 문자로 나타난다. 그 이유는 readFile의 결과물은 버퍼라는 형식으로 제공되기 때문이다.
// 따라서 글자를 그대로 보기 위해서는 toString()으로 문자열로 변환해주어야 한다.

