const sessionVariable = async () => {
    try {
		const response = await axios.get("../php/getSessionVar.php",);
		if(response.data) {
			console.log(response.data);

      $(".menu__title").html(response.data);

      
      $("main").append(`<div class="card">
      <img class="card__img" src="../img/bibimbap.png" alt="한식이미지">
      <h3 class="card__title">한식</h3>
      <p class="card__detail">설명</p>
      </div>`);
		}
    }
    catch(error) {
        console.log(error);
    }
};

sessionVariable();