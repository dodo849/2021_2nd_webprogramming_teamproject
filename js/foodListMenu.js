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
        <h3 class="card__title">${menuResponse.data[i].food_name}</h3>
        <p class="card__detail">${menuResponse.data[i].food_detail}</p>
        <img class="card__img" src="../img/bibimbap.png" alt="${menuResponse.data[i].food_name}이미지">
        <button class="wish__btn" onclick="createWish(${menuResponse.data[i].id});" data-food-id="${menuResponse.data[i].id}"><i class="far fa-star"></i></button>
        <button class="wish__btn--done" onclick="createWish(${menuResponse.data[i].id});" data-food-id="${menuResponse.data[i].id}" style="display: none;"><i class="fas fa-star"></i></button>
        </div>`);
      }

      //중복 코드 제거하기
      $(".card__detail").hide();
      $(".card").mouseover(function(e) {
        //애니메이션 중복되지 않도록 실행중인 애니메이션들은 취소해주기
        $(this).children().filter(".card__detail").clearQueue();
        $(this).children().filter(".card__title").clearQueue();
        $(this).children().filter(".card__img").clearQueue();
        $(this).children().filter(".card__title").fadeOut(200);
        $(this).children().filter(".card__img").fadeOut(200);
        $(this).children().filter(".card__detail").delay(250).fadeIn(200);
      })
      $(".card").mouseleave(function(e) {
        $(this).children().filter(".card__detail").clearQueue();
        $(this).children().filter(".card__title").clearQueue();
        $(this).children().filter(".card__img").clearQueue();
        $(this).children().filter(".card__detail").fadeOut(200);
        $(this).children().filter(".card__title").delay(300).fadeIn(200);
        $(this).children().filter(".card__img").delay(300).fadeIn(200);
      })
    }
  }
  catch(error) {
      console.log(error);
  }
};

sessionVariable();

//-----------------wish 기능-----------------//
const createWish = async (wishFoodId) => {
  console.log("createWish실행");
  try {
    const wishResponse = await axios.post("../php/createWish.php",{
      wishFoodId : wishFoodId,
    });
    if(wishResponse) {
      console.log(wishResponse.data);

      //찜하기
      if(wishResponse.data == true){
        console.log(`.wish__btn[data-food-id="${wishFoodId}"]`);
        $(`.wish__btn[data-food-id="${wishFoodId}"]`).hide();
        $(`.wish__btn--done[data-food-id="${wishFoodId}"]`).show();
      }
      //찜하기 삭제
      else{
        $(`.wish__btn[data-food-id="${wishFoodId}"]`).show();
        $(`.wish__btn--done[data-food-id="${wishFoodId}"]`).hide();
      }
    }
  }
  catch(error) {
      console.log(error);
  }
}

window.onload = getWishList = async () => {
  console.log(`getWishlist실행`)
  try {
    const response = await axios.get("../php/getWishList.php");
    if(response.data) {
      // console.log(response.data);

      let wishDoneId;
      for(let i = 0; i < response.data.length; i++){
        wishDoneId = response.data[i].id;
        console.log($(`.wish__btn[data-food-id="${wishDoneId}"]`));
        $(`.wish__btn[data-food-id="${wishDoneId}"]`).hide();
        $(`.wish__btn--done[data-food-id="${wishDoneId}"]`).show();
      }
    }
  }
  catch(error) {
    console.log(error);
  }
};

