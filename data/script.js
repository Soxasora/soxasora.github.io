function niceText() {
    var box = document.createElement('span');
    box.innerHTML = "Minecraft > Terraria"
    document.getElementById("soxa").appendChild(box);
}

var clicks = 0;
function egg() {
    clicks++;
    if (clicks==5) {
        niceText();
    }
}

var alternate = 0;
function alternateBg() {
    if (alternate==0) {
        document.body.style.backgroundImage = "url('../img/bg-alternate.jpeg')";
        document.getElementById('alternate').innerHTML = `<i id="alternator" class="bi bi-brightness-alt-high" onclick="alternateBg()"> night</i>`;
        alternate=1;
    } else {
        document.body.style.backgroundImage = "url('../img/bg.jpg')";
        document.getElementById('alternate').innerHTML = `<i id="alternator" class="bi bi-brightness-alt-high-fill" onclick="alternateBg()"> day</i>`;
        alternate=0;
    }

}