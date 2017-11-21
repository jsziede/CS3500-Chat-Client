//shows the register form on the login page
function showReg() {
	//stores the two forms
	var reg = document.getElementById('reg');
	var login = document.getElementById('log');
	//hides the login form
	login.classList.remove("show");
	login.classList.add("hide");
	//waits to show the register form until the login form hide animation is finished
	setTimeout(function() {
		login.style.zindex = "-1";
		login.style.position = "fixed";
		reg.style.zindex = "1";
		reg.style.position = "static";
		reg.classList.remove("hide");
		reg.classList.add("show");
	}, 320); //.32 seconds, the hide animation takes .3 seconds, so there is an unnoticable buffer in case the javascript runs faster than the css
}

//shows the login form on the login page
function showLog() {
	//stores the two forms
	var reg = document.getElementById('reg');
	var login = document.getElementById('log');
	//hides the register form
	reg.classList.remove("show");
	reg.classList.add("hide");
	//waits to show the login form until the register form hide animation is finished
	setTimeout(function() {
		reg.style.zindex = "-1";
		reg.style.position = "fixed";
		login.style.zindex = "1";
		login.style.position = "static";
		login.classList.remove("hide");
		login.classList.add("show");
	}, 320); //.32 seconds, the hide animation takes .3 seconds, so there is an unnoticable buffer in case the javascript runs faster than the css
}
