//'검색' onclick : 비선호 메뉴 제외한 메뉴 추천 & 비선호 메뉴 저장(로그인시)
const recommend_food = async () => {
    //비선호 음식 input 받아서 넘겨줌
    const hateinput = document.querySelectorAll(".hateinput");
    hateList=[];
    for(let i=0; i<hateinput.length; i++){
        hateList.push(hateinput[i].value);
    }
    if(hateinput){
        try{
            const response = await axios.post("../php/recommend.php", {
                hateList: hateList
            });
            console.log(response.data);
            //비선호 음식을 제외한 랜덤 메뉴 추천 결과를 받아서 넣어줌
            if (response.data){
                const foodDOM = document.querySelectorAll(".food");
                for(let i=0; i<6; i++){
                    const card_h3 = document.createElement("h3");
                    const new_h3 = document.createTextNode(response.data[i].food_name);
                    card_h3.appendChild(new_h3);

                    const card_h5 = document.createElement("h5");
                    const new_h5 = document.createTextNode(response.data[i].food_type);
                    card_h5.appendChild(new_h5);
                    
                    const card_p = document.createElement("p");
                    const new_p = document.createTextNode(response.data[i].food_detail);
                    card_p.appendChild(new_p);
                    
                    const card_img = document.createElement("img");
                    card_img.setAttribute("src", `./img/${response.data[i].img}`);

                    foodDOM[i].appendChild(card_h3);
                    foodDOM[i].appendChild(card_p);
                    foodDOM[i].appendChild(card_h5);
                    foodDOM[i].appendChild(card_img);
                }
            }
            //로그인시 비선호 메뉴 저장
            const saveresponse = await axios.post("../php/HateSave.php", {
                hateList: hateList
            });
        }
        catch(error){
            console.log(error)
        }
    }
};
//'+' onclick: 입력창 추가
const add_input = ()=>{
    const box = document.getElementById("hatefood_search");
    const newP = document.createElement('p');
    newP.innerHTML = "<input type='text' placeholder='제외할 메뉴를 입력해주세요.' class='hateinput' ><input type='button' value='X' class='remove_button' onclick='remove(this)'>";
    box.appendChild(newP);
}
//'x' onclick: 입력창 삭제
const remove = (obj)=>{
    document.getElementById('hatefood_search').removeChild(obj.parentNode);
}
//로그인시 이전에 검색했던 비선호 메뉴 불러오기
const get_hate = async () => {
    try{
        const response = await axios.post("../php/getHate.php");
        console.log(response.data);
        if(response.data){
            for (let i=0; i<response.data.length; i++){
                //비선호 메뉴가 여러개라면 입력창 추가
                if (i>0){
                    add_input();
                }
                const hateinput_list = document.getElementsByClassName(`hateinput`);
                hateinput_list[i].value = response.data[i].search_word;
            }
        }
    }catch(error){
        console.log(error);
    }
};
const login_logout = async () => {
    try{
        const response = await axios.get("../php/getLoginName.php");
        console.log(response.data);
        if(response.data){
            const login_text = document.getElementById('login');
            login_text.parentNode.removeChild(login_text);
            const bar_text = document.getElementById('bar');
            bar_text.parentNode.removeChild(bar_text);
            const signup_text = document.getElementById('signup');
            signup_text.parentNode.removeChild(signup_text);
        }else {
            const logout_text = document.getElementById('logout');
            logout_text.parentNode.removeChild(logout_text);
        }
    }catch(error){
        console.log(error);
    }
    
};
const logout=async()=>{//세션삭제 함수 삭제후 로그인 페이지로 이동.
    try{
        const respones = await axios.post("../php/logout.php",{});
        window.open('../index.html','_self');  
        console.log("로그아웃 성공 세션 삭제 완료.");
    }catch(error){
        console.log(error);
    }
}
onload = () => {
    get_hate();
    login_logout();
};