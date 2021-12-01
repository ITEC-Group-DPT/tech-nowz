const checkEmptyForm = (form, exceptArr = []) => {
	for (const element in form) {
		if (exceptArr.includes(element)) continue;
		if (form[element].toString() === "") {
			return false;
		}
	}
	return true;
};
const checkNotNegative = (form, optionArr = []) => {
	for (const e of optionArr) {
		console.log(form[e]);
		if (form[e] < 0) return false;
	}
	return true;
};
export { checkEmptyForm, checkNotNegative };
