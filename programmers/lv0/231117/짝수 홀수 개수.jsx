// 짝수 홀수 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120824

const solution = (num_list) => [num_list.filter((a) => a % 2 === 0).length, num_list.filter((a) => a % 2 === 1).length];

// for of 사용
function solution(num_list) {
  var answer = [0, 0];
  for (let a of num_list) {
    answer[a % 2] += 1;
  }
  return answer;
}

// reduce 사용
function solution(list) {
  return list.reduce((acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc), [0, 0]);
}
