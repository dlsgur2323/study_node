const fs = require('fs').promises;

fs.writeFile(__dirname+'/writeme.txt', '글이 입력됩니다.')
    .then(()=>{
        fs.readFile(__dirname+'/writeme.txt')
            .then((data)=>{
                console.log(data.toString());
            })
            .catch((err)=>{
                console.error(err);
            })
    })
    .catch((err)=>{
        console.error(err);
    });
