const login=async()=>{
    const id=document.querySelector("#IdInput").value;
    const pwd=document.querySelector("#PassInput").value;
    if(id==0){//아이디 입력창이 비었을 경우 알림창
        alert("아이디를 입력해주세요");
    };
    if(pwd==0){//비밀번호 입력창이 비었을 경우 알림창
        alert("비밀번호를 입력해주세요");
    };
    if(id&&pwd){//아이디와 비밀번호 둘다 입력되었을 경우 실행
    try{
        const respones = await axios.post("../php/Login.php",{
            id:id,
            pwd:pwd,
        });
        if(respones.data){
            if(respones.data==0){
              alert("아이디 또는 비밀번호가 틀렸습니다"); 
              console.log("로그인 실패"); 
            }else{
                //로그인 성공했을시 마이페이 화면을 연다(임시로 마이페이지로 연결함) 변경가능
                window.open('/html/mypage.html','_self');
                console.log("로그인 성공");
            }
        }
    }catch(error){
        console.log(error);
    }
}
};