/**
 * 쿠키
 * 쿠키는 단순한 key-value의 쌍이다.
 */

const http = require('http');

const serever = http.createServer( (req, res) => {
    console.log(req.url, req.headers.cookie); // 요청의 headers.cookie 로 쿠키 정보를 모두 가져온다.
    res.writeHead(200,{'Set-Cookie' : 'mycookie=test'}); // Set-Cookie 라는 헤더는 쿠키를 저장하라는 뜻. 결국 브라우저는 mycookie=test 라는 쿠키를 저장한다.
    res.end('Hello, Cookie');
}).listen(8080, ()=>{
    console.log('server on');
});

// 다음 예제에서 사용자를 식별하는 방법을 알아보자
