// 짝수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120831

// const { array } = require('prop-types');
// const { useDebugValue } = require('react');

const solution = (n) => {
  let a = 0;
  for (let i = 0; i <= n; i += 2) {
    a += i;
  }
  return a;
};

// 수열
const solution2 = (n) => {
  let half = Math.floor(n / 2);
  return half * (half + 1);
};

const solution3 = (n) => {
  return ((Math.floor(n / 2) * (2 + n)) / 2) | 0; // single vertical bar
};
// single vertical bar -> 이진수로 변환 후 각 자리 버림 합을 한 후 그에 대한 결과값을 리턴?
// bit연산자 |, & -> 짝수/홀수에 씀

// 배열 메소드 - Array() constructor, fill, map, filter, reduce
const solution4 = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
};
// Array(n) -> n개의 empty items를 가진 배열 생성 (길이만 n인 빈 배열)
// .fill() -> 배열을 채움 파라미터는 array.fill(value, start, end) 비어뒀으니 undefined가 채워짐 (현재 배열의 undefined가 n개)
// .map((_, i) => i + 1) -> map의 콜백함수에 (value, index)가 들어가는데, value는 현재 undefined이고, index를 활용함. 1부터 시작해야 해서 리턴할 때 index에 1을 더해줌.
// .filter( v => v % 2 === 0) -> 짝수일 경우만 filter로 필터링
// .reduce((acc, cur) => acc + cur, 0) -> reduce의 콜백함수 인자 (acc, cur, idx, src-원본배열), 초기값을 0으로 확실히 표현해줌(생략 가능), 배열의 모든 수를 더함
