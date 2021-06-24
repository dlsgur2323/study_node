/**
 * 파일을 읽거나 쓰는 방식에는 버퍼와 스트림이 있다.
 * 인터넷에서 영상을 로딩할 때는 버퍼링한다고 하고, 영상을 실시간으로 볼 때는 스트리밍한다고 한다.
 * 
 * 버퍼링은 재생할 수 있을 때까지 데이터를 모으는 것이고, 스트리밍은 영상 데이터를 조금씩 조금씩 전송하는 동작이다
 * 물론 스트리밍 하는 과정에서 버퍼링을 할 수도 있다. 전송이 느리면 화면을 보내기까지 최소한의 데이터를 모아야 하고, 전송이 빨라도 미리 전송받은 데이터를 저장해 둘 공간이 필요하기 때문이다.
 * 노드의 버퍼와 스트림도 비슷한 개념이다.
 * readFile 메서드를 사용할 때 읽었던 데이터를 버퍼 형식으로 출력했는데, 이는 파일을 읽을 때 메모리에 파일 크기만큼 공간을 마련해두고
 * 파일데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록 하는 것이다. 이때 메모리에 저장된 데이터가 바로 버퍼이다.
 * 
 * 노트에는 그 버퍼를 직접 다룰 수 있는 클래스가 있다. 바로 Buffer 이다.
 * 
 */

const buffer = Buffer.from('저를 버퍼로 바꿔보세요'); // 문자열을 버퍼로 변환한다.
console.log('from() :',buffer); // 버퍼를 출력
console.log('length :',buffer.length); // 버퍼의 길이를 출력 
console.log('toString :',buffer.toString()); // 버퍼를 문자열로 변환하여 출력

const array = [Buffer.from('띄엄'),Buffer.from('띄엄'),Buffer.from('띄어쓰기')]; // 버퍼 배열
const buffer2 = Buffer.concat(array); // 버퍼 배열을 합친다.
console.log('concat() :', buffer2.toString()); // 합쳐진 버퍼를 출력한다.

const buffer3 = Buffer.alloc(5); // 5바이트 길이의 비어있는 버퍼를 생성한다.
console.log('alloc() :', buffer3); // 출력
