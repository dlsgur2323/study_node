/**
 * 쿼리의 객체를 문자열로 변환하거나 문자열을 쿼리 객체로 변환하는 기능을 수행하는 모듈
 * 사용하는 함수
 *  - stringify() : 쿼리 객체를 문자열로 변환
 *  - parse() : 쿼리 문자열을 쿼리 객체로 변환
 */

var url = require('url'); 
var qs = require('querystring');

var parsedURL = url.parse('https://www.google.com/search?q=node.js&ei=VFrAYNy1HZP1wAOnzKbIAQ&oq=node.js&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEIMBMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOggIABCwAxDNAlC_CVi-C2D_DGgBcAB4AIABWYgB9AGSAQEzmAEAoAEBqgEHZ3dzLXdpesgBAsABAQ&sclient=gws-wiz&ved=0ahUKEwjcr86S8YnxAhWTOnAKHSemCRkQ4dUDCA4&uact=5');

var objQuery = qs.parse(parsedURL.query);
var strQuery = qs.stringify(objQuery);

console.log("objQuery : ", objQuery);
console.log(`strQuery : ${strQuery}`);