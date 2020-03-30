
let nxt = document.getElementById("next");
let prv = document.getElementById("prev");
let img = document.getElementById("slid");
let line = document.getElementById("line");
let plusX = 0;

let Slider = {
    Images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",],
    Title: ["Mercedes Amg", "Bmw Red", "Audi AG", "Bmw 740", "Range Rover"],
    Alt: ["Mercedes", "Bmw2", "Auidi", "Bmw4", "Rang Rover"],
}
let Take = Slider.Images.length;
function Move() {
    plusX += 8;
    if (plusX <= 800) {
        line.style.width = plusX + "px";
    } else {
        plusX = 0;
    }
}
function Change(x) {
    img.src = `img/${x}`;
}
function ChangeTitle(x) {
    img.title = `${x}`;
}
function ChangeAlt(x) {
    img.alt = `${x}`;
}

let i = 0;
Change(Slider.Images[i]);
function Key(e) {
    e = e || window.event;
    if (e.keyCode == "39") {
        Next();
        plusX = 0;
        Move();
    }

    if (e.keyCode == "37") {
        Prev();
        plusX = 0;
        Move();
    }
}



function mouseOver() {
    clearInterval(time);
    clearInterval(clock);
}
function mouseOut() {
    time = setInterval(Next, 4000)
    clock = setInterval(Move, 40);
    plusX = 0;
    Move();
}

nxt.onclick = function () {
    clearInterval(time);
    Next();
    time = setInterval(Next, 4000)
    plusX = 0;
    Move();
}

function Next() {
    plusX = 0;
    Move();
    if (i < Take-1) {
        i++;
        Change(Slider.Images[i]);
        ChangeTitle(Slider.Title[i]);
        ChangeAlt(Slider.Alt[i]);
        onkeydown = Key;
    }
    else {
        i = 0;
        Change(Slider.Images[i]);
        ChangeTitle(Slider.Title[i]);
        ChangeAlt(Slider.Alt[i]);
    }
}
function Prev() {
    plusX = 0;
    Move();
    if (i == 0) {
        i = Take - 1;
        Change(Slider.Images[i]);
        ChangeTitle(Slider.Title[i]);
        ChangeAlt(Slider.Alt[i]);
        onkeydown = Key;
    }
    else {
        i--;
        Change(Slider.Images[i]);
        ChangeTitle(Slider.Title[i]);
        ChangeAlt(Slider.Alt[i]);
    }
}
let clock = setInterval(Move, 40);
let time = setInterval(Next, 4000);
