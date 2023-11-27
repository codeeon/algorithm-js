// OX퀴즈
// https://school.programmers.co.kr/learn/courses/30/lessons/120907

const solution = quiz => {
    const mathQ = quiz.map(item => [item.split('=')[0], item.split('=')[1]]);
    console.log(mathQ);
    const answer = [];
    for(let i = 0; i < mathQ.length; i++) {
        eval(mathQ[i][0]) === Number(mathQ[i][1]) ? answer.push('O') : answer.push('X');
    }
    return answer;
}

// 같은 풀이인데 바로 그냥 맵을 두 번 달아서 푼 것이다.
function solution (q) {return q.map(r=>r.split('=')).map(([a,b])=>eval(a)==b?'O':'X')}

// 좀 더 깔끔하게 쓴 버전
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

// 구조분해할당
function solution(quiz) {
    let answer = [];
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" ");
        let sum = 0;
        if (sign === "+") {
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }
        sum === Number(z) ? answer.push("O") : answer.push("X");
    });
    return answer;
}

// +연산자 활용 - 좀 뜯어 볼 필요가 있을 듯하지만, 계산이 곱셈 나눗셈 범위까지 가거나 하면, 풀이 자체는 eval의 활용이 나은 듯하다.
function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}