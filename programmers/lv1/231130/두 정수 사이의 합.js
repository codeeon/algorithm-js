// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// 틀림
// function solution(a, b) {
//   let result = 0;
//   const [x, y] = [a, b].sort();
//   for (let i = x; i <= y; i++) {
//     result += i;
//   }
//   return result;
// }
// 실패 케이스 있음

// 재시도 - 통과
const solutio = (a, b) => {
  let result = 0;
  const [x, y] = [a, b].sort((a, b) => a - b);
  for (let i = x; i <= y; i++) {
    result += i;
  }
  return result;
};
// 단순히 sort()만 쓰면, 부호 상관 없이 절대값의 크기로 오름차순 나열하는 듯. 따라서 콜백으로 대소 비교 수식을 넣어줌

// 다른 사람 풀이 - 수학적 접근 - 가우스
function solution(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// 다른 사람 풀이 - 반복 - Math를 이용한 최솟값, 최댓값 활용
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// 다른 사람 풀이 - 반복 - 삼항연산자 - 과한 것 같지만 참고는 할 만한 듯
function adder(a, b) {
  var result = a < b ? a : b;
  while (a != b) {
    result += a < b ? ++a : ++b;
  }
  return result;
}
