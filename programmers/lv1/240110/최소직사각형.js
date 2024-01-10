// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 완전탐색

function solution(sizes) {
  return Math.max(...sizes.map((size) => Math.max(...size))) * Math.max(...sizes.map((size) => Math.min(...size)));
}

// 다른 사람 풀이 - reduce
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0]);
  return hor * ver;
}

// 다른 사람 풀이 - forEach
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

// 다른 사람 풀이 - apply
function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  let hMax = Math.max.apply(
    null,
    sizes.map((item) => item[0])
  );
  let vMax = Math.max.apply(
    null,
    sizes.map((item) => item[1])
  );
  return hMax * vMax;
}
