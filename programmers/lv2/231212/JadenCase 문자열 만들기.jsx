// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

const solution = s => {    
    const words = s.split(' ');
    
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); 
    }
    return words.join(' ');
}
// charAt(i)으로 접근하는 것과 단순 [i] 인덱스 접근의 차이.
// 인덱스 접근은 빈 문자열에 undefined를 반환. -> 빈 문자열 예외 처리가 필요함. ex) (words[i][0] ? asdasdsad : '')
// charAt() 접근은 빈 문자열일 때, 빈 문자열을 반환. -> 빈 문자열 예외 처리 안 해도 됨.

// 다른 사람 풀이 - map()
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
// substring 대신 slice 사용 가능
// 빈 문자열 예외 처리를 한다면, charAt가 아닌 일반 인덱스로 접근해도 진행 가능