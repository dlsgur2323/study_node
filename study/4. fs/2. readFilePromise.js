/**
 * fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기가 어렵다.
 * 따라서 fs 모듈을 프로미스 형식으로 바꿔주는 방법을 사용한다.
 * 
 */

const fs = require('fs').promises; // 이렇게만 해주면 promise 속성을 불러온다.

fs.readFile(__dirname+'/readme.txt')
    .then((data)=>{
        console.log(data);
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    });

    // 약간 ajax 같지않은가?
