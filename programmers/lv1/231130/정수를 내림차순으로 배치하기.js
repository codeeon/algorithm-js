// 정수를 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

const solution = (n) =>
  (n + '')
    .split('')
    .map((v) => v - 0)
    .sort((a, b) => b - a)
    .join('') - 0;
// .sort((a, b) => b - a) === .reverse()

// 다른 사람 풀이 - 숫자
function solution(n) {
  //숫자가 분명히 더 빠름
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join('') * 1;
}
