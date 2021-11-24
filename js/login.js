const login=async()=>{
    //onclick="login()"
    //인풋에서 값을 가져와저장
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
        //resopnes로 값을 받고 비동기이므로 await 
        const respones = await axios.post("../php/Login.php",{
            id:id,
            pwd:pwd,
        });
        if(respones.data){
            if(respones.data==0){
                //echo false의 값이 넘어오면 아이디 혹은 비밀번호가 틀린것
              alert("아이디 또는 비밀번호가 틀렸습니다"); 
              console.log("로그인 실패"); 
            }else{
                //로그인 성공했을시 마이페이 화면을 연다 변경가능
                window.open('/html/mypage.html','_self');
                console.log("로그인 성공");
            }
        }
    }catch(error){
        console.log(error);
    }
}
};