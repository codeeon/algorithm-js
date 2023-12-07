// 서울에서 김서방 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12919

const solution = seoul => `김서방은 ${seoul.indexOf('Kim')}에 있다`

// 다른 사람 풀이 - findIndex() - es6
function solution(seoul) {
  return `김서방은 ${seoul.findIndex((s) => s === 'Kim')}에 있다`;
}
