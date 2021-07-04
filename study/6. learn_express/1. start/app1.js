const express = require('express'); // 콘솔에 npm i express 필수

const app = express();
app.set('port', 8080); // setting port , app.set() 메서드로 키:값 형태의 데이터를 저장할 수 있다.

app.get('/', (req,res)=>{  // app.get()은 그 안에 key만 넣으면 set했던 key의 value를 가져온다. url 주소, 라우터 를 넣으면 GET 요청에 대한 동작을 수행한다.
    res.send('Hello, Express'); // express 에서는 res.write나 end 대신 send를 이용한다.
});                                // GET 말고도 app.post, put, patch, delete, options 메서드가 존재한다.

app.listen(app.get('port'), ()=>{       // 위에서 지정했던 8080포트를 get을 통해 가져온다.
    console.log('Express Server running on 8080 port')
})