const getAllUser = async () => {
    try {
        const response = await axios.get();
        if(response.data){
            console.log(response.data);
        }
    }catch(error){
        console.log(error);
    }
    console.log("모든 유저 가져오기");
}
const getAddressByName = () => {
    console.log("이름과 일치하는 사용자의 주소 가져오기");
}
