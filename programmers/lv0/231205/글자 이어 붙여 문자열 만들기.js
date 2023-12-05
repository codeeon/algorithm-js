// 글자 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181915

const solution = (my_string, index_list) => {
  let answer = '';

  for (let i of index_list) {
    answer += my_string[i];
  }

  return answer;
};

// 다른 사람 풀이 - map, join
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join('');
}

// 다른 사람 풀이 - reduce
function solution(my_string, index_list) {
  return index_list.reduce((result, i) => result + my_string[i], '');
}

// 다른 사람 풀이 - for in
const solution = (my_string, index_list) => {
  let result = '';

  for (const index in index_list) {
    const value = index_list[index];

    result += my_string[index_list[index]];
  }
  return result;
};

// 다른 사람 풀이 - forEach
function solution(my_string, index_list) {
  let str = '';
  index_list.forEach((el) => {
    str += my_string.charAt(el);
  });
  return str;
}

// 다른 사람 풀이 - charAt()
function solution(my_string, index_list) {
  let result = '';

  for (let i = 0; i < index_list.length; i++) {
    result += my_string.charAt(index_list[i]);
  }

  return result;
}
