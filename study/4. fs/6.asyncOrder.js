 // 비동기 방식으로 순서를 지키려면 아래와 같이 하면 된다.
 
const fs = require('fs');

console.log('start');
fs.readFile(__dirname+"/readme2.txt", (err,data)=>{
    if(err){
        throw err;
    }
     console.log('1번째',data.toString());
     fs.readFile(__dirname+"/readme2.txt", (err,data)=>{
        if(err){
            throw err;
        }
        console.log('2번째',data.toString());
        fs.readFile(__dirname+"/readme2.txt", (err,data)=>{
            if(err){
                throw err;
            }
            console.log('3번째',data.toString());
            console.log('end');
        });
    });
 });

 // 이른바 콜백지옥이 이어지지만 순서를 잘 지켜진다.
 // 콜백지옥은 promise 나 async/await으로 어느정도 해결할 수 있다.
 