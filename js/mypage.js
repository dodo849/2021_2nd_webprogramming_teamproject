
window.onload = wellcome=async()=>{
    //html 페이지가 열릴 시 자동으로 실행되는 함수
    try{
        const respones = await axios.post("../php/mypage.php",{});
        if(respones.data){
            console.log(respones.data);
            //id가 wellcometext인 div태그의 내용물을 respons.data로 바꿈
            //response.data는 닉네임 세션 변수이다.
            //[유저 닉네임]님 환영 합니다를 화면에 출력해준다.
           document.getElementById("wellcometext").innerHTML=respones.data;
        }else{
            //resopnse 의 값이 없다면 출력
            document.getElementById("wellcometext").innerHTML="에러입니다";
        }
    }catch(error){
        //통신 실패 시 
        console.log(error); 
    }
};

const logout=async()=>{
    //onclick="logout()"
    //세션삭제 함수 삭제후 로그인 페이지로 이동.
    try{
        //비동기 방식 사용 세션을 삭제 php.
        const respones = await axios.post("../php/logout.php",{});
        //세션삭제(로그아웃)하면 메인페이지로감
        window.open('../html/login.html','_self');  
        console.log("로그아웃 성공 세션 삭제 완료.");
    }catch(error){
        //통신 실패 시
        console.log(error);
    }
};

const Pwdhange=()=>{
    //onclick="pwdchange()"
    //비밀번호 변경창 이동 함수
    window.open('../html/changepass.html','_self');
};