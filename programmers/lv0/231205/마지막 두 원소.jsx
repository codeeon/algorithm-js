// 마지막 두 원소
// https://school.programmers.co.kr/learn/courses/30/lessons/181927

const solution = (num_list) => {
  num_list.push(num_list[num_list.length - 1] > num_list[num_list.length - 2] ? num_list[num_list.length - 1] - num_list[num_list.length - 2] : num_list[num_list.length - 1] * 2);
  return num_list;
};

// 다른 사람 풀이 - reverse
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

// 다른 사람 풀이 - at
const solution = (n) => [...n, n.at(-1) > n.at(-2) ? n.at(-1) - n.at(-2) : n.at(-1) * 2];

// 다른 사람 풀이 - slice (코드 간결화)
function solution(num_list) {
  const [sec, last] = num_list.slice(-2);
  last > sec ? num_list.push(last - sec) : num_list.push(last * 2);
  return num_list;
}
