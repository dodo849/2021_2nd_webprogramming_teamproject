const sessionVariable = async () => {
  try {
    //세션변수 가져오기
    const response = await axios.get("../php/getSessionVar.php",);
    if(response.data) {

      //음식분류 타이틀 넣기
      $(".menu__title").html(response.data);

      //DB에서 메뉴 가져오기
      const menuResponse = await axios.post("../php/getFoodList.php", {
        selectedFoodType : response.data,
      });

      console.log(menuResponse.data);

      for(let i = 0; i < menuResponse.data.length; i++){
        $("main").append(`<div class="card">
        <p class="food-id" style="display: none;">${menuResponse.data[i].id}</p>
        <img class="card__img" src="../img/bibimbap.png" alt="${menuResponse.data[i].food_name}이미지">
        <h3 class="card__title">${menuResponse.data[i].food_name}</h3>
        <p class="card__detail">${menuResponse.data[i].food_detail}</p>
        <button class="store-food" onclick="storeMenu(${menuResponse.data[i].id});">찜</button>
        </div>`);
      }

      //중복 코드 좀 제거하기
      $(".card__detail").hide();
      $(".card").mouseover(function(e) {
        //애니메이션 중복되지 않도록 실행중인 애니메이션들은 취소해주기
        $(this).children().filter(".card__detail").clearQueue();
        $(this).children().filter(".card__title").clearQueue();
        $(this).children().filter(".card__title").fadeOut(200);
        $(this).children().filter(".card__detail").delay(250).fadeIn(200);
      })
      $(".card").mouseleave(function(e) {
        $(this).children().filter(".card__detail").clearQueue();
        $(this).children().filter(".card__title").clearQueue();
        $(this).children().filter(".card__detail").fadeOut(200);
        $(this).children().filter(".card__title").delay(300).fadeIn(200);
      })
    }
  }
  catch(error) {
      console.log(error);
  }
};


//-----------------store 기능-----------------//
const storeMenu = async (storeFoodId) => {
  console.log("storeMenu실행");
  try {
    const storeResponse = await axios.post("../php/storeMenu.php",{
      storeFoodId : storeFoodId,
    });
    if(storeResponse) {
      console.log(storeResponse);
    }
  }
  catch(error) {
      console.log(error);
  }
}

sessionVariable();



