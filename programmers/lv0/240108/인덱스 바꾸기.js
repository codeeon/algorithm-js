// 인덱스 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/120895

const solution = (my_string, num1, num2) =>
  [...my_string]
    .map((v, i) => (i === num1 ? [num2, v] : i === num2 ? [num1, v] : [i, v]))
    .sort((a, b) => a[0] - b[0])
    .map((v) => v[1])
    .join('');

// 다른 사람 풀이 - split, 구조분해할당
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}