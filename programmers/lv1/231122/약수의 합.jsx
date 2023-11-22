// 약수의 합
// 

// 배열이 비효율적이다(없어도 되기 때문이다) - 배열 없이 합산하는 계산이 훨씬 간결하고 깔끔한 듯
const solution = n => {
    const nArr = []
    for (let i = 1; i < n+1; i++) {
        n % i === 0 ? nArr.push(i) : null
    }
    return nArr.reduce((a, c) => a + c, 0)
}

// 다른 사람 풀이 - 배열 없이 반복
function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}

// 다른 사람 풀이 - 재귀함수
function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}

// 다른 사람 풀이 - 계산량 조절
function solution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}