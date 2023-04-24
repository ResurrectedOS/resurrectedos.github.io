function onWenClickSir() {
	let clicks = Number(localStorage.getItem("wendownloadsir"));
	clicks += 1;
	localStorage.setItem('wendownloadsir', clicks);
	document.getElementById("wenclicksir").innerHTML = clicks;
};