// 첫 번째로 나오는 음수
// https://school.programmers.co.kr/learn/courses/30/lessons/181896

const solution = num_list => {
    const negativeList = num_list.map((val, idx) => [val, idx]).filter(i => i[0] < 0);
    return negativeList[0] ? negativeList[0][1] : -1
}
// 효율적이라고 할 순 없지만, map과 filter를 사용하는 연습으로 풀어보았다.

// 다른 사람 풀이 - filter, indexOf
// filter로 값을 찾고, 원본 배열의 indexOf를 통해 리턴, indexOf가 해당값이 없으면 default로 -1을 반환함
function solution(num_list) {
    let a = num_list.filter(c=> {if(c<0) return c})
    return num_list.indexOf(a[0])
}

// 다른 사람 풀이 - findIndex
// 콜백함수를 인자로 가지는 배열 메서드, 조건에 해당하는 첫 번째 요소의 인덱스를 반환, 없으면 -1 리턴
const solution = num_list => num_list.findIndex(v => v < 0)
// 추가로, 콜백 조건에 맞는 첫 번째 값을 반환하는 find()도 참고. 인덱스 - findIndex, 값 - find