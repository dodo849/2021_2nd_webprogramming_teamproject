
// 세부 메뉴로 들어갈 시
const sessionVariable = async (selectedClass) => {
    // console.log(`${selectedClass} 가 잘 들어옴`);
    try {
		const response = await axios.post("../php/sessionValue.php", {
            selectedClass : selectedClass,
        });
		if(response.data) {
            console.log(response);
            response.data;
		}
    }
    catch(error) {
        console.log(error);
    }
};

const redirect = async () => {
    try {
		const response = await axios.post("../php/redirect.php",);
		if(response.data) {
            console.log(response);
            response.data;
		}
    }
    catch(error) {
        console.log(error);
    }
}



// 음식 분류 클릭 이벤트
$(".card").click(function(){ //this를 써야해서 화살표함수 사용 불가
    const $selectedClass = $(this).attr('data-food-class');
    sessionVariable($selectedClass);
    redirect();
    console.log($selectedClass);
})

