/**
    미들웨어의 특성을 정리해보자.
    1. 미들웨어는 req, res, next를 매개변수로 갖는 함수로서 app.use나 app.get, app.post 등으로 장착한다. 특정한 주소의 요청에만 실행되게 하려면 첫 번째 인수로 주소를 넣으면 된다.
    2. 미들웨어는 한번에 여러개를 장착할 수도 있다.
    ex)
    app.use(
        morgan('dev'),
        express.static('/', path.join(__dirname, 'public')),
        express.json(),
        express.urlencoded({extended : false}),
        cookieParser(process.env.COOKIE_SECRET),
    );
        - 위의 미들웨어들은 내부적으로 next를 호출하고 있으나 그렇지 않은 경우에는 next를 호출해줘야 다음 미들웨어로 넘어간다.
    3. next를 호출하지 않는 미들웨어는 res.end 나 res.send로 응답을 보내야 한다.
    ** static 과 같이 파일을 제공하는 미들웨어는 next 대신 res.send 메서드로 응답을 보낸다. 따라서 정적 파일을 제공하는 경우 그 아래의 미들웨어들은 작동하지 않는다.

    4. next에는 인수를 넣을 수도 있다. 인수를 넣으면 특수한 동작을 하는데, 예를 들어 route 라는문자열을 넣으면 다음 라우터의 미들웨어로 바로 이동하고, 그 외의 인수를 넣으면 에러 처리 미들웨어로 이동한다.
        - 에러 처리 미들웨어로 이동할 때 인수는 에러 처리 미들웨어의 err 매개변수가 된다.
    
    5. 미들웨어 간에 데이터를 전달할 수도 있다. 세션을 사용한다면 세션이 유지되는 동안 어디서든 접근할 수 있지만, 수동으로 지워줘야 한다는 단점이 있다.
        - 만약 요청이 끝날 때까지만 데이터를 유지하고 싶다면 req 객체에 데이터를 넣으면 된다.
        ex)
            app.ues((req, res, next)=>{
                req.data = '데이터 넣기';
                next();
            }, (req, res, next)=>{
                console.log(req.data);
                next();
            });
        - 속성명은 자유롭게 지을 수 있으나, 다른 미들웨어에서 사용하는 객체와 같은 이름으로 쓰지 않게 조심해야 한다.

    6. 미들웨어를 사용할 때 유용한 패턴 한 가지. 미들웨어 안에 미들웨어를 넣는 방식이다. 다음 예시는 서로 같은 기능을 한다.
        ex)
            app.use(morgan('dev'));
            // 또는
            app.use((req, res, next)=>{
                morgan('dev')(req, res, next);
            });
        - 이러한 방식이 유용한 이유는 기존의 미들웨어를 확장할 수 있기 때문이다. 예를 들면 다음과 같이 분기 처리를 할 수 있다.
        ex)
            app.use((req, res, next)=>{
                if (process.env.NODE_ENV === 'production'){
                    morgan('combined')(req, res,next);
                } else {
                    morgan('dev')(req, res, next);
                }
            });
        - 위 예제는 if 문을 통해 수행할 미들웨어를 분기로 나누고 있따.

    
 */