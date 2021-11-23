const getLoginName = async () => {
    console.log("getLoginName 실행");
    try{
        const response = await axios.get("../php/getLoginName.php");
        console.log(response.data);
        if(response.data){
            $(".nav-top__login").remove();
            $(".nav-top__signup").remove();
        }
        else{
            $(".nav-top__mypage").remove();
            $(".nav-top__logout").remove();
        }
    }
    catch{
        console.log(error);
    }
}
window.addEventListener('onload', getLoginName());

const logout=async()=>{//세션삭제 함수 삭제후 로그인 페이지로 이동.
    try{
        const respones = await axios.post("../php/logout.php",{});
        window.open('../index.html','_self');  
        console.log("로그아웃 성공 세션 삭제 완료.");
    }catch(error){
        console.log(error);
    }
}