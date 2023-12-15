// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    // 3진법 문자열로 변환하는 가장 간단한 방법.
    let ternary = n.toString(3);

    // 문자열을 뒤집는 가장 간단한 방법. - spread operator를 사용하지 않는 경우, split으로 대체할 수 있음.
    let reversedTernary = [...ternary].reverse().join('');

    // parseInt를 활용해, 3진법 문자열을 10진법 숫자로 변환하는 방법.
    return parseInt(reversedTernary, 3);
};


// 다른 사람 풀이 - 위 세 가지를 한 줄로 작성.
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 다른 사람 풀이 - while문으로 3진법 변환, reduce, Math.pow(a, b)를 이용해 v * a^b로 10진법 적용
function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n/3);
    }
    return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0);   
}

// 다른 사람 풀이 - 위와 같은 방향의 풀이
function solution(n, numbers = []) {
    while (n) numbers.push(n % 3), (n = parseInt(n / 3))
    return numbers.reduce((a, c, i, arr) => a + c * Math.pow(3, arr.length - i - 1), 0)
  }