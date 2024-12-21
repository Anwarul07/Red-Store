let toggleitem = document.getElementById("menuitems");
function toggle() {
    if (toggleitem.style.maxWidth == "0px") {
        toggleitem.style.maxWidth = "100%";
        toggleitem.style.display = "block";

    } else {
        toggleitem.style.maxWidth = "0px";
    }
}

// Product image section 
let ProductImg = document.getElementById("product-img")
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].addEventListener("click", function () {
    ProductImg.src = SmallImg[0].src;
})
SmallImg[1].addEventListener("click", function () {
    ProductImg.src = SmallImg[1].src;
})
SmallImg[2].addEventListener("click", function () {
    ProductImg.src = SmallImg[2].src;
})
SmallImg[3].addEventListener("click", function () {
    ProductImg.src = SmallImg[0].src;
})


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