var id = prompt('아이디를 입력해주세요');
if(id == 'sunrim'){
    var password = prompt('비밀번호를 입력해주세요');
    if(password == '111111'){
    alert('로그인 하셨습니다'+id+'님 반갑습니다');
}else {
    alert('비밀번호가 다릅니다');
}
}else{
    alert('아이디가 일치하지 않습니다');
}