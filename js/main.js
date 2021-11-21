const recommend_food = async () => {

    //-----이도연 수정-----//
    const hateinput = document.querySelectorAll(".hateinput");
    hateList=[];
    for(var i=0; i<hateinput.length; i++){
        hateList.push(hateinput[i].value);
    }
    console.log(hateList);
    if(hateinput){
        try{
            const response = await axios.post("../php/recommend.php", {
                hateList: hateList
            });
            if (response.data){
                console.log(response.data);
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
                    foodDOM[i].appendChild(card_p);

                    const card_img = document.createElement("img");
                    card_img.setAttribute("src", response.data[i].img);
                    foodDOM[i].appendChild(card_h3);
                    foodDOM[i].appendChild(card_h5);
                    foodDOM[i].appendChild(card_img);
                }
            
            }
            const saveresponse = await axios.post("../php/HateSave.php", {
                hateinput: hateinput
            });
            if (saveresponse.data){
                console.log(saveresponse.data);
            }
        }
        catch(error){
            console.log(error)
        }
    }
};

const add_input = ()=>{
    const box = document.getElementById("hatesearch");
    const newP = document.createElement('p');
    newP.innerHTML = "<input type='text' placeholder='제외할 메뉴를 입력해주세요.' class='hateinput' ><input type='button' value='X' class='remove_button' onclick='remove(this)'>";
    box.appendChild(newP);
}
const remove = (obj)=>{
    document.getElementById('hatesearch').removeChild(obj.parentNode);
}
const get_hate = async () => {
    try{
        const response = await axios.post("../php/getHate.php", {
            hateinput: hateinput
        });
        if(response.data){
            console.log(response.data.search_word);
            document.getElementById(".hateinput").value = 'response.data.search_word';
        }
    }catch(error){
        console.log(error);
    }
};

onload = () => {
    get_hate();
};