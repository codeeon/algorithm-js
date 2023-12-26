// n개 간격의 원소들
// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  return num_list.filter((v, i) => (i % n === 0 ? v : null));
}

// 다른 사람 풀이 - filter 사용 시, v까지 안 써도 됨
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));
