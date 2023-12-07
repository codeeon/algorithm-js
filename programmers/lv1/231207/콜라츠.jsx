// 콜라츠
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

const solution = (n) => {
    let cnt = 0;
    while (n > 1) {
      if (cnt === 500) {
        return -1;
      }
      if (n === 1) {
        break;
      }
      if (n & 1) {
        n = n * 3 + 1;
        cnt++;
      } else {
        n /= 2;
        cnt++;
      }
    }
    return cnt;
  };
  
  // 다른 사람 풀이 - 깔끔한 반복문과 삼항연산자
  function collatz(num) {
    var answer = 0;
    while (num != 1 && answer != 500) {
      num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
      answer++;
    }
    return num == 1 ? answer : -1;
  }
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log(collatz(6));
  
  // 다른 사람 풀이 - 깔끔한 반복문과 삼항연산자 2
  function solution(num) {
    var count = 0;
  
    while (count < 500) {
      if (num === 1) {
        return count;
      }
      count++;
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  
    return -1;
  }
  
  // 다른 사람 풀이 - 재귀함수, 성능은 느릴 듯, cnt 500이라는 탈출 범위를 상위로 지정할 필요가 있는 듯
  function collatz(num, count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
  }
  
  // 다른 사람 풀이 - 재귀함수 분리형, 이것도 cnt 500 탈출 범위를 num 1보다 상위로 빼야 하는 게 아닐까? 왜 다들 이렇게 풀었을까?
  const solution = (num) => collatzGuessCount(num, 0);
  
  const collatzGuessCount = (num, acc) => (num === 1 ? (acc > 500 ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1));
  
  const processCollatz = (num) => (num % 2 === 0 ? num / 2 : num * 3 + 1);
  