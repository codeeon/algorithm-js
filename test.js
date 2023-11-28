// 배열 메소드 - Array() constructor, fill, map, filter, reduce
// const solution3 = (n) => {
//   return Array(n)
//     .fill()
//     .map((_, i) => i + 1);
// };

// console.log(Array(10));
// console.log(Array(10).fill());
// console.log(
//   Array(10)
//     .fill()
//     .map((_, i) => i)
// );

// console.log(solution3(10));

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(4));

// console.log(16 & 1, 16 & 2, 16 & 3, 16 & 5, 16 & 16)
// // 0, 0, 0, 0, 16
// console.log(15 & 1, 15 & 2, 15 & 3, 15 & 5, 15 & 15, 15 & 16)
// // 1, 2, 3, 5, 15, 0

// console.log(0 == false)
// console.log(0 === false)

// 수열과 구간 쿼리 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181924

const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];

// arr[queries[0][0]] = arr[queries[0][1]];
// console.log(arr);

const newArr = arr.map((v, i) => [i, v]);
for (let x = 0; x < queries.length; x++) {
  const [a, b] = queries[x];
  console.log(a, b);
  newArr[a][0] = b;
  newArr[b][0] = a;
  console.log(newArr);
  newArr.sort();
}
console.log(newArr);

const solution = (arr, queries) => {
};
