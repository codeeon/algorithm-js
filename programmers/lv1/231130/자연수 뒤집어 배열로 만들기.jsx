// 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

const solution = (n) =>
  (n + '')
    .split('')
    .reverse()
    .map((a) => a - 0);

// 다른 사람 풀이 - 숫자
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
// 12345를 기준으로,
// arr = [5], n = 1234
// arr = [5, 4], n = 123
// ... ...
