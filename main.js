var number0fDrumButtons = document.querySelectorAll("#drum-btn").length;

for (var i = 0; i < number0fDrumButtons; i++) {
    document.querySelectorAll("#drum-btn")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress", function (event) {
    makesound(event.key)
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 100);
}