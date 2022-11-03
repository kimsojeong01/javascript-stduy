// 전통적인 방법
function add(x,y) {
    let temp = x + y;
    return temp
}

// 화살표함수 위에 내용과 같음.
add = (x,y) => {
    let temp = x + y;
    return temp;
}

if(money > 5000) { // 1. (money > 5000)를 만족하면, 
    rideTaxi(); // 2. rideTaxi(); 실행
} else if(money > 2000) { // 3. 아니면, 조건을 한번 더 검사 (money > 2000)를 만족하면,
    rideBus(); // 4. rideBus(); 실행
} else { // 5. 아니면
    walk(); // 6. walk(); 실행
}