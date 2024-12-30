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