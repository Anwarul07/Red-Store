let toggleitem = document.getElementById("menuitems");
function toggle() {
    if (toggleitem.style.maxWidth == "0px") {
        toggleitem.style.maxWidth = "100%";
        toggleitem.style.display = "block";

    } else {
        toggleitem.style.maxWidth = "0px";
    }
}





// log inn section toggle 
let loginBtn = document.getElementById("loginbtn");
let regBtn = document.getElementById("regbtn");
let loginForm = document.getElementById("loginForm");
let regForm = document.getElementById("regForm");
let Indicator = document.getElementById("indicator");

regBtn.addEventListener("click", function () {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(110px)";
});
loginBtn.addEventListener("click", () => {

    regForm.style.transform = "translateX(400px)";
    loginForm.style.transform = "translateX(400px)";
    Indicator.style.transform = "translateX(0px)";

})


// loginBtn.addEventListener("click", () => {
//     regForm.style.display = "none";
//     regForm.style.top = "-600px";
//     Indicator.style.transform = "translateX(0px)";
//     loginForm.style.display = "block";
//     loginForm.style.top = "110px";
// })
// regBtn.addEventListener("click", () => {

//     loginForm.style.display = "none";
//     loginForm.style.top = "-600px";
//     Indicator.style.transform = "translateX(110px)";
//     regForm.style.display = "block";
//     regForm.style.top = "110px";
// })