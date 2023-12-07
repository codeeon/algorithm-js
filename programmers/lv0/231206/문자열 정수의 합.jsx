// 문자열 정수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181849

const solution = (num_str) => num_str.split('').reduce((a, c) => a + +c, 0);

// 다른 사람 풀이 - 스프레드 연산자, reduce
function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}
