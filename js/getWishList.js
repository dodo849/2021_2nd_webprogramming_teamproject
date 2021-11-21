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
      }
    }
    catch(error) {
      console.log(error);
    }
};

getWishList();