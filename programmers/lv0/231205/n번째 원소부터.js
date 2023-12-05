// n번째 원소부터
// https://school.programmers.co.kr/learn/courses/30/lessons/181892

const solution = (num_list, n) => num_list.slice(n-1);

// 다른 사람 풀이 - splice
function solution(list,n){
    return  list.splice(n-1,list.length);
}