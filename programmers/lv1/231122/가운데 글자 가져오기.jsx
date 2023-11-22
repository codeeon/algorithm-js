// 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

const solution = (s) => {
  const mid = (s.length - 1) / 2;
  return s.length & 1 ? s[mid] : s[Math.floor(mid)] + s[Math.ceil(mid)];
};

// 다른 사람 풀이 - substr
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
