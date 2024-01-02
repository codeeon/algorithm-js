// 홀수 vs 짝수
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

const solution = (num_list) =>
  Math.max(
    num_list.filter((_, i) => i % 2 === 1).reduce((a, c) => a + c, 0),
    num_list.filter((_, i) => i % 2 === 0).reduce((a, c) => a + c, 0)
  );

// 다른 사람 풀이 - map
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}

// 다른 사람 풀이 - forEach
function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.forEach((x, i) => (i % 2 == 0 ? (even += x) : (odd += x)));

  return Math.max(odd, even);
}

// 다른 사람 풀이 - filter, reduce를 이용한 함수 생성
function solution(num_list) {
  const sum = (condition) => num_list.filter((_, index) => condition(index)).reduce((acc, cur) => acc + cur, 0);

  const oddSum = sum((index) => index % 2 === 0);
  const evenSum = sum((index) => index % 2 === 1);

  return oddSum < evenSum ? evenSum : oddSum;
}

// 다른 사람 풀이 - 내가 풀려고 했는데 실패한 것, 이제 보니까 배열을 항상 풀로 (두 자리 전부) 넣어줘야 했나 보다.
function solution(num_list) {
  return Math.max(...num_list.reduce(([o, e], c, i) => (i % 2 ? [o + c, e] : [o, e + c]), [0, 0]));
}

// 다른 사람 풀이 - 생각보다 간결한 반복문
function solution(n) {
  let o = (e = 0);
  for (let i in n) i % 2 == 0 ? (o += n[i]) : (e += n[i]);
  return Math.max(o, e);
}

// 다른 사람 풀이 - 이것도 내가 하려고 했던 건데, 일단 굳이 filter를 쓸 필요 없었음
function solution(num_list) {
  var answer = 0;
  return Math.max(
    num_list.reduce((p, c, idx) => p + (idx % 2 == 0 ? c : 0), 0),
    num_list.reduce((p, c, idx) => p + (idx % 2 != 0 ? c : 0), 0)
  );
}
