/**
 * 미들웨어는 익스프레스의 핵심
 * 요청과 응답의 중간에 위치하여 미들웨어라고 부른다.
 * 미들웨어는 app.use(미들웨어)와 함께 사용한다.
 * 
 */

 const express = require('express');
 
 const app = express();
 app.set('port', 8080);
 
 app.use((req, res, next)=>{
     console.log("모든 요청에 다 실행됩니다.");
     next();
 })
 app.get('/', (req,res, next)=>{  
     console.log(' GET / 요청에만 실행됩니다.');
     next();
 }, (req, res)=>{
     throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
 });                                

 app.use((err,req,res,next)=>{
     console.error(err);
     res.status(500).send(err.message);
 });
 
 app.listen(app.get('port'), ()=>{    
     console.log('Express Server running on 8080 port')
 });
 
 /**
  * app.use 에 매개변수가 req, res, next인 함수를 넣으면 된다. 미들웨어는 위에서부터 아래로 순서대로 실행되는데, next();를 반드시 실행해야 다음 미들웨어로 넘어간다.
  * app.use에 첫 번쨰 인수로 주소 경로를 넣어주지 않으면 모든 요청에서 미들웨어가 실행된다.
  * 에러처리 미들웨어는 인수로 err, req, res, next를 받는 함수이다. 매개변수는 사용하지 않더라도 반드시 네개를 다 넣어야 한다.
  * 이처럼 미들웨어를 통해 요청과 응답에 다양한 기능을 추가할 수 있고, 많은 사람들이 유용한 기능을 패키지로 만들어 놓았다.
  * 다음에는 실무에서 자주 사용되는 패키지를 설치하여 알아본다.
  *  npm i morgan cookie-parser express-session dotenv
  *  dotenv를 제외한 패키지들은 모두 미들웨어이다. dotenv는 process.env를 관리하기 위해 설치한다.
  */