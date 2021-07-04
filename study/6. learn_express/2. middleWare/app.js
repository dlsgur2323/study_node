const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

// 설치했던 패키지를 app.use에 사용할땐 매개변수가 res, res, next 등이 없는데, 이는 내부적으로 처리한다.

dotenv.config(); // .env 파일을 읽어서 process.env 속성으로 할당한다. 약간 globals.properties 같은 느낌
const app = express();
app.set('port', 8080);


app.use(morgan('dev')); // 모든 요청에 대해 morgan('dev')를 실행. 이는 요청과 응답에대한 정보를 콘솔에 기록하는 미들웨어이다. dev 말고도 combined, common, short, tiny 등이 있다.
                        // dev 기준으로 GET / 500 7.409ms - 50 이라는 출력이 나타나는데, 이는 각각 [HTTP 메서드] [주소] [HTTP 상태코드] [응답 속도] - [응답 바이트]를 의미한다.
app.use('/', express.static(path.join(__dirname, 'public')));
/**
 * static 은 기본으로 제공되는 미들웨어로 설치할 필요 없이 express 객체에서 꺼내 쓰면 된다.
 * static 은 정적인 파일들을 제공하는라우터 역할을 한다.
 * app.use('요청경로', express.static('실제 경로'));
 * 예제에는 public 이라는 폴더로 지정되어있다. 이러면 public 이라는 폴더 안에 css, js, image 등을 넣으면 브라우저에서 접근할 수 있는 것이다.
 * 만약 public/css/style.css 를  브라우저에서 접근하려면 http://localhost:8080/css/style.css 로 접근할 수 있따.
 */

/**
 * body-parser
 * - 요청의 본문에 있는 데이터를 해석해서 res.body 객체로 만들어주는 미들웨어이다.
 * - 보통은 form 데이터나 ajax 요청의 데이터를 처리한다. 단, 멀티파트(이미지, 동영상, 파일) 데이터는 처리하지 못해서 추후에 나오는 multer 모듈을 사용하면 된다.
 * - express는 4.16.0 버전부터 body-parser 미들웨어의 일부 기능을 내장하였으므로 따로 설치할 필요가 없다.
 * - 단, Raw, Text 형식의 데이터를 추가로 해석해야 할 때는 body-parser를 설치해야 한다.
 * - Raw는 요청의 본문이 버퍼 데이터일 때, Text는 텍스트 데이터일 때 해석하는 미들웨어이다.
 * 
 * npm i body-parser
 */
app.use(express.json);
app.use(express.urlencoded({extended : false}));
/**
 * 요청 데이터의 종류를 간단히 살펴봅시다.
 * - JSON은 JSON 형식의 데이터 전달 방식
 * - URI-encoded는 주소 형식으로 데이터를 보내는 방식으로 주로 form 데이터 전송 방식이다.
 * - uriencoded 메서드를 보면 { extended : false } 라는 옵션이있다. false 면 노드의 querystring 모듈을 사용하고, true 면 qs 모듈을 사용한다.
 * - body-parser를 사용하지 않은 이전엔 POST 와  PUT 요청을 전달받으려면 req.on('data')와 req.on('end')로 스트림을 사용해야 했다.
 * - body-parser를 사용하면 내부적으로 스트림을 처리해 req.body에 추가한다.
  */

/**
 * cookie-parser는 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만든다.
 * app.use(cookieParser('비밀키'));
 * - 위의 미들웨어로 해석된 쿠키들은 req.cookies 객체에 들어간다. 
 * - 첫 번쨰 인수로 비밀키를 넣어줄 수 있다. 서명된 쿠키가 있는 경우, 제공한 비밀 키를 통해 해당 쿠키가 내 서버가 만든 쿠키임을 검증할 수 있다.
 * - 쿠키는 클라이언트에서 위조하기가 쉬우므로 비밀 키를 통해 만들어낸 서명을 쿠키 값 뒤에 붙인다. 서명이 붙으면 쿠키가 name=zerocho.sign 같은 모양이 된다.
 * - 서명된 쿠키는 req.cookies 대신 req.signedCookies 객체에 들어있다.
 * - cookie-parser는 쿠키를 생성할 때 쓰이지는 않는다. 쿠키를 생성/제거 하기 위해서는 res.cookie, res.clearCookie 메서드를 사용해야 한다.
 * - res.cookie(키, 값, 옵션) 형식으로 생성한다. 옵션은 이전에 살펴본 쿠키 옵션과 동일하다.
 * - res.clearCookie(키, 값, 옵션) 형식으로 쿠키를 제거한다. 단, 키와 값 이외에도 옵션들이 정확히 일치해야 지워진다. 단, expires나 maxAge 옵션은 일치할 필요가 없다.
 * - 쿠키 옵션 중에는 signed 라는 옵션이 있는데, 이를 true로 설정하면 쿠키 뒤에 서명이 붙는다. 서명을 위한 비밀키는 cookieParser 미들웨어의 인수로 넣은 값이 된다.
 */
app.use(cookieParser(process.env.COOKIE_SECRET));

/**
 * express-session
 * - 세션관리용 미들웨어이다.
 * - 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 매우 유용하다.
 * - 세션은 사용자별로 req.session 객체 안에 유지된다.
 * - express-session 1.5 버전 이전에는 내부적으로 cookie-parser를 사용하고 있어서 순서가 cookie-parser 미들웨어보다 뒤에 위치해야 했지만, 1.5 버전 이후부터는 상관없게 되었따
 * - express-session은 인수로 세션에 대한 설정을 받는다.
 * - resave : 요청이 올 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지 설정하는 것
 * - saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정하는 것
 * - secret : 세션쿠키에 서명할 비밀키
 * - name : 세션쿠키의 이름. 기본값은 connect.sid
 * - cookie : 세션 쿠키에 대한 옵션. 쿠키 옵션과 같다. 
 * - store 라는 옵션도 있는데, 이는 세션을 메모리에 저장하는 것이 아닌 데이터베이스에 저장하기 위함이다.
 * 
 * - req.session.name = 'zerocho' : 세션에 name : zerocho 를 저장
 * - req.sessionID : 세션 아이디를 가져온다.
 * - req.session.destroy() : 세션 모두 제거
 * - express-session에서 서명한 쿠키의 앞에는 s: 이 붙는다.  실제로는 encodedURIComponent 함수가 실행되어 s%3A가 된다. 이러한 쿠키가 있을 경우 express-session에 의해 암호화된 것이라고 생각하면 된다.
 */
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
    name : 'session-cookie',
}));

app.use((req, res, next)=>{
    console.log('모든 요청에 실행됩니다.');
    next();
});