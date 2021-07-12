const express = require('express');
const router = express.Router();
const db = require('../dataSource/database');

module.exports = router;

router.get('/', (req, res)=>{
    db.query('select * from board', function(err, rows, fields) { // 쿼리문을 이용해 데이터를 가져온다.
        if(!err) { // 에러가 없다면
            console.log(rows);
            res.render('index',{ boardList : rows}); // rows 를 보내주자
        } else { // 에러가 있다면?
            console.log("err : " + err);
            res.status(500).send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
        }
      });
});

router.get('/regist', (req, res)=>{
    res.render('regist');
});

router.post('/regist', (req, res)=>{
    const sql = 'INSERT INTO board (BOARD_NO, TITLE, WRITER, CONTENT) VALUES (?,?,?,?)';
    const data= req.body;
    const params = ['1', data.title, data.writer, data.content];
    db.query(sql,params, function(err, rows, fields){
        if(!err) { // 에러가 없다면
            console.log(rows);
            console.log(fields);
            res.redirect('/');
        } else { // 에러가 있다면?
            console.log("err : " + err);
            res.status(500).send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
        }
    })
});

router.get('/detail/:id', (req, res)=>{
    db.query('select * from board where title=?',[req.params.id], function(err, rows, fields) { // 쿼리문을 이용해 데이터를 가져온다.
        if(!err) { // 에러가 없다면
            console.log(rows);
            res.render('detail', rows[0] ); // rows 를 보내주자
        } else { // 에러가 있다면?
            console.log("err : " + err);
            res.status(500).send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
        }
      });
    
});