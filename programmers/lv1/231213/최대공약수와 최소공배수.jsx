// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 재귀함수
function solution(n, m) {
    // 최대공약수(GCD)를 구하는 함수 - 유클리드 호제법
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 최소공배수(LCM)를 구하는 함수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    return [gcd(n, m), lcm(n, m)];
}

// 다른 사람 풀이 - 반복문
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}

// 다른 사람 풀이 - Math.abs()를 이용한 절대값 활용
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}
// 그러나 Math.abs()를 사용할 필요가 있었는지 의문.