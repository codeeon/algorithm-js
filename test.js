// 배열 메소드 - Array() constructor, fill, map, filter, reduce
const solution3 = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => i + 1);
};

console.log(Array(10));
console.log(Array(10).fill());
console.log(
  Array(10)
    .fill()
    .map((_, i) => i)
);

console.log(solution3(10));
