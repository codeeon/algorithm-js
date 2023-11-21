// 짝수와 홀수
// https://school.programmers.co.kr/learn/courses/30/lessons/12937

const solution = (num) => (num & 1 ? 'Odd' : 'Even');
// 지난번에 알게 된 앰퍼샌드로 풀어보았다.
// 0과 0이외의 수를 불리언으로 활용

// console.log( 2 & 1, 3 & 1, 4 & 4, 5 & 5, 16 & 4, 16 & 2, 16 & 0, 16 & 16)
// 0(false) 1(true) 4 5 0 0 0 16 //
// 앰퍼샌드 하나의 연산을, 짝홀수 이외에 어떻게 동작하는지 알아보자.

// 0과 1을 불리언으로 활용
function solution(num) {
  return num % 2 ? 'Odd' : 'Even';
}
