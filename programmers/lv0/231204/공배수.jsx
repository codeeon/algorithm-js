// 공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/181936

const solution = (number, n, m) => (number % m === 0 && number % n === 0 ? 1 : 0);

// 다른 사람 풀이
function solution(number, n, m) {
  return +!(number % n || number % m);
}
// +true = 1, +false = 0
// 논리 부정 연산자(!)에 or연산자(||)로 값을 0 또는 나머지 수(자연수)가 나오게 하여(T/F), 코드 길이를 줄이는 방법도 있음

// ??, 물음표 두 개 연산자
console.log(a ?? 'default');
// 물음표 두 개(Nullish coalescing operator)는 좌항이 null || undefined일 때, 우항 값을 반환 - 옵셔널 체이닝과 같이 쓰이기도 함

// !!, 느낌표 두 개 연산자
let x = null;
console.log(x); // null
console.log(!!x); // false
// 두 번째 부정 연산자(double negation operator), null || undefined일 때 명시적으로 false 반환

// ~, 비트 부정 연산자 (Tilde operator) || Not 연산자
let numA = 7;
console.log(~numA); // -8
let numB = -5;
console.log(~numB); // 4
// 2진수로 표기했을 때, 모든 0을 1로, 1을 0으로 바꾸는, 숫자의 비트를 뒤집는 결과를 반환
// ~k = -(k + 1)

// ~~, Not 연산자 두 개
let a = 5.5;
console.log(~~a); // 5
let b = -10 / 3;
console.log(~~b); // -3
// 두 번 뒤집어서, 다시 원본 값을 반환하는데, 소수점 아래 비트를 버리는 성질을 가짐
// == Math.trunc()와 같은 느낌으로 쓸 수 있을 듯
console.log(Math.floor(b)); // -4
// Math.floor()의 경우, 내림 연산이다보니 음수에서 기존 값보다 낮은 값을 가지게 되니 조금 다름