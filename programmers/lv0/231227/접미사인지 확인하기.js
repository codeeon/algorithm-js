// 접미사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181908

const solution = (my_string, is_suffix) => (my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0);

// 다른 사람 풀이 - endWith
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
