/**
 * 이번 예제는 쿠키를 통해 사용자 정보를 식별한다.
 */

const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

var parseCookies = (cookie = '')=>
    cookie.split(';').map(v=>v.split('=')).reduce((acc, arr)=>{
        acc[arr[0].trim()]= decodeURIComponent(arr[1]);
        return acc;
    },{});


http.createServer(async (req,res)=>{
    const cookies = parseCookies(req.headers.cookie); // 결국 cookies 는 acc
    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expries = new Date();
        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
        expries.setMinutes(expries.getMinutes() + 5);
        // 302 : 리다이렉트 , Location : 리다이렉트 할 경로, 
        res.writeHead(302, {Location : '/' , 'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expries.toGMTString()}; HttpOnly; Path=/`,});
        return res.end();
    } else if (cookies.name){
        res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
        return res.end(`${cookies.name}님 안녕하세요!`);
    } else {
        try {
            const data = await fs.readFile(__dirname + '/cookie2.html');
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            return res.end(data);
        } catch (error) {
            res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
            res.end(error.message);
            return console.error(error);
        }
    }
})
.listen(8080,()=>{
    console.log('server is on');
});

/**
 * Set-Cookie 할때는 그 값에 줄바꿈을 넣으면 안된다.
 * 쿠키에 들어갈 수 있는 옵션
 * 1. Expires=날짜 : 만료기한, 기본값은 클라이언트 종료
 * 2. Max-age=초 : 해당 초가 지나면 만료
 * 3. Domain=도메인명 : 쿠키가 전송될 도메인을 특정할 수 있다. 기본값은 현재 도메인
 * 4. Path=url : 쿠키가 전송될 URL을 특정지을 수 있다. 기본값은 '/'
 * 5. Secure : HTTPS일 경우에만 쿠키가 전송
 * 6. HttpOnly : 설정 시 자바스크립트에서 쿠키에 접근할 수 없다. 쿠키 조작 방지를 위함
 */