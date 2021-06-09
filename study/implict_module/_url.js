var url = require("url");

/**
 * url 모듈
 *  - URL 문자열을 객체로 만들거나 URL 객체를 문자열로 변환
 *  - 파싱과 조합을 사용하여 URL과 관련된 정보를 가져올 수 있음/
 * 
 * 사용하는 함수들
 *  - parse() : URL 문자열을 URL 객체로 변환하여 리턴한다.
 *  - format() : url 객체를 URL 문자열로 변환하여 리턴한다.
 *  - resolve() : 매개변수를 조합하여 URL 문자열을 생성하여 리턴한다.
 */

// 구글에 node.js 라고 검색한 주소를 파싱
var parsedURL = url.parse('https://www.google.com/search?q=node.js&ei=VFrAYNy1HZP1wAOnzKbIAQ&oq=node.js&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEIMBMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOggIABCwAxDNAlC_CVi-C2D_DGgBcAB4AIABWYgB9AGSAQEzmAEAoAEBqgEHZ3dzLXdpesgBAsABAQ&sclient=gws-wiz&ved=0ahUKEwjcr86S8YnxAhWTOnAKHSemCRkQ4dUDCA4&uact=5');

console.log(parsedURL);

var formatedURL = url.format(parsedURL);

console.log(formatedURL);