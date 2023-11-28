// 문자열을 정수로 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/12925

const solution = s => s[0] === '-' ? Number(s.slice(1)) * (-1) : Number(s)
// 단순히 Number()를 사용해도, 음수 부호가 기능함.
function solution (s) {return Number(s)}

// 다른 사람 풀이 - 동적 언어의 특성, 덧셈을 제외한 곱셈이나 나눗셈, 뺄셈의 연산을 하면 숫자로 반환됨
function solution (s) {return s/1}

// 응용
function solution (s) {return s*1}
function solution (s) {return s-0}

// s + 0은 숫자로 변환할 수 없지만, +s라고 쓰면 숫자로 변환됨.
function solution (s) {return +s}