// 각도기
// https://school.programmers.co.kr/learn/courses/30/lessons/120829

const solution = (angle) => {
  switch (angle) {
    case 90:
      return 2;
    case 180:
      return 4;
    default:
      return angle < 90 ? 1 : 3;
  }
};

const solution2 = (angle) => {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
};

// array.filter() !!!
const solution3 = (angle) => {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
};
