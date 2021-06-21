/**
 * 워커 스레드를 이용해 소수의 개수를 구하는 작업을 하기 전에
 * 워커 스레드를 이용하지 않고 소수의 개수를 구하는 작업이 얼마나 걸리는 지 실험해보는 예제
 */

const min = 2;
const max = 10000000; // 1000만

const primes = [];

function genertatePrimes(start, range){
    let isPrime = true;
    const end = start + range;
    for(let i = start; i < end; i++){
        for(let j = min; j < Math.sqrt(end); j++){
            if(i !== j && i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
        isPrime = true;
    }
}

console.time('prime');
genertatePrimes(min,max);
console.timeEnd('prime');
console.log(primes.length);