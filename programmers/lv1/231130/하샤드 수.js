// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

const solution = (x) => {
  let a = x;
  let y = 0;
  do {
    y += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);
  return a % y === 0 ? true : false;
};

// 다른 사람 풀이 - 같은 풀이지만 더 깔끔한 편 - 속도 빠름
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

// 다른 사람 풀이 - 문자 배열 전환 후 풀이
function solution(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}
