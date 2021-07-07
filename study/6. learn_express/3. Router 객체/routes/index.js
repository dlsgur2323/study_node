const express = require('express');
const router = express.Router();
router.get('/', (req,res)=>{
    res.send('Hello, Express');
});
module.exports = router;

/**
 * 이전에 next 함수에 다음 라우터로 넘어가는 기능에 대해서 언급한 적이 있다. 그것이 바로 next('route') 이며, 라우터에 연결된 나머지 미들웨어를 건너뛰고 싶을 때 사용한다.
 */
router.get('/', (req, res, next)=>{
    next('route');
}, (req, res, next)=>{
    console.log('실행되지 않습니다.')
    next();
}, (req, res, next)=>{
    console.log('실행되지 않습니다.')
    next();
});
router.get('/', (req, res, next)=>{
    console.log('실행됩니다.');
    res.send('Hello, Express');
});

/**
 * 위 예제처럼 같은 주소에 대해 라우터를 여러 개 만들어도 된다.
 * 라우터 주소에는 정규표현식을 비롯한 특수 패턴을 사용할 수 있다. 그 중 자주 쓰이는 패턴이 하나 있는데, 라우트 매개변수라고 불리는 패턴이다.
 */
router.get('/user/:id', function(req, res){
    console.log(req.params, req.query);
});
/**
 * 주소에 :id 가 있는데, /user/ 이후 :id 자리에 어떤 값이든 들어가면 이 라우터가 처리하게 된다.
 * 그리고 :id 자리에 적힌 값은 req.params 객체 안에 들어가는데, 
 * :id 면 req.params.id 로  :type이면 req.params.type 으로 조회할 수 있다.
 * 
 * 다만,  이 패턴 사용시 주의해야 할 점이 있다. 바로 일단 라우터보다 뒤에 위치해야 한다는 점이다.
 */

router.get('/user/:id', (req,res)=>{
    console.log("얘만 실행됩니다.");
});
router.get('/user/like', function(req,res){
    console.log('전혀 실행되지 않습니다.');
});

/**
 * 주소줄에는 쿼리스트링이 함께 들어갈 수도 있다. 쿼리스트링의 키:값 정보는 req.query 객체 안에 들어 있다.
 * 예를들어 /user/123?limit=5&skip=10 이라는 주소의 요청이 들어오면 req.params와 req.query 객체는 다음과 같다.
 * 
 */
req.params => {id : '123'}
req.query => {limit : '5', skip : '10'}

/**
 * 다음과 같이 주소는 같지만 메서드가 다른 코드가 있을 때, router.route()로 이를 하나의 덩어리로 줄일 수 있다.
 */
router.get('/abc', (req, res)=>{
    res.send('GET /abc');
});
router.post('/abc', (req, res)=>{
    res.send('POST /abc');
});

//다음과 같이 관련 있는 코드끼리 묶여 있어 더 보기 좋아진다.
router.route('/abc')
    .get((req, res)=>{
        res.send('GET /abc');
    })
    .post((req,res)=>{
        res.send('POST /abc');
    });
