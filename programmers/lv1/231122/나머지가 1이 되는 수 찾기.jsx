// 나머지가 1이 되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

const solution = n => {
    for(let x = 2; x < n; x++) {
        if(n % x === 1) {
            return x
        }
    }
}

// 다른 사람 풀이 - while 무한루프
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}

// 다른 사람 풀이(약간 수정) - while 조건 제한
function solution(n) {
    let answer = 2;
    while(n%answer!==1)answer++;
    return answer;
}