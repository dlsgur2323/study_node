const express = require('express');
const ejs = require('ejs');
const path = require('path');


const app = express();
const port = 8080;
const db = require('./dataSource/database');
db.connect();

app.set('view engine', 'ejs'); // view 엔진이 ejs 임을 표기
app.set('views', path.join(__dirname,'/views')); // views 경로

app.use(express.json({limit : '10mb'}));
app.use(express.urlencoded({extended : false, limit:'10mb'}));

const indexRouter = require('./routes');

app.use('/', indexRouter);

app.use((req, res, next)=>{
    res.status(404).send('Not Found');
});


app.listen(port, ()=>{
    console.log('server has on');
})