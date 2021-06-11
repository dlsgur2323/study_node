/**
 * Crypto 모듈
 *  - 해시와 암호화 기능의 모듈
 *  
 */

var crypto = require('crypto');

/**
 * 단방향 암호화
 *  - 복호화 할 수 없는 암호화
 *  - 해시 함수라고도 한다.
 */

/**
 * 기본
 *  - createHash(알고리즘) : 사용할 해시 알고리즘을 넣는다. ex) md5, sha1, sha256, sha512
 *  - update(문자열) : 암호화 할 문자열을 넣는다.
 *  - digest(인코딩) : 인코딩할 알고리즘을 넣는다. base64, hex, latin1 (주로 base64가 가장 짧아서 애용된다.) 암호화 된 문자열을 반환한다.
 */
console.log('base64 : ' , crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex : ' , crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64 : ' , crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/**
 * 현재는 sha512로도 충분하지만, 더 강력한 알고리즘도 있다.
 * pbkdf2, bcrypt, scrypt
 * pbkdf2는 노드에서도 지원한다.
 * pbkdf2는 간단하게 말하면, 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것이다.
 */

crypto.randomBytes(64, (err,buf) => {
    const salt = buf.toString('base64');
    console.log("salt : ", salt);
    crypto.pbkdf2("비밀번호", salt, 100000, 64, 'sha512', (err,key)=> {
        console.log("password", key.toString('base64'));
    });
});

/**
 * 1. randomBytes 메서드로 64바이트 길이의 랜덤 문자열을 만든다. 이것이 salt 문자열이 된다.
 * 2. pbkdf2 함수에 순서대로, 암호화 할 문자열, salt, 반복 횟수, 바이트 길이, 해시 알고리즘을 넣는다.
 * 3. 암호화된 문자열의 결과는 key로 나온다.
 * 
 *  - 반복횟수에 따라서 동작 시간이 결정된다.
 *  - crypto.randomBytes나 pbkdf2는 내부적으로 멀티 스레딩으로 동작한다. 이러한 함수들이 몇몇 있다. 나중에 알아보자
 *  
 *  - salt가 랜덤 문자열이기 때문에 실행 할 때마다 값이 달라진다.
 *  - 이 salt 값을 잘 보관하고 있어야 비밀번호도 찾을 수 있다.
 * 
 *  - pbkdf2는 다른 두 방식 보다 취약하다. 
 */


/**
 * 양방향 암호화
 * 
 * 암호화 된 문자열을 복호화 할 수 있으며, 키라는 것이 사용된다.
 * 대칭형 암호화는 암호화 키와 복호화 키가 같고
 * 비 대칭형 암호화는 암호화 키와 복호화 키가 다르다.
 */

/**
 * 양방향 대칭형 암호화
 * 
 *  - crypto.createCipheriv(알고리즘, 키, iv)
 *  - cipher.update(문자열, 인코딩 , 출력 인코딩) : 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣습니다.
 *  - cipher.final(출력 인코딩) : cipher에 담긴 암호화가 결과물로 반환됩니다.
 * 
 *  - crypto.createDeCipheriv(알고리즘, 키, iv) : 복호화할 때 사용합니다. 암호화할 때의 알고리즘과 키, iv를 동일하게 넣어야 합니다.
 *  - decipher.update(문자열, 인코딩 , 출력 인코딩) : 복호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣습니다. 암호화 당시와 같아야합니다.
 *  - decipher.final(출력 인코딩) : decipher에 담긴 복호화가 결과물로 반환됩니다.
 * 
 */



const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf-8', 'base64');
result += cipher.final('base64');
console.log("암호화 : ", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf-8');
console.log('복호화 : ', result2);
