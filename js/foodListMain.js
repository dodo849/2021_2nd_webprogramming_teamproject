
// 세부 메뉴로 들어갈 시
const sessionVariable = async (selectedFoodType) => {
    // console.log(`${selectedClass} 가 잘 들어옴`);
    try {
		const response = await axios.post("../php/createSessionValue.php", {
            selectedFoodType : selectedFoodType,
        });
		if(response.data) {
            console.log(response);
		}
    }
    catch(error) {
        console.log(error);
    }
};


// 음식 분류 클릭 이벤트
const goFoodListMenu = (selectedFoodType) => {
    location.href = `http://localhost:8080/html/foodListMenu.html?selectedFoodType=${selectedFoodType}`;
}

