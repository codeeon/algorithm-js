// 양꼬치
// https://school.programmers.co.kr/learn/courses/30/lessons/120830

const solution = (n, k) => {
  return n * 12000 + (k - ~~(n / 10)) * 2000;
};
// ~x는 indexOf(x), ~~x는 Math.floor(x)-내림
