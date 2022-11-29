// 파라미터란?
// Parameter(매개변수)
// console.log(값) <-- 소괄호 안에 입력하는 값

// 예제 1번
// 함수내에서 변수처럼 사용 가능.
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
  console.log(sentence);
};

greetings('Hola'); // 함수 호출


// 예제 2번
// 각 이름에 맞게 출력 됨.
function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
}

welcome('코드잇');
welcome('강영훈');
welcome('이윤수');
welcome('손동욱');


// 예제 3번
function printSquare(x) {
  console.log(x * x);
};

printSquare(2);
printSquare(5);
printSquare(6);


// 여러개의 파라미터 
// 함수를 정의할때 목적을 명확히 하여 꼭 필요한 파라미터만 적절하게 사용 권장. 
function 함수이름(파라미터, 파라미터) {
  console.log(파라미터)
};

function printSum(a, b) {
  console.log(a + b);
};

printSum(1,2)