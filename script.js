let toggleitem = document.getElementById("menuitems");
function toggle() {
    if (toggleitem.style.maxWidth == "0px") {
        toggleitem.style.maxWidth = "100%";
        toggleitem.style.display = "block";

    } else {
        toggleitem.style.maxWidth = "0px";
    }
}

