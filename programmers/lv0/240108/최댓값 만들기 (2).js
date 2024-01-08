// 최댓값 만들기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120862

const solution = (numbers) =>
  Math.max(
    numbers
      .sort((a, b) => a - b)
      .slice(0, 2)
      .reduce((a, c) => a * c, 1),
    numbers
      .sort((a, b) => a - b)
      .slice(-2)
      .reduce((a, c) => a * c, 1)
  );

// 다른 사람 풀이 - map 안에 map, map 두 개 - 이런 방법도 있다 정도?
function solution(n) {
  return Math.max(...n.map((a, i) => n.map((b, j) => (i != j ? a * b : -1 / 0))).flat());
}