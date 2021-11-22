const getFoodList = async () => {
  console.log(`getFoodList실행`)
  try {
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
    selectedFoodType = urlParams.get('selectedFoodType');
    console.log(selectedFoodType);

    //음식분류 타이틀 넣기
    $(".js-menu__title").html(selectedFoodType);

    //DB에서 메뉴 가져오기
    const menuResponse = await axios.post("../php/getFoodList.php", {
      selectedFoodType : selectedFoodType,
    });

    console.log(menuResponse.data);

    for(let i = 0; i < menuResponse.data.length; i++){
      $("main").append(`<section class="card js-card">
      <p class="js-food-id" style="display: none;">${menuResponse.data[i].id}</p>
      <h3 class="card__title js-card__title">${menuResponse.data[i].food_name}</h3>
      <p class="card__detail js-card__detail">${menuResponse.data[i].food_detail}</p>
      <img class="card__img js-card__img" src="../img/bibimbap.png" alt="${menuResponse.data[i].food_name}이미지">
      <button class="wish__btn js-wish__btn" onclick="createWish(${menuResponse.data[i].id});" data-food-id="${menuResponse.data[i].id}"><i class="far fa-star"></i></button>
      <button class="wish__btn--done js-wish__btn--done" onclick="createWish(${menuResponse.data[i].id});" data-food-id="${menuResponse.data[i].id}" style="display: none;"><i class="fas fa-star"></i></button>
      </section>`);
    }

    //중복 코드 제거하기
    $(".js-card__detail").hide();
    $(".js-card").mouseover(function(e) {
      //애니메이션 중복되지 않도록 실행중인 애니메이션들은 취소해주기
      $(this).children().filter(".js-card__detail").clearQueue();
      $(this).children().filter(".js-card__title").clearQueue();
      $(this).children().filter(".js-card__img").clearQueue();
      $(this).children().filter(".js-card__title").fadeOut(200);
      $(this).children().filter(".js-card__img").fadeOut(200);
      $(this).children().filter(".js-card__detail").delay(250).fadeIn(200);
    })
    $(".card").mouseleave(function(e) {
      $(this).children().filter(".js-card__detail").clearQueue();
      $(this).children().filter(".js-card__title").clearQueue();
      $(this).children().filter(".js-card__img").clearQueue();
      $(this).children().filter(".js-card__detail").fadeOut(200);
      $(this).children().filter(".js-card__title").delay(300).fadeIn(200);
      $(this).children().filter(".js-card__img").delay(300).fadeIn(200);
    })
  }
  catch(error) {
      console.log(error);
  }
};
window.addEventListener('onload', getFoodList());

//-----------------wish 기능-----------------//
const getWishList = async () => {
  console.log(`getWishlist실행`)
  try {
    const response = await axios.get("../php/getWishList.php");
    if(response.data) {
      // console.log(response.data);

      let wishDoneId;
      for(let i = 0; i < response.data.length; i++){
        wishDoneId = response.data[i].id;
        $(`.js-wish__btn[data-food-id="${wishDoneId}"]`).hide();
        $(`.js-wish__btn--done[data-food-id="${wishDoneId}"]`).show();
      }
    }
  }
  catch(error) {
    console.log(error);
  }
};
window.addEventListener('onload', getWishList());


const createWish = async (wishFoodId) => {
  console.log("createWish실행");
  try {
    const response = await axios.post("../php/createWish.php",{
      wishFoodId : wishFoodId,
    });
    if(response) {
      console.log(response.data);

      //찜하기
      if(response.data == true){
        console.log(`.js-wish__btn[data-food-id="${wishFoodId}"]`);
        $(`.js-wish__btn[data-food-id="${wishFoodId}"]`).hide();
        $(`.js-wish__btn--done[data-food-id="${wishFoodId}"]`).show();
      }
      //찜하기 삭제
      else{
        $(`.js-wish__btn[data-food-id="${wishFoodId}"]`).show();
        $(`.js-wish__btn--done[data-food-id="${wishFoodId}"]`).hide();
      }
    }
  }
  catch(error) {
      console.log(error);
  }
}
