// 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

const solution = (a, b) => a.map((v, i) => v * b[i]).reduce((a, c) => a + c, 0);

// 다른 사람 풀이 - reduce only (reduce idx), 굳이 map까지 쓰지 않아도 됨
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
