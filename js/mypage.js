
window.onload = wellcome=async()=>{//페이지가 열릴때 자동으로 실행되는 함수
    try{
        const respones = await axios.post("../php/mypage.php",{});
        if(respones.data){
            console.log(respones.data);
            //id가 wellcometext인 div태그의 내용물을 respons.data로 바꿈
            //response.data는 닉네임 세션 변수이다.
            //000님 환영 합니다를 화면에 출력해준다.
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