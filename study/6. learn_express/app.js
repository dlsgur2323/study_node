/**
 * 단순한 문자열 대신 HTML로 응답하고 싶다면 res.sendFile 메서드를 사용하면 된다.
 * 단, 파일의 경로를 path 모듈을 사용해서 지정해야 한다.
 */
const express = require('express');
const path = require('path');

const app = express();
app.set('port', 8080);

app.get('/', (req,res)=>{  
    res.sendFile(path.join(__dirname, '/index.html'));
});                                

app.listen(app.get('port'), ()=>{    
    console.log('Express Server running on 8080 port')
});

app.on('close', ()=>{
    console.log("Express Server has Stopped");
});

/**
 
http 모듈의 이벤트 ( Express는 아닌가봄.... )
 1) connection : 클라이언트가 접속하면 발생하는 이벤트
 2) request : 클라이언트가 서버에 요청을 보낼때 발생하는 이벤트
 3) response : 서버에서 클라이언트에게 응답하면 발생하는 이벤트
 4) close : 서버가 종료되면 발생하는 이벤트

 * 
 */