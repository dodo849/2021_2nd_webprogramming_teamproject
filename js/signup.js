
const signup =async() =>{
    const id =document.querySelector("#IdInput").value;
    const password=document.querySelector("#PasswordInput").value;
    const passcheck=document.querySelector("#PasswordCheck").value;
    const nickname=document.querySelector("#NickNameInput").value;
    const q1=document.querySelector("#SecurityInput01").value;
    const q2=document.querySelector("#SecurityInput02").value;
    
    if(id==0){//아이디 입력창이 비었을경우 알림창
        alert("아이디를 입력해주세요");
    }
    if(password==0){//비밀번호 창이 비었을경우 알림창
        alert("비밀번호를 입력해주세요");
    }
    if(passcheck==0){
        alert("비밀번호 확인을 입력해주세요");
    }
    if(nickname==0){//닉네임 창이 비었을경우 알림창
        alert("닉네임을 입력해주세요");
    }
    if(q1==0){//첫번째 보안질문 창이 비었을경우 알림창
        alert("첫번째 보안질문을 입력해주세요");
    }
    if(q2==0){//두번째 보안질문 창이 비었을경우 알림창
        alert("두번째 보안질문을 입력해주세요");
    }


     //입력된 글자가 6자 이상 10자 이하 일 때만 실행
    
    if(password===passcheck){//비밀번호와 비밀번호 확인창이 일치 할 경우에만 실행
    if(id&&password&&nickname&&q1&&q2)
    {
        try{
             const respones = await axios.post("../php/signup.php",{
                id:id,
                password:password,
                nickname:nickname,
                q1:q1,
                q2:q2, 
             });
             if(respones.data){
                 console.log(respones.data);
                 alert("회원가입이 완료 되었습니다. 보안질문을 잘 기억해 주세요");
                 //회원가입이  제대로 되었을 경우 메인 페이지로 이동
                 window.open('/html/main.html','_self');
             }
             else{
                 console.log("회원가입실패");
                 //php 파일에서 중복된 아이디가 존재할 경우 respons.data가 빈값이
                 //리턴 되는데, 즉 사용자가 입력한 아이디와 중복이 존재 한다는것을 알려주는 
                 //알림창
                 alert("이미 존재하는 아이디 입니다.");
             }
        }catch (error){
            console.log(error);
        }
    }
}else{//비밀번호와 비밀번호 확인이 일치 하지 않을경우 알림창
    alert("비밀번호확인을 다시 입력해주세요");
    };
};
