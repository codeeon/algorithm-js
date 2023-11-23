// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

const solution = (arr) => {
  return arr.length === 1 ? [-1] : arr.filter((item) => item !== Math.min(...arr));
};
// 스프레드 연산자로 배열을 풀어서, Math.min을 통해 최솟값을 구하고, 최솟값과 다른 수만 리턴했다.
// 배열에서 값을 제거해서 리턴하는 것은, filter가 공간복잡도 면에서나 편의성 면에서 제일 유용한 것 같다.

// 다른 사람 풀이 - splice, indexOf
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}