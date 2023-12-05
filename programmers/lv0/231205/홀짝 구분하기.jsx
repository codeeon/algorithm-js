// 홀짝 구분하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181944

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);
  n & 1 ? console.log(n, 'is odd') : console.log(n, 'is even');
});

// // 다른 사람 풀이
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }).on('line', function (line) {
//     const result = Number(line) % 2 ? 'odd' : 'even'
//     console.log(line, 'is', result)
// })
// // console.log(line, 'is', result) 콘솔로그 한 번에 참 깔끔하다. 입력과 출력 활용이 깔끔한 듯.
