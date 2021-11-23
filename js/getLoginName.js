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