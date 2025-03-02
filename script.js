function getCurrentYear() {
	return new Date().getFullYear();
};
document.getElementById("year").innerHTML = getCurrentYear();
