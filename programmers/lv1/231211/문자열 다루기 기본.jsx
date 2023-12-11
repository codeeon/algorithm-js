// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

const solution = (s) => !isNaN(Number(s)) && (s.length === 4 || s.length === 6) && !s.includes('e');

// 다른 사람 풀이 - 정규식
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
// 코드의 양은 깔끔할 수도 있지만, 내 풀이가 훨씬 빠름, 가독성도 내 풀이가 나을 듯