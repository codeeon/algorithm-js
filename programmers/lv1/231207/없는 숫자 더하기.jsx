// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

const solution = numbers => Array(10).fill().map((_, i) => i).filter( i => numbers.indexOf(i) === -1 ).reduce((a, c) => a + c, 0)

// 다른 사람 풀이 - 합산 수가 정해져 있다 보니, 합산 수에서 numbers.reduce()를 뺄셈으로 도출
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 다른 사람 풀이 - 반복문을 통해 더해줌 - 위에 있는 다른 사람 풀이보다 성능이 아주 조금 더 괜찮으려나? 조건마다 다르긴 할 듯
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
