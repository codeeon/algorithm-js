// 길이에 따른 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/181879

const solution = (num_list) => (num_list.length >= 11 ? num_list.reduce((a, c) => a + c, 0) : num_list.reduce((a, c) => a * c, 1));

// 다른 사람 풀이 - 같은 방식이지만 reduce의 콜백함수 안에 삼항연산자 사용으로 코드 양을 줄임 - 가독성이 좋은 코드인지는 모르겠음
function solution(n) {
  return n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
}
