// 카운트 다운
// https://school.programmers.co.kr/learn/courses/30/lessons/181899

const solution = (start, end) =>
  Array(start - end + 1)
    .fill(start)
    .map((v, i) => v - i);

// 다른 사람 풀이 - Array.from()
function solution(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}
