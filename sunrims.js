//js에서 빈 문자열은 false로 간주된다
//undefined 도 false 로 간주
// var i = 0;
// while(i < 10){
//     document.write("hello world "+i+" <br/>");
//     i = i + 1;
// }
//while(true)만 썼을때는 무한 반복이 됨
//변수를 한개 선언
//while()<-안에 조건식이 필요함

for(var i = 0; i < 10; i = i + 1){ 
    document.write("hello world"+i+"<br/>");
}
//for 문을 사용하면 코드 줄이기 ㄱㄴ
// i = i + 1 과 i++ 은 같다