// 가장 큰 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120899

const solution = (array) => [Math.max(...array), array.indexOf(Math.max(...array))];
