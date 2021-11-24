// ---- DB에서 음식 타입에 맞는 음식 리스트를 가져온다. ---- //
const getFoodList = async () => {
  console.log(`getFoodList실행`)
  try {
    
    //get 방식으로 받은 음식 타입 파라미터 추출해 selectedFoodType 변수에 저장.
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
    selectedFoodType = urlParams.get('selectedFoodType');
    console.log(selectedFoodType);

    //DOM에 음식분류 타이틀 넣기
    $(".js-menu__title").html(selectedFoodType);

    //DB에서 음식리스트 가져오기. 이때 가져올 푸드 타입 정보도 넘겨준다.
    const menuResponse = await axios.post("../php/getFoodList.php", {
      selectedFoodType : selectedFoodType,
    });

    console.log(menuResponse.data);

    //php에서 받은 정보를 받아 html 요소를 넣는다.
    for(let i = 0; i < menuResponse.data.length; i++){
      $("main").append(`<section class="card js-card">
      <p class="js-food-id" style="display: none;">${menuResponse.data[i].id}</p>
      <h3 class="card__title js-card__title">${menuResponse.data[i].food_name}</h3>
      <p class="card__detail js-card__detail">${menuResponse.data[i].food_detail}</p>
      <img class="card__img js-card__img" src="../img/${menuResponse.data[i].img}" alt="${menuResponse.data[i].food_name}이미지">
      <button class="wish__btn js-wish__btn" onclick="createWish(${menuResponse.data[i].id});" data-food-id="${menuResponse.data[i].id}"><i class="far fa-star"></i></button>
      <button class="wish__btn--done js-wish__btn--done" onclick="createWish(${menuResponse.data[i].id});" data-food-id="${menuResponse.data[i].id}" style="display: none;"><i class="fas fa-star"></i></button>
      </section>`);
    }

    //html 애니메이션 이벤트
    $(".js-card__detail").hide();
    // 마우스를 올리면 img와 title이 사라지고 detail(원재료) 정보가 뜸
    $(".js-card").mouseover(function(e) {
      //애니메이션 중복되지 않도록 실행중인 애니메이션들은 취소해주기
      $(this).children().filter(".js-card__detail").clearQueue();
      $(this).children().filter(".js-card__title").clearQueue();
      $(this).children().filter(".js-card__img").clearQueue();

      $(this).children().filter(".js-card__title").fadeOut(200);
      $(this).children().filter(".js-card__img").fadeOut(200);
      $(this).children().filter(".js-card__detail").delay(250).fadeIn(200);
    })
    // 마우스를 내리면 반대로 detail이 사라지고 title과 img 등장
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
//페이지가 로드된 뒤 바로 실행한다.
window.addEventListener('onload', getFoodList());


// ----------------- wish(찜) 기능 ----------------- //
const getWishList = async () => {
  console.log(`getWishlist실행`)
  try {
    //DB에서 찜한 목록을 가져온다
    const response = await axios.get("../php/getWishList.php");
    if(response.data) {
      for(let i = 0; i < response.data.length; i++){
        //해당 아이디 값을 가지고 있는 요소의 찜버튼을 찜완료(btn--done)로 바꾼다.
        $(`.js-wish__btn[data-food-id="${response.data[i].id}"]`).hide();
        $(`.js-wish__btn--done[data-food-id="${response.data[i].id}"]`).show();
      }
    }
  }
  catch(error) {
    console.log(error);
  }
};
//페이지가 로드된 뒤 바로 실행한다.
window.addEventListener('onload', getWishList());


//찜 or 찜 삭제 기능
//찜 버튼을 누를 시 실행된다.
const createWish = async (wishFoodId) => {
  console.log("createWish실행");
  try {
    //찜할 메뉴의 food id값을 php로 넘긴다
    const response = await axios.post("../php/createWish.php",{
      wishFoodId : wishFoodId,
    });
    if(response) {
      console.log(response.data);

      //찜하기
      //php는 찜을 추가했다면 true를, 삭제했다면 false를 반환한다.
      if(response.data == true){
        //찜하기 버튼을 변경한다
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
