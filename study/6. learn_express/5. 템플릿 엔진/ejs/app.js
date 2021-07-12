/**
 * 뭔가 이상한거 같아서 그냥 템플릿엔진은 혼자 ejs 로 공부하겠다.
 */
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 8080;

app.set('view engine', 'ejs'); // view 엔진이 ejs 임을 표기
app.set('views', path.join(__dirname,'/views')); // views 경로

app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : 'session_secret',
    cookie : {
        httpOnly : true,
        secure : false,
    },
    name : 'session-cookie',
}));

app.use((req, res, next)=>{
    res.locals.session = req.session; // 이 방법으로 어떤 뷰에서든 session 이라는 변수에 접근할 수 있다.
    next();
});

app.get('/', (req, res) => {
    req.session.isThere = 'yes';
    res.render('index', {data : '세션이 있습니까?'});
})
app.get('/no', (req, res) => {
    res.render('index', {data : '세션이 있습니까?'});
})

app.listen(port, ()=>{
    console.log('server has on');
})