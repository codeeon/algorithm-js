// 수열과 구간 쿼리 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181924

const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];

const solution = (arr, queries) => {
  arr[queries[0][0]] = arr[queries[0][1]];
  console.log(arr);
};
