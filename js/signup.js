//input에 입력된 글자의 유효성 검사
const inputcheck01 =()=>{
    //아이디 입력의 글자수 조건충족유무 알림 함수
    //#IdInput의 입력된 값을 가져온다
    const id =document.querySelector("#IdInput").value;
    if(id==""){
        //입력값이 없을경우 붉은색 글씨로 비어있다고 경고함
        document.getElementById("idchecktext").style.color="tomato";
        document.getElementById("idchecktext").innerHTML="비어있습니다 입력해주세요";
    }
    else if(id.length>=11){
        //입력값이 11글자 이상일경우 글자가 많다고 경고함
        document.getElementById("idchecktext").style.color="tomato";
        document.getElementById("idchecktext").innerHTML="10글자 이하로 입력해주세요";
    }else if(id.length<=5){
        //입력값이 5글자 이하일 경우 글자가 적다고 경고함
        document.getElementById("idchecktext").style.color="tomato";
        document.getElementById("idchecktext").innerHTML="6글자 이상 입력해주세요";
    }else{
        //위 조건에 모두 만족하는경우 초록색 글씨로 충족하다고 알려줌
        document.getElementById("idchecktext").style.color="green";
        document.getElementById("idchecktext").innerHTML="조건에 충족 합니다";
    }
}
const inputcheck02 =()=>{
    //비밀번호 입력의 글자수 조건충족유무 알림 함수
    //#PasswordInput의 값을 가져온다
    const password=document.querySelector("#PasswordInput").value;
    if(password==""){
        //입력값이 없을경우 붉은색 글씨로 비어있다고 경고함
        document.getElementById("pwdcheck01text").style.color="tomato";
        document.getElementById("pwdcheck01text").innerHTML="비어있습니다 입력해주세요";
    }
    else if(password.length<=5){
        //입력값이 5글자 이하일 경우 글자가 적다고 경고함
        document.getElementById("pwdcheck01text").style.color="tomato";
        document.getElementById("pwdcheck01text").innerHTML="6글자 이상 입력해주세요";
    }else if(password.length>=11){
        //입력값이 11글자 이상일경우 글자가 많다고 경고함
        document.getElementById("pwdcheck01text").style.color="tomato";
        document.getElementById("pwdcheck01text").innerHTML="10글자 이하로 입력해주세요";
    }else{
        //위 조건에 모두 만족하는경우 초록색 글씨로 충족하다고 알려줌
        document.getElementById("pwdcheck01text").style.color="green";
        document.getElementById("pwdcheck01text").innerHTML="조건에 충족합니다";
    }
}
const inputcheck03 =()=>{
    //비밀번호입력과 비밀번호 확인의 값이 일치하는지 검사하는 함수
    //비밀번호 입력과 비밀번호 확인의 값을 가져옴
    const password=document.querySelector("#PasswordInput").value;
    const passcheck=document.querySelector("#PasswordCheck").value;
    if(passcheck==password){
        //두개의 입력이 일치 할 경우 일치한다고 표시
        document.getElementById("pwdcheck02text").style.color="green";
        document.getElementById("pwdcheck02text").innerHTML="일치합니다";
    }
    else{
        //두개의 입력이 같지 않을경우 경고함
        document.getElementById("pwdcheck02text").style.color="tomato";
        document.getElementById("pwdcheck02text").innerHTML="비밀번호 확인을 다시 입력해주세요";
    }
}
const inputcheck04 =()=>{
    //닉네임의 글자수의 조건충족유무 알림 함수
    //#NickNameInput의 입력값을 가져온다
    const nickname=document.querySelector("#NickNameInput").value;
    if(nickname==""){
         //입력값이 없을경우 붉은색 글씨로 비어있다고 경고함
        document.getElementById("nickchecktext").style.color="tomato";
        document.getElementById("nickchecktext").innerHTML="비어있습니다 입력해주세요";
    }
    else if(nickname.length<=1){
        //입력값이 1글자 이하라면, 경고함
        document.getElementById("nickchecktext").style.color="tomato";
        document.getElementById("nickchecktext").innerHTML="2글자 이상 입력해주세요";
    }else if(nickname.length>=11){
        //입력값이 11글자 이상이라면, 경고함
        document.getElementById("nickchecktext").style.color="tomato";
        document.getElementById("nickchecktext").innerHTML="10글자 이하로 입력해주세요";
    }else{
        //위 조건을 전부 만족했을 경우 조건에 충족 했음을 알림.
        document.getElementById("nickchecktext").style.color="green";
        document.getElementById("nickchecktext").innerHTML="조건에 충족 합니다";
    }
}
const inputcheck05 =()=>{
    //보안질문1의 글자수의 조건충족유무 알림 함수
    //#SecurityInput01의 입력값을 가져온다.
    const q1=document.querySelector("#SecurityInput01").value;
    if(q1==""){
        //입력값이 없을경우 붉은색 글씨로 비어있다고 경고함
        document.getElementById("q1check").style.color="tomato";
        document.getElementById("q1check").innerHTML="비어있습니다 입력해주세요";
    }
    else if(q1.length<=1){
         //입력값이 1글자 이하라면, 경고함
        document.getElementById("q1check").style.color="tomato";
        document.getElementById("q1check").innerHTML="2글자 이상 입력해주세요";
    }else if(q1.length>=11){
        //입력값이 11글자 이상이라면 경고함
        document.getElementById("q1check").style.color="tomato";
        document.getElementById("q1check").innerHTML="10글자 이하로 입력해주세요";
    }else{
        //위 조건을 전부 만족했을 경우 조건에 충족 했음을 알림.
        document.getElementById("q1check").style.color="green";
        document.getElementById("q1check").innerHTML="조건에 충족 합니다";
    }
}
const inputcheck06 =()=>{
    //보안질문2의 글자수의 조건충족유무 알림 함수
    //#SecurityInput02의 입력값을 가져온다
    const q2=document.querySelector("#SecurityInput02").value;
    if(q2==""){
        //입력값이 없을경우 붉은색 글씨로 비어있다고 경고함
        document.getElementById("q2check").style.color="tomato";
        document.getElementById("q2check").innerHTML="비어있습니다 입력해주세요";
    }
    else if(q2.length<=1){
        //입력값이 1글자 이하라면 경고함
        document.getElementById("q2check").style.color="tomato";
        document.getElementById("q2check").innerHTML="2글자 이상 입력해주세요";
    }else if(q2.length>=11){
        //입력값이 11글자 이상이라면 경고함
        document.getElementById("q2check").style.color="tomato";
        document.getElementById("q2check").innerHTML="10글자 이하로 입력해주세요";
    }else{
        document.getElementById("q2check").style.color="green";
        document.getElementById("q2check").innerHTML="조건에 충족 합니다";
    }
}
const signup =async() =>{
    //회원가입 버튼을 눌렀을경우 db에 사용자가 입력한 값을 넣는 함수.
    //각각의 input에서 값을 가져온다.
    const id =document.querySelector("#IdInput").value;
    const password=document.querySelector("#PasswordInput").value;
    const passcheck=document.querySelector("#PasswordCheck").value;
    const nickname=document.querySelector("#NickNameInput").value;
    const q1=document.querySelector("#SecurityInput01").value;
    const q2=document.querySelector("#SecurityInput02").value;
    
    if(id==0){//아이디 입력창이 비었을경우 알림창
        alert("아이디를 입력해주세요");
    }
    if(password==0){//비밀번호 창이 비었을경우 알림창
        alert("비밀번호를 입력해주세요");
    }
    if(passcheck==0){
        alert("비밀번호 확인을 입력해주세요");
    }
    if(nickname==0){//닉네임 창이 비었을경우 알림창
        alert("닉네임을 입력해주세요");
    }
    if(q1==0){//첫번째 보안질문 창이 비었을경우 알림창
        alert("첫번째 보안질문을 입력해주세요");
    }
    if(q2==0){//두번째 보안질문 창이 비었을경우 알림창
        alert("두번째 보안질문을 입력해주세요");
    }
   //글자수 조건에 맞아야지만 실행한다.
   if(id.length<=10&& password.length<=10 && nickname.length<=10 && q1.length<=10 && q2.length<=10) {
       if(id.length>=6&& password.length>=6 && nickname.length>=2 && q1.length>=2 && q2.length>=2){
    if(password===passcheck){//비밀번호와 비밀번호 확인창이 일치 할 경우에만 실행
    if(id&&password&&nickname&&q1&&q2)//입력이 있을경우 실행
    {
        try{
            //비동기 방식 사용
             const respones = await axios.post("../php/signup.php",{
                 //객체를 넘긴다
                id:id,
                password:password,
                nickname:nickname,
                q1:q1,
                q2:q2, 
             });
             if(respones.data){
                 console.log(respones.data);
                 alert("회원가입이 완료 되었습니다. 보안질문을 잘 기억해 주세요");
                 //회원가입이  제대로 되었을 경우 메인 페이지로 이동
                 window.open('/index.html','_self');
             }
             else{
                 console.log("회원가입실패");
                 //php 파일에서 중복된 아이디가 존재할 경우 respons.data가 빈값이
                 //리턴 되는데, 즉 사용자가 입력한 아이디와 중복이 존재 한다는것을 알려주는 
                 //알림창
                 alert("이미 존재하는 아이디 입니다.");
             }
        }catch (error){
            console.log(error);
        }
    }
 }else{//비밀번호와 비밀번호 확인이 일치 하지 않을경우 알림창
    alert("비밀번호확인을 다시 입력해주세요");
    };
       }else{
        alert("회원가입 실패. 글자 수 조건에 맞게 입력하셨는지 확인해 주세요.02")
    }
}else{
    alert("회원가입 실패. 글자 수 조건에 맞게 입력하셨는지 확인해 주세요.01")
  }
};
