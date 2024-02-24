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
if(localStorage.getItem("alternate") === null) {
    localStorage.setItem("alternate", alternate);
}

refreshBg(alternate);

function refreshBg() {
    alternate = parseInt(localStorage.getItem("alternate"));
    setBg(alternate);
}

function setBg(bg) {
    if (bg == 0) {
        document.body.style.backgroundImage = "url('../img/bg-alternate.jpeg')";
        document.getElementById('alternate').innerHTML = `<i id="alternator" class="bi bi-brightness-alt-high" onclick="setBg(1)"> night</i>`;
        alternate = 0;
    } else {
        document.body.style.backgroundImage = "url('../img/bg.jpg')";
        document.getElementById('alternate').innerHTML = `<i id="alternator" class="bi bi-brightness-alt-high-fill" onclick="setBg(0)"> day</i>`;
        alternate = 1;
    }
    localStorage.setItem("alternate", alternate);
}

