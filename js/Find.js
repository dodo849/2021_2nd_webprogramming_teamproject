const find=async()=>{
const passfind01=document.querySelector("#FindPassInput").value;
const passfind02 =document.querySelector("#SecurityCheck01").value;
const passfind03 =document.querySelector("#SecurityCheck02").value;
//비밀번호  찾기에서 입력한거 가져오는 코드
  if(passfind01,passfind02,passfind03){
       try{
           const respones =await axios.post("/php/find.php",{
               passfind01:passfind01,
               passfind02:passfind02,
               passfind03:passfind03,
           });
         if(respones.data){
            if(respones.data=="fail"){
                alert("보안질문의 답이 틀렸거나 아이디가 존재하지 않습니다");  
              }else{
              console.log(respones.data);
              alert(respones.data);
              }
         }
       }catch(error){
           console.log(error);
       }
   }
};