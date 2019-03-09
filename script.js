
let canvas = document.getElementById("window");
let ctx = canvas.getContext("2d");
let pad1;
let pad2;
let ball;
let score1;
let score2;
ctx.font = "50px Arial";
restart();

function restart(){
    // Reset the both scores, and restart the position of the ball and the pads
    score1 = 0;
    score2 = 0;
    start();
}

function start(){
    // Initialise the position of the pads, and the ball
    ball = Ball(canvas.width, canvas.height, 20, "#000000");
    pad1 = Pad(0, canvas.width, canvas.height, 90, 83, "#000000");
    pad2 = Pad(1, canvas.width, canvas.height, 38, 40, "#000000");
}

function main(){
    window.addEventListener("keydown", keydown, false);
    window.addEventListener("keyup", keyup, false);
    requestAnimationFrame(mainLoop);
}

function display(){
    // Display the scores, the ball and the pads
    ctx.fillText(score1, canvas.width / 2 - 75, 50);
    ctx.fillText(score2, canvas.width / 2 + 50, 50);
    ball.display(ctx);
    pad1.display(ctx);
    pad2.display(ctx);
    ctx.fillRect(canvas.width / 2, 0, 1, canvas.height)
}

function mainLoop(){
    // Make the program infinite
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    display();
    requestAnimationFrame(mainLoop);
}

function update(){
    // Initalise the scores, if someone score a goal
    pad1.move();
    pad2.move();
    ball.move(canvas.height, pad1, pad2);
    if (ball.x < 0){
        score2 += 1;
        console.log(`1 point pour le joueur 2 !`);
        start();
    }
    if (ball.x >= canvas.width){
        score1 += 1;
        console.log(`1 point pour le joueur 1 !`);
        start();
    }
    if (score1 >= 10 || score2 >= 10){
        alert(`Terminé ! Les score finaux sont de : ${score1} à ${score2}`);
        restart();
    }
}

function keydown(event){
    pad1.keyDown(event.keyCode);
    pad2.keyDown(event.keyCode);
}

function keyup(event){
    pad1.keyUp(event.keyCode);
    pad2.keyUp(event.keyCode);
}

main();
