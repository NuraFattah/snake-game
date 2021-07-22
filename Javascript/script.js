const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

//const button = document.querySelector("button");

/* const canvasImg = new Image();
canvasImg.src = "https://static.vecteezy.com/system/resources/previews/000/210/679/original/vector-space-galaxy-image.jpg";

canvasImg.addEventListener("load", e =>{
    context.save();
    context.drawImage(
        canvasImg,
        0,
      0,
      400,
      700
      
      );
      context.restore();
      
      
    }); */
    
    
    
class SnakePart{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width /tileCount -2;
let headX = 10;
let headY = 10;
const snakeParts = []; 
let tailLength = 2;

let appleX = 5;
let appleY = 5;
let xVelocity=0;
let yVelocity=0;



let scoreCounter =0;



if(scoreCounter> 40){
    speed =8;
}
if(scoreCounter> 50)
{speed=10;}

if (scoreCounter>60){
    speed= 12;
}
if (scoreCounter>70){
    speed= 14;
}

if (scoreCounter>80){
    speed= 15;
}
if (scoreCounter>90){
    speed= 16;
}


if (scoreCounter>100){
    speed= 18;

}



const winUrl = 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav';
const win = new Audio(winUrl);


function drawGame(){
 changeSnakePosition();
 let result = gameOver();
 if (result){
     return;
 }
 clearScreen();

 checkcolision();
 drawApple();
 drawSnake();
 //drawPoisenedApple();

 drawScoreCounter();
 setTimeout(drawGame, 1000/ speed);
}

function gameOver(){
    let gameIsOver= false;

    if (yVelocity===0 && xVelocity===0){
        return false;
    }


    //left wall
    if (headX<0){
        gameIsOver=true;
    }

    //right wall
    else if(headX === tileCount){
        gameIsOver=true;
    }
    else if (headY <0){
        gameIsOver = true;
    }
    else if(headY === tileCount){
        gameIsOver=true;
    }

        for (let i = 0; i< snakeParts.length; i++){
            let part = snakeParts[i];
            if (part.x === headX && part.y=== headY){
                gameIsOver= true;
                break;
            }
        }
        
        if (gameIsOver){
            context.fillStyle ="pink";
            context.font = "50px Verdana";
            context.fillText("Try Again", 80, 200)
            alert("You lost the Game, please try again")
        }
        
        return gameIsOver;
    }
    function drawScoreCounter() {
        context.fillStyle="white";
        context.font = "10px Verdana"
        context.fillText("Score: " + scoreCounter*10, 10, 10);
    }


function clearScreen(){
 context.fillStyle = "black";
 context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
    
    context.fillStyle = "aqua";
    for(let i =0; i< snakeParts.length; i++) {
        let part = snakeParts[i];
        context.fillRect(part.x * tileCount, part.y* tileCount, tileSize, tileSize)
    }
    
    snakeParts.push(new SnakePart (headX,headY));
    while (snakeParts.length> tailLength){
        snakeParts.shift();
    }
    context.fillStyle = "blue"
    context.fillRect(headX * tileCount, headY* tileCount, tileSize, tileSize);
}


function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}


//APPLE 
function drawApple(){
    context.fillStyle = "red";
    context.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize)
}

function checkcolision(){
    if (appleX === headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        scoreCounter++;
        win.play();
    }
}

/* function drawPoisenedApple(){
    context.fillStyle = "black";
    context.fillRect()
}

function checkcolisionP(){
    if (appleX === headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        scoreCounter--;
        lose.play();
    }
}
 */

drawGame();