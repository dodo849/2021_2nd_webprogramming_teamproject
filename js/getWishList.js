const getWishList = async () => {
    console.log(`getWishlist실행`)
    try {
      const response = await axios.get("../php/getWishList.php");
      if(response.data) {
        console.log(response.data);

        for(let i = 0; i < response.data.length; i++){
          $(".List").append(
            `<div class="card">
            <p class="food-id" style="display: none;">${response.data[i].id}</p>
            <h3 class="card__title">${response.data[i].food_name}</h3>
            <p class="card__detail">${response.data[i].food_detail}</p>
            <img class="card__img" src="../img/bibimbap.png" alt="${response.data[i].food_name}이미지">
            <button class="wish__btn" onclick="createWish(${response.data[i].id});" data-food-id="${response.data[i].id}"><i class="far fa-star"></i></button>
            <button class="wish__btn--done" onclick="createWish(${response.data[i].id});" data-food-id="${response.data[i].id}" style="display: none;"><i class="fas fa-star"></i></button>
            </div>`
          );
        }

        let wishDoneId;
        for(let i = 0; i < response.data.length; i++){
          wishDoneId = response.data[i].id;
          console.log($(`.wish__btn[data-food-id="${wishDoneId}"]`));
          $(`.wish__btn[data-food-id="${wishDoneId}"]`).hide();
          $(`.wish__btn--done[data-food-id="${wishDoneId}"]`).show();
        }

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
