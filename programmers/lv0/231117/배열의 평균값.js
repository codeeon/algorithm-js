// 배열의 평균값
// https://school.programmers.co.kr/learn/courses/30/lessons/120817

const solution = (numbers) => {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
};

// 수학적 접근
function solution(numbers) {
  (numbers[0] + numbers[numbers.length - 1]) / 2;
}
