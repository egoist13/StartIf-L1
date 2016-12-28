function showText(el) {
    if(el.previousElementSibling.className === "more") {
        el.previousElementSibling.className = "less";
        el.innerHTML = "Show less...";
    } else {
        el.previousElementSibling.className = "more";
        el.innerHTML = "Show more...";
    }
}