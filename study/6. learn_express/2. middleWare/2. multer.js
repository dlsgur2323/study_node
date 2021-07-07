/**
 * multer는 이미지, 동영상 등을 비롯한 여러 가지 파일을 멀티파트 형식으로 업로드할 때 사용하는 미들웨어입니다.
 * 멀티파트 형식이란 enctypeDl multipart/form-data인 폼을 통해 업로드하는 데이터의 형식을 의미합니다.
 */

<form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="image"/>
    <input type="text" name="title" />
    <button type="submit">업로드</button>
</form>

/**
 * 위와 같은 폼 형식이 멀티파트 폼 형식이다.
 * multer 패키지 안에는 여러 종류의 미들웨어가 들어있다. 미들웨어를 살펴보기 전에 기본적인 설정부터 알아보자.
 * 
 */

const multer = require("multer");

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, "uploads/");
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext)+ Date.now()+ ext);
        },
    }),
    limits : { fileSize : 5 * 1024 * 1024},
});

/**
 * multer 함수의 인수로 storage와 Limits를 인수로 넣는다.
 * storage의 속성에는 destination와 filename을 설정하는데, dsetination은 저장할 위치, filename은 저장할 파일 이름을 설정한다.
 * destination과 filename 함수의 req에는 요청에 대한 정보가, file에는 파일에 대한 정보가 있다. done은 함수로, 첫 번째 인수는 에러를, 두 번째 인수에는 실제 경로나 파일 이름을 넣어준다.
 * req나 file의 데이터를 가공해서 done으로 넘기는 형식이다.
 * 현재 설정상으로는 uploads 라는 폴더에 파일명 + 현재시간.확장자 인 파일명으로 업로드 하고 있다. 
 * limits 속성으로는 업로드에 대한 제한 사항을 설정할 수 있다. 
 * 다만, 위 설정을 실제로 활용하기 위해서는 서버에 uploads 폴더가 존재해야 한다. 없다면 직접 만들어주거나 fs모듈을 사용해서 서버를 시작할 때 생성한다.
 */
const fs = require('fs');

try {
    fs.readdirSync('uploads'); //해당 디렉토리를 읽어라
} catch (error) { // 없어서 에러가 생기면
    console.error('uploads 폴더가 없어 uploads폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

/**
 * 설정이 끝나면 upload 변수가 생기는데, 여기에 다양한 종류의 미들웨어가 들어있다.
 * 먼저 파일을 하나만 업로드하는 경우에는 single 미들웨어를 사용한다.
 */

app.post('/upload', upload.single('image'), (req, res)=>{
    console.log(req.file, req.body);
    res.send('ok');
})

/**
 * 위 예시 처럼 라우터 미들웨어 앞에 single 미들웨어를 넣어두면, multer 설정에 따라 파일 업로드 후 req, file객체가 생성됩니다. 인수는 input 태그의 name이나 폼 데이터의 키와 일치하게 넣으면 됩니다.
 * 업로드 성공 시 결과는 req.file 객체 안에 들어있다. req.body에는 파일이 아닌 데이터인 title이 들어 있다.
 * req.file 객체는 다음과 같이 생겼다.
 */

{
    fieldname : 'img',
    originalname : 'nodejs.png',
    encoding : '7bit',
    mimetype : 'image/png',
    destination : 'uploads',
    filename : 'nodejs1514197844339.png',
    path : 'uploads\\nodejs15141978~~ .png',
    size : 53357
}

/**
 * 여러 파일을 업로드 하는 경우에는 input file 태그에 multiple을 쓰면 된다.
 * 미들웨어는 single 대신 array로 교체한다.
 */

app.post('/upload', upload.array('many'), (req, res)=>{
    console.log(req.files, req.body);
    res.send('ok');
});

/**
 * 업로드 결과도 req.file 대신 req.files 배열에 들어있다.
 */

/**
 * 파일을 여러 개 업로드하지만 input 태그나 폼 데이터의 키가 다른 경우에는 fieds 미들웨어를 사용한다.
 */
app.post('/upload',upload.fields([{name:'image1'}, {name:'image2'}]), (req, res)=>{
    console.log(req.files, req.body);
    res.send("ok");
})
/**
 * 업로드 결과도 req.files.image1, req.files.image2에 각각 들어있다.
 */

/**
 * 특수한 경우이지만 파일을 업로드하지 않고 멀티파트 형식으로 업로드하는 경우가 있다. 그럴때는 none 미들웨어를 사용한다.
 */
app.post('/upload', upload.none(), (req, res)=>{
    console.log(req.body);
    res.send("ok");
})

