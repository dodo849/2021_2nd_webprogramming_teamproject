const login=async()=>{
    const id=document.querySelector("#IdInput").value;
    const pwd=document.querySelector("#PassInput").value;
    console.log(id);
    console.log(pwd);
    try{
        const respones = await axios.post("../php/Login.php",{
            id:id,
            pwd:pwd,
        });
        if(respones.data){
            if(respones.data=="fail"){
              alert("아이디 또는 비밀번호가 틀렸습니다");  
            }else{
            console.log(respones.data);
            window.open("/html/mypage.html");
            }
        }
    }catch(error){
        console.log(error);
    }
};