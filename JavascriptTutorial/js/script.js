let cat = document.getElementById("cat");
let posLeft = 0;
let posTop = 0;

const doSomething = (e) => {
    console.log(e);
    console.log(e.key);
    console.log(e.code);

    switch (e.key) {
        case "Right":
        case "ArrowRight":
            if (posLeft <= window.innerWidth - 419) {
                posLeft += 7;
                cat.style.left = posLeft + "px";
            }
        break;

        case "Left":
        case "ArrowLeft":

        if (posLeft >= 0) {
            posLeft -= 7;
            cat.style.left = posLeft + "px";
        }
        break;

        case "Down":
        case "ArrowDown":
            if (posTop <= window.innerHeight - 300) {
                posTop += 7;
                cat.style.top = posTop + "px";
            }
        break;

        case "Up":
        case "ArrowUp":
            if (posTop >= 280) {
                posTop -=7;
                cat.style.top = posTop + "px";
            }
        break;

    }
}

document.addEventListener("keydown", doSomething);


// Disabling the scrolling when pressing the arrows
window.addEventListener("keydown", function(e) {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);