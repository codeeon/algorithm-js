// 연속된 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120923

const solution = (num, total) => {
    let mid = ~~(total / num);
    let start = num & 1 ? mid - ~~(num / 2) : mid - (num / 2) + 1;
    return Array(num).fill().map((_, idx) => idx + start);
}

// 다른 사람 풀이 - Math.ceil, Math.floor - min, max
// 더 간결하고 깔끔해보임
function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2));
    var max = Math.floor(total/num + Math.floor(num/2));

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}

// 다른 사람 풀이 - 수학적 접근 - 가우스 공식 응용?
function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2
    return Array(num).fill().map((_, i) => i + a)
}