// 문자열 뒤의 n글자
// https://school.programmers.co.kr/learn/courses/30/lessons/181910

const solution = (my_string, n) => my_string.slice(my_string.length - n, my_string.length);

// 다른 사람 풀이 - -n으로 가능, -1을 곱해주는 방법으로도 이용 가능
function solution(my_string, n) {
  var answer = my_string.slice(-1 * n);
  return answer;
}

// 다른 사람 풀이 - substring
function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}

// 다른 사람 풀이 - slice에 파라미터를 싱글로 쓰면 끝 인덱스가 아니라 시작 인덱스가 들어가는군
function solution(my_string, n) {
  my_string.slice(my_string.length - n);
}
