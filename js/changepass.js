const changepwd=async()=>{//비밀번호 변경 버튼을 누를경우 작동하는 함수
    //값을 받아온다
    const changepwd=document.querySelector('#Change01').value;   
    const changepwdcheck=document.querySelector('#Change02').value;
    if(11>changepwd.lenght>5)//6글자 이상 10글자 이하일 경우에만 실행된다
    {
    if(changepwd && changepwdcheck){//새 비밀번호와 비밀번호 확인 둘다 입력 되어야지만 실행
    if(changepwd===changepwdcheck)//새 비밀번호와 비밀번호 확인창 입력 값이 같아야지 실행
    {
    try{
        const respones = await axios.post("../php/changepass.php",{
            changepwd:changepwd,
        });
        //성공적으로 변환 되었을 경우
            console.log("비밀번호 변경 성공");
            alert("비밀번호가 정상적으로 변경되었습니다.");
            //마이페이지로 이동
            window.open('/html/mypage.html','_self');
        
    }catch(error){
        console.log(error);
    }
}else//새 비밀번호와 비밀번호 확인의 입력값이 다를경우
{
alert("비밀번호 확인의 입력을 다시한번 확인해 주세요.");
console.log("비밀번호 변경 실패");
}
}else{
    alert("입력을 해 주세요.");
}
}else{
    alert("6글자이상 10글자 이하로 입력해주세요 ");
}
};