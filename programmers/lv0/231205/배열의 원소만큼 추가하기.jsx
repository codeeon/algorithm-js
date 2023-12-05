// 배열의 원소만큼 추가하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181861

const solution = (arr) => arr.reduce((acc, cur) => acc.concat(Array(cur).fill(cur)), []);

// 다른 사람 풀이 - reduce, spread operator
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

// 다른 사람 풀이 - map, flat()
function solution(a) {
  a.map((v) => Array(v).fill(v)).flat();
}

// 다른 사람 풀이 - flatMap()
function solution(arr) {
  return arr.flatMap((n) => Array(n).fill(n));
}
