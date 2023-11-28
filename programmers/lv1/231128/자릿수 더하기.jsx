// 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

const solution = n => {
    const strNum = String(n);
    let answer = 0;
    
    for(let i = 0; i < strNum.length; i++) {
        const item = +strNum[i];
        answer += item
    }
    return answer
}


// 다른 사람 풀이 - 빈 문자열을 더해서 문자열로 만들기, split을 통한 배열화, reduce 및 parseInt를 통한 정수화 사용.
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}