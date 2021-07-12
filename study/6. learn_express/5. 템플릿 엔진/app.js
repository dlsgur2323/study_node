/**
 * 넌적스(nunjucks)는 html 문법을 그대로 사용하되 추가로 자바스크립트 문법을 사용할 수 있다.
 */

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');


dotenv.config();
const indexRouter = require('./routes'); 
const userRouter = require('./routes/user');

const app = express();
app.set('port', 8080);
app.set('view engine', 'njk'); // 넌적스는 뷰 엔진이 html로 해도 되고 njk로 해도 딘다.
app.set('views', path.join(__dirname, 'views'));

nunjucks.configure(app.get('views'), { // 넌적스 설정
    express : app,
    watch : false,
});

app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next)=>{
    res.status(404).send('Not Found');
});          

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=>{    
    console.log('Express Server running on 8080 port')
});