// 카운트 업
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

const solution = (start_num, end_num) =>
  Array(end_num - start_num + 1)
    .fill()
    .map((_, i) => i + start_num);

// 다른 사람 풀이 - Array.from()
function solution(start, end) {
    return Array.from({length: end-start+1}, ()=> {return start++});
}