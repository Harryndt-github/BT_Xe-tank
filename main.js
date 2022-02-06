let bom = document.getElementById("bom");
    bomStyle = window.getComputedStyle(bom);

let tank = document.getElementById("tank");

let speed = 20;
    posX = 0;
    posY = 0;

function up(){
    posY -= speed;
    tank.style.top = posY + "px";
    checkImpact();
}

function down(){
    posY += speed;
    tank.style.top = posY + "px";
    checkImpact();
}

function left(){
    posX -= speed;
    tank.style.left = posX + "px";
    checkImpact();
}

function right(){
    posX += speed;
    tank.style.left = posX + "px";
    checkImpact();
}

function checkImpact(){
if (tank.style.top == boomStyle.top &&
    tank.style.left == boomStyle.left){
        tank.src = "images/explosion.gif";
        boom.remove();
    }
}

function moveSelection(evt){
    switch(evt.keyCode){
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
        case 38:
            up();
            break;
    }
}
document.addEventListener("keydown", moveSelection);