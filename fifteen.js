$(document).ready(function() {
    init();
});

function init(){
    let puzzleArea = document.getElementById("puzzlearea").childNodes,
        x = 0,
        y = 0,
        top = 0,
        left = 0,
        counter = 1;

    for (let i = 0; i < puzzleArea.length; i++) {
        if (puzzleArea[i].nodeName === "DIV") {
            puzzleArea[i].className += "puzzlepiece";
            puzzleArea[i].setAttribute("style", `background-position: ${x}px ${y}px; top: ${top}px; left: ${left}px;`);
            x -= 100;
            left += 100;

            if (counter % 4 === 0) {
                y -= 100;
                top += 100;
                left = 0;
            }
            counter += 1;

        }
    }
}