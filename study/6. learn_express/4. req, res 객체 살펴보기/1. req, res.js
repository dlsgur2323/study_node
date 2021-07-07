/**
 * express의 req, res 객체는 http 모듈의 req, res 객체를 확장한 것이다.
 * 따라서 기존의 http 모듈 메서드도 사용할 수 있고, 익스프레스가 추가한 메서드나 속서을 사용할 수도 있다.
 * 다만 워낙 express 메서드가 편하다보니 잘 쓰지는 않는다.
 * 
 * 익스프레스에는 많은 속성과 메서드가 있지만, 자주 쓰이는 것 위주로만 알아보자
 * 
   req 객체

   1. req.app : req 객체를 통해 app 객체에 접근할 수 있다. req.app.get('port') 와 같은 식으로 사용 가능
   2. req.body : body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체
   3. req.cookies : cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
   4. req.id : 요청의 ip 주소가 담겨있다.
   5. req.params : 라우트 매개변수에 대한 정보가 담긴 객체
   6. req.query : 쿼리스트링에 대한정보가 담긴 객체
   7. req.signedCookies : 서명된 쿠키들은 req.cookies 대신 여기에 담겨있다.
   8. req.get(헤더이름) : 헤더의 값을 가져오고 싶을 때 사용하는 메서드


   res 객체

   1. res.app : req.app 처럼 res 객체를 통해 app 객체에 접근할 수 있다.
   2. res.cookie(키, 값, 옵션) : 쿠키를 설정하는 메서드
   3. res.clearCookie(키, 값, 옵션) : 쿠키를 제거하는 메서드
   4. res.end() : 데이터 없이 응답을 보낸다.
   5. res.json(JSON) : JSON 형식의 응답을 보낸다.
   6. res.redirect(주소) : 해당 주소로 리다이렉트 시킨다.
   7. res.render(뷰, 데이터) : 템플릿 엔진을 렌더링해서 응답한다.
   8. res.send(데이터) : 데이터와 함께 응답을 보낸다. 데이터는 문자열일 수도 있고, HTML일 수도 있고, 버퍼일 수도 있고, 객체나 배열일 수도 있다.
   9. res.sendFile(경로) : 경로에 위치한 파일을 응답한다.
   10. res.set(헤더, 값) : 응답의 헤더를 설정한다.
   11. res.status(코드) : 응답시의 HTTP 상태 코드를 지정한다. 

   req나 res 객체의 메서드는 체이닝을 지원하는 경우가 많다.
   res
      .status(201)
      .cookie('test', 'test')
      .redirect('/admin');
 */