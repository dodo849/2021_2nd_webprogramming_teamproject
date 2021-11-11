const sessionVariable = async () => {
    try {
		const response = await axios.get("../php/getSessionVar.php",);
		if(response.data) {
			console.log(response.data);
		}
    }
    catch(error) {
        console.log(error);
    }
};

sessionVariable();