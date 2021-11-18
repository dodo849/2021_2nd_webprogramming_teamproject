const recommend_food = async () => {
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
                    const card = document.createElement("h3");
                    const newcontent = document.createTextNode(response.data[i].food_name);
                    const card2 = document.createElement("h5");
                    const newcontent2 = document.createTextNode(response.data[i].food_type);
                    const card3 = document.createElement("img");
                    card3.setAttribute("src", response.data[i].image);
                    card.appendChild(newcontent);
                    card2.appendChild(newcontent2);
                    foodDOM[i].appendChild(card);
                    foodDOM[i].appendChild(card2);
                    foodDOM[i].appendChild(card3);
                }
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