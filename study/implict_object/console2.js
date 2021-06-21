/**
 * console.dir() 
 * - 객체를 콘솔에 표시할 때 사용한다.
 * - 첫 번째 파라미터는 표시할 객체
 * - 두 번째 파라미터는 옵션
 * - colors 를 true 로 하면 색깔이 입혀져 보기 좋아진다.
 * - depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정한다.
 */


const obj = {
    outside : {
        inside : {
            key : "value"
        }
    }
};
console.dir(obj, {colors:true, depth:2});
console.log("hi");

console.table([{name : "zero", birth : 1994}, {name : 'hero', birth : 1988}]);