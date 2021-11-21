
window.onload = wellcome=async()=>{//000님 환영합니다 함수 신속한 처리 필요.
    try{
        const respones = await axios.post("../php/mypage.php",{});
        if(respones.data){
            console.log(respones.data);//세션값 (사용자의 닉네임 출력) 실험용
           document.getElementById("wellcometext").innerHTML=respones.data;
        }
    }catch(error){
        console.log(error);
    }
};
const logout=async()=>{//세션삭제 함수 삭제후 로그인 페이지로 이동.
    try{
        const respones = await axios.post("../php/logout.php",{});
        window.open('../html/main.html','_self');  
        console.log("로그아웃 성공 세션 삭제 완료.");
    }catch(error){
        console.log(error);
    }
}
const Pwdhange=()=>{//비밀번호 변경창 이동 함수
    window.open('../html/changepass.html','_self');
}
