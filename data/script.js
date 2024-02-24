function niceText() {
    var box = document.createElement('span');
    box.innerHTML = "Hey there."
    document.getElementById("soxa").appendChild(box);
}

var clicks = 0;
function egg() {
    clicks++;
    if (clicks==5) {
        niceText();
    }
}