// rny_string
// https://school.programmers.co.kr/learn/courses/30/lessons/181863

const solution = rny_string => rny_string.replaceAll('m', 'rn');

// 다른 사람 풀이 - 정규표현식
function solution(rny_string) {
    return rny_string.replaceAll(/m/g, "rn");
}
// 정규식이면, 전역(g, g modifier) 플래그가 설정되어 있어야 TypeError가 발생하지 않는다고 함
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
// 좀 더 찾아보니, replace의 경우는 g가 필요하지만, replaceAll은 g가 없어도 가능하다는 이야기가 있으나, 위 식에서 단순히 g를 빼면 실행이 안 됨.