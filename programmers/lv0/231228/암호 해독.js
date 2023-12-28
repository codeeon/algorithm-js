// 암호 해독
// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  return [...cipher].filter((v, i) => i % code === code - 1).join('');
}

// 다른 사람 풀이 - split
function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
}
