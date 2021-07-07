/**
 * 익스프레스를 사용하는 이유 중 하나는 라우팅을 깔끔하게 할 수 있다는 점이다.
 * app.get 같은 메서드가 라우터 부분이다. 라우터를 많이 연결하면 app.js가 매우 길어지므로 익스프레스에서는 라우터를 분리할 수 있는 방법을 제공한다.
 * routes 폴더 안에 index.js, user.js 를 작성하고 app.js에서 두 모듈을 라우터로 사용한다.
 */
const express = require('express');
const app = express();
app.set('port', 8080);

const indexRouter = require('./routes'); // /index 는 생략할 수 있다.
const userRouter = require('./routes/user');

app.use('/', indexRouter); // index 라우터는 app.use의 /와 결합하여 GET / 라우터가 되고
app.use('/user', userRouter);  // user 라우터는 app.use와 결합하여 GET /user 라우터가 된다.

app.use((req, res, next)=>{
    res.status(404).send('Not Found');
});
/**
 * 이 미들웨어는 에러처리 미들웨어인데, 주소에 해당하는 라우터가 없을 때 404 코드를 응답하고 있다.
 * express는 기본적으로 404 에러를 처리해주기는 하지만, 웬만하면 404 응답 미들웨어와 에러 처리 미들웨어를 연결해주는 것이 좋다.
 */

app.listen(app.get('port'), ()=>{
    console.log('server has on');
})