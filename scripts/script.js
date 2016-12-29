function showText(el) {
    var parentEl = el.parentElement.parentElement.parentElement;
    var currentHeight = parentEl.clientHeight;
    if(el.previousElementSibling.className === "more") {
        el.previousElementSibling.className = "less";
        parentEl.style.height = currentHeight+"px";
        el.innerHTML = "Show less...";
    } else {
        el.previousElementSibling.className = "more";
        parentEl.style.height = "auto";
        el.innerHTML = "Show more...";
    }
}