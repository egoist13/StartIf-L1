function showText(el) {
    var currentHeight = el.parentElement.parentElement.parentElement.clientHeight;
    if(el.previousElementSibling.className === "more") {
        el.previousElementSibling.className = "less";
        el.parentElement.parentElement.parentElement.style.height = currentHeight+"px";
        el.innerHTML = "Show less...";
    } else {
        el.previousElementSibling.className = "more";
        el.parentElement.parentElement.parentElement.style.height = "auto";
        el.innerHTML = "Show more...";
    }
}