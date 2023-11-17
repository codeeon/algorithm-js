// 배열 원소의 길이
// https://school.programmers.co.kr/learn/courses/30/lessons/120854

const solution = (strlist) => strlist.map((a) => a.length);

// forEach 사용, map의 열화판 느낌
function solution2(strlist) {
  var answer = [];
  strlist.forEach((el) => answer.push(el.length));
  return answer;
}

// reduce 사용, 배열(return)과 acc에 스프레드 연산자를 활용하여 배열로 담았고, 초기값([0] 원본으로 들어감)을 제외하기 위해 0이 아닌 빈 배열을 넣었다.(spread operator 때문)
function solution3(strlist) {
  return strlist.reduce((a, b) => [...a, b.length], []);
}
