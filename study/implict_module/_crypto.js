/**
 * Crypto 모듈
 *  - 해시와 암호화 기능의 모듈
 *  
 */

var crypto = require('crypto');

// 간단히 해시를 생성하여 암호화/복호화 하는 부분

// 해시 생성
const shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
const output = shasum.digest('hex');

console.log(output);

const key = '비밀'; // 비밀 키값
const input = 'password486'; // 암호화 시킬 문자열

console.log(input);

// 암호화
const cipher = crypto.createCipher('aes192', key); 
cipher.update(input,'utf-8', 'base64');
const cipheredOutput = cipher.final('base64');

console.log(cipheredOutput);

/// 복호화
const decipher = crypto.createDecipher("aes192",key);
decipher.update(cipheredOutput,'base64', 'utf-8');
const decipheredOutput = decipher.final('utf-8');

console.log(decipheredOutput);