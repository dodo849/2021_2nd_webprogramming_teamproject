const getLoginName = async () => {
    console.log("getLoginName 실행");
    try{
        //로그인이 되어 있으면 유저의 닉네임을 받아온다.
        const response = await axios.get("../php/getLoginName.php");
        console.log(response.data);
        //로그인된 상태라면 로그인, 회원가입 버튼을 삭제한다
        if(response.data){
            $(".nav-top__login").remove();
            $(".nav-top__signup").remove();
        }
        //로그인이 안된 상태라면 마이페이지, 로그아웃 버튼을 삭제한다.
        else{
            $(".nav-top__mypage").remove();
            $(".nav-top__logout").remove();
        }
    }
    catch{
        console.log(error);
    }
}
//페이지 로드 시 함수 새ㅣㄹ행
window.addEventListener('onload', getLoginName());

// 민수님 로그아웃 코드
const logout=async()=>{//세션삭제 함수 삭제후 로그인 페이지로 이동.
    try{
        const respones = await axios.post("../php/logout.php",{});
        window.open('../index.html','_self');  
        console.log("로그아웃 성공 세션 삭제 완료.");
    }catch(error){
        console.log(error);
    }
}