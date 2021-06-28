/**
 * 이번에는 html 문서로 응답하는 서버
 */

const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req,res) => {
    try {
        const data = await fs.readFile(__dirname+'/server2.html');
        res.writeHead("200", {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
    } catch (err) {
        res.writeHead("500", {'Content-Type' : "text/plain;charset=utf-8"});
        res.end(err.message);
    }
}).listen(8080);

server.on('listening' , ()=>{
    console.log('8080번 포트에서 서버 대기 중입니다..');
});

server.on('error', (err)=>{
    console.error(err);
});