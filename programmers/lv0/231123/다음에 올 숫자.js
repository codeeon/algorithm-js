// 다음에 올 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/120924

// 썩 깔끔하지도 않고 좋지도 않지만 풀이 방식은 이 이외의 것을 아직 못 찾았다. 다만 가독성이 떨어지기에 좀 더 깔끔하게 정리해서 작성할 수는 있을 것 같다.
const solution = common => common[0] - common[1] === common[1] - common[2] ? common[common.length - 1] + common[1] - common[0] :  common[common.length - 1] * (common[2] / common[1]);