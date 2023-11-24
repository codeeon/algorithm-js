// x만큼 간격이 있는 n개의 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12954

const solution = (x, n) => Array(n).fill(x).map((x, i) => x + (x*i))

// 다른 사람 풀이 - 배열 생성 및 키를 활용 - 스프레드로 배열화, 풀이 자체는 내 풀이와 같은 방향
function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}

// 다른 사람 풀이 - Array.from 사용, 여기선 크게 의미 없지만 함수 분리도 적용
function solution(x, n) {
    return nNumbers(x,n);
}
const nNumbers = (x, n) => {
    return Array.from({length: n},(v,index)=>(index+1)*x);
};

// 다른 사람 풀이 - 재귀함수
function solution(x, n) {
    return (n === 1) ? [x] : [ ...solution(x, n - 1), (x * n)];
}