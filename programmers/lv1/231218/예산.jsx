// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

const solution = (d, budget) => {
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    console.log(budget);
    if (i === d.length - 1 && d[i] <= budget) {
      return i + 1;
    }
    if (budget < d[i]) {
      return i;
    }
    budget -= d[i];
  }
};
// reduce를 쓸 생각을 했지만, 어떻게 써야 좋을지 생각하다가 우선 풀 수 있는 방법으로 풀어봄
// 테스트 20 〉	통과 (4.44ms, 33.7MB)
// 테스트 21 〉	통과 (4.18ms, 33.7MB)
// 테스트 22 〉	통과 (5.34ms, 33.8MB)
// 테스트 23 〉	통과 (4.29ms, 33.8MB)

// 다른 사람 풀이 - reduce, pop - 비효율적이지 않나 싶음 - 유튜버 '우리밋'
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
// 테스트 20 〉	통과 (0.06ms, 33.5MB)
// 테스트 21 〉	통과 (0.07ms, 33.4MB)
// 테스트 22 〉	통과 (0.06ms, 33.5MB)
// 테스트 23 〉	통과 (0.06ms, 33.6MB)
// 생각보다 효율적이다. 내 반복문 조건식 두 개의 풀이보다 훨씬 빠름. pop이야 시간복잡도를 1로 두더라도, reduce 속도가 빠른가? 이걸 반복하는데.
// 아니면 생각보다 조건문이 느린가?
// 다음에 레벨0 문제를 풀 때 reduce와 반복문, 반복문 조건 등 비교해보면 좋을 것 같다.

// 다른 풀이와 비교했지만 압도적으로 효율적이다.
// 이유가 무엇일까. 나중에 공부해야겠다.

// 다른 사람 풀이 - reduce
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
// 테스트 20 〉	통과 (0.12ms, 33.5MB)
// 테스트 21 〉	통과 (0.13ms, 33.4MB)
// 테스트 22 〉	통과 (0.13ms, 33.5MB)
// 테스트 23 〉	통과 (0.13ms, 33.4MB)

// 다른 사람 풀이 - map, findIndex
function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
}
// 테스트 20 〉	통과 (0.15ms, 33.5MB)
// 테스트 21 〉	통과 (0.13ms, 33.5MB)
// 테스트 22 〉	통과 (0.22ms, 33.6MB)
// 테스트 23 〉	통과 (0.15ms, 33.4MB)
// 이 풀이는 앞에 테스트 케이스에서 2배 정도의 속도가 걸린 테스트가 꽤 섞여 있다.

// 다른 사람 풀이 - filter
function solution(d, b) {
  return d.sort((a, b) => a - b).filter((x) => (b - x >= 0 ? ((b = b - x), 1) : 0)).length;
}
// 테스트 20 〉	통과 (0.23ms, 33.5MB)
// 테스트 21 〉	통과 (0.13ms, 33.4MB)
// 테스트 22 〉	통과 (0.20ms, 33.6MB)
// 테스트 23 〉	통과 (0.13ms, 33.5MB)

// 아래는 위와 같은 풀이 화살표 함수의 결과
// 테스트 20 〉	통과 (0.12ms, 33.4MB)
// 테스트 21 〉	통과 (0.14ms, 33.4MB)
// 테스트 22 〉	통과 (0.13ms, 33.5MB)
// 테스트 23 〉	통과 (0.16ms, 33.5MB)

// 화살표 함수에 중괄호 넣고 return 넣은 결과
// 테스트 20 〉	통과 (0.13ms, 33.6MB)
// 테스트 21 〉	통과 (0.23ms, 33.4MB)
// 테스트 22 〉	통과 (0.13ms, 33.5MB)
// 테스트 23 〉	통과 (0.14ms, 33.6MB)

// 화살표 함수를 쓰느냐, return을 넣느냐에 따라 조금씩 속도 차이가 난다.
// 하지만 그 차이가 명확히 어느 부분에서 나는지 모르겠다.
