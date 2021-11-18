const find=async()=>{
    console.log("성공")
const passfind01 =document.querySelector("#SecurityCheck01").value;
const passfind02 =document.querySelector("#SecurityCheck02").value;
//비밀번호  찾기에서 입력한거 가져오는 코드

   if(passfind01,passfind02){
       try{
           const respones =await axios.post("/php/getpassByQ.php",{
               passfind01:passfind01,
               passfind02:passfind02
           });
         if(respones.data){
             console.log(respones.data);
         }else{
             console.log("실패");
         }
       }catch(error){
           console.log(error);
       }
   }
};