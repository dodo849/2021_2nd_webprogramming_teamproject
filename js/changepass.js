const inputcheck01 =()=>{
    //비밀번호 변경을 위해 입력한 새 비밀번호가 조건에 맞는지 알려주는 함수
    //#Change01의 값을 가져온다
    const password=document.querySelector("#Change01").value;
    if(password==""){
        //입력값이 비었을경우 비어있다고 경고함
        document.getElementById("pwdcheck01text").style.color="tomato";
        document.getElementById("pwdcheck01text").innerHTML="비어있습니다 입력해주세요";
    }
    else if(password.length<=5){
        //입력값이 5글자 이하라면 경고함
        document.getElementById("pwdcheck01text").style.color="tomato";
        document.getElementById("pwdcheck01text").innerHTML="6글자 이상 입력해주세요";
    }else if(password.length>=11){
        //입력값이 11글자 이상이라면 경고함
        document.getElementById("pwdcheck01text").style.color="tomato";
        document.getElementById("pwdcheck01text").innerHTML="10글자 이하로 입력해주세요";
    }else{
        //입력값이 조건을 충족하면 초록색으로 충족한다고 알림
        document.getElementById("pwdcheck01text").style.color="green";
        document.getElementById("pwdcheck01text").innerHTML="조건에 충족합니다";
    }
}
const inputcheck02 =()=>{
    //새비밀번호 입력과 비밀번호 입력이 일치하는지 알려주는 함수
    //값을 받아온다
    const password=document.querySelector("#Change01").value;
    const passcheck=document.querySelector("#Change02").value;
    if(passcheck==password){
        //두개의 입력이 일치하면 일치함을 알림
        document.getElementById("pwdcheck02text").style.color="green";
        document.getElementById("pwdcheck02text").innerHTML="일치합니다";
    }
    else{
        //일치 하지 않으면 일치 하지 않음을 알림
        document.getElementById("pwdcheck02text").style.color="tomato";
        document.getElementById("pwdcheck02text").innerHTML="비밀번호 확인을 다시 입력해주세요";
    }
}


const changepwd=async()=>{//비밀번호 변경 버튼을 누를경우 작동하는 함수
    //값을 받아온다
    const changepwd=document.querySelector('#Change01').value;   
    const changepwdcheck=document.querySelector('#Change02').value;
    if(changepwd==0){
        alert("비밀번호를 입력해 주세요");
    }
    if(changepwdcheck==0){
        alert("비밀번호 확인을 입력해 주세요");
    };
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