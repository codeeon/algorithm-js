// 접두사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181906

const solution = (my_string, is_prefix) => {
  let result = 1;

  for (let i = 0; i < is_prefix.length; i++) {
    result = my_string[i] !== is_prefix[i] ? 0 : result;
  }

  return result;
};

// 다른 사람 풀이 - slice
function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// 다른 사람 풀이 - startWith()
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}

// 다른 사람 풀이 - split - 내 반복문 풀이보다 성능이 효율적인 듯
function solution(my_string, is_prefix) {
  return my_string.split(is_prefix)[0] === '' ? 1 : 0;
}

// 다른 사람 풀이 - RegExp - 정규 표현식 객체 - 느리지만 이런 풀이가 있구나
function solution(my_string, is_prefix) {
  const regExp = new RegExp(`^${is_prefix}`);
  // console.log(regExp)
  if (regExp.test(my_string)) return 1;
  return 0;
}

// 다른 사람 풀이 - indexOf
function solution(my_string, is_prefix) {
  return +(my_string.indexOf(is_prefix) == 0);
}
