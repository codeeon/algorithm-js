// 문자열 겹쳐쓰기
// https://school.programmers.co.kr/learn/courses/30/lessons/181943

const solution = (my_string, overwrite_string, s) => {
    let newWord = my_string.slice(0, s).concat('', overwrite_string);
    
    const strLen = my_string.length;
    const nwLen = newWord.length;
    
    return strLen !== nwLen ? newWord.concat('',my_string.slice(nwLen, strLen)) : newWord
}

// 문자열은 concat을 쓰지 않고 그냥 +를 써도 되지만, 문자열에도 concat이 있어서 써보고 싶었다.