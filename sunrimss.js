// 반복문 제어
// for (var i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     document.write('hello world' + i + '<br/>');
// }

/*continue = 반복문이 continue를 만나면 다시 반복문으로 돌아간다
continue를 만난 이후에나오는 반복문의 내용은 실행이 되지 않는다*/

//break = 반복문 종료

//중첩 반복문
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        document.write('Hello World' + i + j + '<br/>'); //i=숫자 j = 숫자
    }
}
//문자와 숫자를 결합하게되면 숫자부분을 문자의 데이터 형식으로 바뀌게 됨 = i가 문자열이 됨

