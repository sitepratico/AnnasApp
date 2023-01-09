
function timeOver() {
    var waitTime = 8000;
    var alertTime = 3000;
    var className = Math.random();
    var colorBase = "#fff";

    document.body.style.background = colorBase;
    document.body.className = className;

    setTimeout(() => {
        if (document.body.className != className) return;
        document.body.style.background = "#aaa";
    }, waitTime);

    setTimeout(() => {
        if (document.body.className != className) return;
        document.body.style.background = colorBase;
    }, waitTime + alertTime);
}