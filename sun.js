/*변수를 선언할 떄 변하지 않는 값은 const,변할 수 있는값은 let 으로 선언*/
/*alert 문자열은 큰따옴표나 따옴표 사용*/
/*변수*/
// =은 대입연산자
 a=100;
 a=a+10
 alert(a)

 alert(1+2)

 var a = 1; //var과a사이는 꼭 공백을 두어야함
 alert(a+10);

/*두 줄의 명령을 한줄로 요약할때는 세미콜론을 꼭 붙어야됨*/

/*연산자=값을 컴퓨터에게 지시하기 위한 기호 a=1;*/
/*비교 연산자=입력한 값이 같은지,다른지,큰지,작은지를 구분하는 것 true,false*/
/*동등 연산자*/
// ==은 동등연산자
 alert(1==2) //false
 alert(1==1) //true
 alert("one"=="two") //false
 alert("one"=="one") //true
/*일치 연산자*/
// === 두 값이 완벽하게 일치 할때만 true *문자열과 숫자는 완전 다른거*
// ==를 쓰는거보다 ===를 쓰는게 더 정확함
alert(1==="1") //false
alert(1===1) //true
alert(1=="1") //false
undefined = //값이 정의되어 있지 않다
null = //값이 없는
alert(undefined == null) //true
alert(undefined === null) //false
alert(true == 1) //true
alert(true == 2) //false
alert(true == '1') //true
alert(true === '1') //false
//js에서 1은 true로 1이 아닌숫자는 false 로 인식
alert(true === 1) //false
alert(0 === -0) //true //0은 항상중간에 있는 숫자이기때문에 true
alert(NaN === NaN) //false
//NaN은 0을나눈 값과 같이 성립이 되지 않는 값이기 때문에 둘다 NaN이여도 false
/*부정과 부등호*/
alert(1!=2) //true
alert(1!=1) //false
alert("one"!="two") //true
alert("one"!="one") //false