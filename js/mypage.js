const wellcome=async()=>{
    try{
        const respones = await axios.post("../php/mypage.php",{});
        if(respones.data){
            console.log(respones.data);
            
        }
    }catch(error){
        console.log(error);
    }
};



const logout=async()=>{
    try{
        const respones = await axios.post("../php/mypage.php",{});
        if(respones.data){
            window.open("/html/main.html");      
        }
    }catch(error){
        console.log(error);
    }
}