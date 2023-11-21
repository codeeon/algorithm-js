// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

const solution = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length
// 배열의 값을 모두 더할 때, 자연스럽게 reduce를 떠올리게 됐다.