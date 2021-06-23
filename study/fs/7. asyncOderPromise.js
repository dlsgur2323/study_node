// promise 를 사용한 순서대로 진행되는 비동기
const fs = require('fs').promises;

console.log('start');
fs.readFile(__dirname+'/readme2.txt')
    .then((data)=>{
        console.log('1번째',data.toString());
        return fs.readFile(__dirname+'/readme2.txt');
    })
    .then((data)=>{
        console.log('2번째',data.toString());
        return fs.readFile(__dirname+'/readme2.txt');
    })
    .then((data)=>{
        console.log('3번째',data.toString());
        console.log('end');
    })
    .catch((err)=>{
        console.error(err);
    });