function checkEmptyForm(form, exceptArr = []){
    for (const element in form) {
		if (exceptArr.includes(element)) continue;
		if (form[element].toString() === "") {
			return false;
		}
	}
	return true;
}
export default checkEmptyForm;