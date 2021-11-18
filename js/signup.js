
const signup =async() =>{
    const id =document.querySelector("#IdInput").value;
    const password=document.querySelector("#PasswordInput").value;
    const passcheck=document.querySelector("#PasswordCheck").value;
    const nickname=document.querySelector("#NickNameInput").value;
    const q1=document.querySelector("#SecurityInput01").value;
    const q2=document.querySelector("#SecurityInput02").value;
    if(password===passcheck){
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
             }
             else{
                 console.log("입력실패");
             }
        }catch (error){
            console.log(error);
        }
    }
}else{
    alert("비밀번호확인을 다시 입력해주세요");
};
};
