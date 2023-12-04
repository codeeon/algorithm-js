// 홀짝에 따라 다른 값 반환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181935

const solution = n => {
    const nums = [];
    for(let i = n; i > 0; i -= 2) {
        nums.push(i);
    }
    return nums.reduce((a, c) => (n & 1 ? a + c : a + c**2), 0);
}

// 다른 사람 풀이 - 수학적 접근 (반복문이나 메서드 없이 단순 연산으로 끝나기 때문에 성능이 가장 좋지 않을까?)
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
// n이 홀수일 때, 등차수열의 합 공식
// n이 짝수일 때, 거듭 제곱의 합 공식