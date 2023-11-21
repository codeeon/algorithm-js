// 명예의 전당
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

const solution = (k, score) => {
  const record = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    let item = score[i];
    record.push(item);
    record.sort((a, b) => b - a);
    i < k ? answer.push(record[record.length - 1]) : answer.push(record[k - 1]);
  }
  return answer;
};
// 반복문 돌려서
// record에 push, 내림차순 정렬하고
// k >= length ? record[-1] : record[k-1]
// -> answer에 각각 push
// 최종 answer 리턴

// 다른 사람 풀이 - stack, reduce
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}

// 다른 사람 풀이 - slice, Math.min
// 1. score를 돌면서 length(k)가 이하인 녀석들의 최하위 점수를 만들어 배열에 리턴하면 된다.
// 2. 단, score는 이전에 돌면서 만들었던 배열 k 갯수에 새로들어오는 score를 추가해서 k개로 다시 만들어야 한다.
function solution(k, score) {
    var answer = [];

    return score.reduce((acc, cur) => {
        answer.push(cur);
        answer = answer.sort((a, b) => b - a).slice(0, k);
        return [...acc, Math.min(...answer)];
    }, []);
}