const changepwd=async()=>{
    const changepwd=document.querySelector('#Change01').value;   
    const changepwdcheck=document.querySelector('#Change02').value;
    if(changepwd && changepwdcheck){
    if(changepwd===changepwdcheck)//새 비밀번호와 비밀번호 =확인창 입력 값이 같아야지 실행
    {
    try{
        const respones = await axios.post("../php/changepass.php",{
            changepwd:changepwd,
        });
        
            console.log("비밀번호 변경 성공");
            alert("비밀번호가 정상적으로 변경되었습니다.");
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
    alert("입력을 해 주세요.")
}
}