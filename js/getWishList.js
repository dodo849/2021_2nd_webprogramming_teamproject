// mypage.html에 들어갈 찜 관련 함수들

//음식 리스트 중 찜 된 목록만 받아 프론트에 표시한다.
const getWishList = async () => {
    console.log(`getWishlist실행`)
    try {
      //찜 된 목록을 반환한다.
      const response = await axios.get("../php/getWishList.php");
      if(response.data) {
        console.log(response.data);

        //반환된 음식 목록을 html에 추가해준다.
        for(let i = 0; i < response.data.length; i++){
          $(".List").append(
            `<div class="card">
            <p class="food-id" style="display: none;">${response.data[i].id}</p>
            <h3 class="card__title">${response.data[i].food_name}</h3>
            <p class="card__detail">${response.data[i].food_detail}</p>
            <img class="card__img" src="../img/${response.data[i].img}" alt="${response.data[i].food_name}이미지">
            <button class="wish__btn" onclick="createWish(${response.data[i].id});" data-food-id="${response.data[i].id}"><i class="far fa-star"></i></button>
            <button class="wish__btn--done" onclick="createWish(${response.data[i].id});" data-food-id="${response.data[i].id}" style="display: none;"><i class="fas fa-star"></i></button>
            </div>`
          );
        }


        //찜 된 목록들의 찜 버튼을 찜 완료 버튼으로 바꾼다.
        let wishDoneId;
        for(let i = 0; i < response.data.length; i++){
          wishDoneId = response.data[i].id;
          console.log($(`.wish__btn[data-food-id="${wishDoneId}"]`));
          $(`.wish__btn[data-food-id="${wishDoneId}"]`).hide();
          $(`.wish__btn--done[data-food-id="${wishDoneId}"]`).show();
        }

        $(".card__detail").hide();
        // 마우스를 올리면 img와 title이 사라지고 detail(원재료) 정보가 뜸
        $(".card").mouseover(function(e) {
          //애니메이션 중복되지 않도록 실행중인 애니메이션들은 취소해주기
          $(this).children().filter(".card__detail").clearQueue();
          $(this).children().filter(".card__title").clearQueue();
          $(this).children().filter(".card__img").clearQueue();

          $(this).children().filter(".card__title").fadeOut(200);
          $(this).children().filter(".card__img").fadeOut(200);
          $(this).children().filter(".card__detail").delay(250).fadeIn(200);
        })
        // 마우스를 내리면 반대로 detail이 사라지고 title과 img 등장
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
