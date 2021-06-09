/**
 * Util 모듈
 *  - 유용한 함수들이 많다.
 *  - 많이 살펴보길
 * 
 *  사용되는 함수들
 *  - format() : 파라미터로 입력한 문자열을 형식에 맞게 조합해 반환한다.
 *  - debug() : 프로그램의 실행을 멈추고 입력값을 출력한다.
 *  - log() : timestamp 시간과 함께 메시지를 출력한다.
 */

var util = require('util');

const formatData = util.format('%d%s %d%s %s',5, '월', 5, '일', '어린이날');

console.log(formatData);
