// 음식 분류 클릭 시 음식 분류 별 페이지로 이동. 이때 get 방식을 통해 음식 타입을 전달한다.
const goFoodListMenu = (selectedFoodType) => {
    location.href = `http://localhost:8080/html/foodListMenu.html?selectedFoodType=${selectedFoodType}`;
}

