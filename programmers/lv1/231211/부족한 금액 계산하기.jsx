// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

const solution = (price, money, count) => {
    const result = money - (Array(count).fill(price).reduce((a, c, i) => a + (c * (i + 1))));
    return result < 0 ? result * -1 : 0
}

// 다른 사람 풀이 - 수학적 접근 - 가우스 공식
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

// 다른 사람 풀이
function solution (..._) { return Math.max(_[0]*_[2]*++_[2]/2-_[1], 0); }
// 가독성은 버린 듯, ..._는 스프레드 연산자를 써서 args로 파라미터를 표현, 따라서 _[0] 은 price, _[1]은 money, _[2]는 count
// Math.max의 경우, 앞의 식이 부족한 금액(양수)을 구하고, 부족하지 않은 경우(음수), 0이 반환되도록 구성.
// '++_[2]' 부분은 전위연산자로써, _[2]에 대해 먼저 +1하고 계산 -> 'count + 1'
// 절대 추천할 만한 풀이는 아니지만, 안에 들어 있는 풀이 방식이 재밌는 게 있어서 스크랩