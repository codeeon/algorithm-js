// 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

const solution = (phone_number) => '*'.repeat(phone_number.length - 4) + phone_number.substr(-4);

// 다른 사람 풀이 - 정규식
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}

// 다른 사람 풀이 - repeat, slice
function hide_numbers(s) {
  var result = '*'.repeat(s.length - 4) + s.slice(-4);
  return result;
}
// substr는 옛날 메서드, 쓰는 것을 지양하고, substring과 slice가 있는데 음수 인덱스 적용이 되는 slice를 쓰는 것이 좋음

// 다른 사람 풀이 - 스프레드 연산자를 통한 배열화, fill, join
function solution(n) {
  return [...n].fill('*', 0, n.length - 4).join('');
}
