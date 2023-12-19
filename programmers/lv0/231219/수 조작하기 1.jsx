// 수 조작하기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
    for(let i = 0; i < control.length; i++) {
        control[i] === 'w' ? n++ : control[i] === 's' ? n-- : control[i] === 'd' ? n += 10 : n -= 10;
    }
    return n;
}

// 다른 사람 풀이 - 객체 reduce 활용
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}

// 다른 사람 풀이 - switch
function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case 'w':
        n++;
        break;
      case 's':
        n--;
        break;
      case 'd':
        n += 10;
        break;
      case 'a':
        n -= 10;
        break;
    }
  }
  return n;
}
// switch문의 조건식은 break가 필수이고, default는 없어도 되는 듯.

// 다른 사람 풀이 - 조건 분리 및 map과 reduce 이용
function solution(n, control) {
    return [...control].map(x => setValue(x)).reduce((a, b) => a+b, n);
}
function setValue(s){
    return s==="w" ? 1 : s==="s" ? -1 : s==="d" ? 10 : -10;
}