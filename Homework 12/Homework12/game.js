function setup()
{
    createCanvas(500, 600)
    characterX = 250;
    characterY = 525;
    

}

var width = 500;
var height = 600;
var Cchange = 2
var bkR = 0;
var bkG = 153;
var bkGT = 200;
var bkB = 255;
var cellX = 30;
var cellY = 50;
var cell2X = 30;
var cell2Y = 50;
var cellXSpeed;
var cellYSpeed;
var cell2XSpeed;
var cell2YSpeed;
var mouseShapeX;
var mouseShapeY;
var movement;
function draw()
{
    background(bkR,bkG,bkB);
    stroke(0);
    fill(0);

boarders();
createCell();
playerinput();
allyspore();
enemies();
enemymovement1();
enemymovement2();
wincondition();

    var delay = 0; // ms
    var delta = 5; // ms
    if(bkG < bkGT)
    {
        Cchange *= +1;
    }

    bkG += Cchange;

    if(bkG >= bkGT)
    {
        bkG -= Cchange;
    }
}

function boarders()
{
    fill(0);
    rect(0,0,width-300,10);
    rect(300,0,width-300,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height);
}

//character
function createCell()
{
    fill(23,175,123);
    circle(characterX,characterY+17,10)
    circle(characterX,characterY+10,15)
    circle(characterX,characterY,25)
    fill(255,255,255);
    circle(characterX-5,characterY-3,7)
    circle(characterX+5,characterY-3,7)
    fill(0,0,0);
    circle(characterX+5,characterY-3,3)
    circle(characterX-5,characterY-3,3)
}

function playerinput()
{
        //controls
        if(keyIsDown(83))
        {
            characterY += 3;
        }
        if(keyIsDown(87))
        {
            characterY -= 3;
        }
        if(keyIsDown(65))
        {
            characterX -= 3;
        }
        if(keyIsDown(68))
        {
            characterX += 3;
        }
        //reset
        if(keyIsDown(32))
        {
            characterX = 250;
            characterY = 525;
        }
}

function allyspore()
{
    fill(255,0,102);
    circle(mouseShapeX,mouseShapeY-17,10)
    circle(mouseShapeX,mouseShapeY-10,15)
    circle(mouseShapeX,mouseShapeY,25)
    fill(255,255,255);
    circle(mouseShapeX+5,mouseShapeY+3,7)
    circle(mouseShapeX-5,mouseShapeY+3,7)
    fill(0,0,0);
    circle(mouseShapeX-5,mouseShapeY+3,3)
    circle(mouseShapeX+5,mouseShapeY+3,3)

}

function enemies()
    {
    // enemy cell
  fill(204,204,14);
  circle(cellX, cellY, 10);

// enemy cell 2
fill(0,153,0);
circle(cell2X, cell2Y, 20);
    }

function enemymovement1()
{
    cellXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    cellYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 
    cellX += cellXSpeed;
    cellY += cellYSpeed;
    if(cellX > width)
    {
     cellX = 0;
    }
    if(cellX < 0)
    {
     cellX = width;
    }
    if(cellY > height)
    {
        cellY = 0;
    }
    if(cellY < 0)
    {
     cellY = height;
    }
}

function enemymovement2()
{
    cell2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) - 1);
    cell2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
   
    cell2X += cell2XSpeed;
    cell2Y += cell2YSpeed;
    if(cell2X > width)
    {
     cell2X = 0;
    }
    if(cell2X < 0)
    {
     cell2X = width;
    }
    if(cell2Y > height)
    {
        cell2Y = 0;
    }
    if(cell2Y < 0)
    {
     cell2Y = height;
    }
}

function wincondition()
{
// win condition
if(characterX > 200 && characterX < 300 && characterY < 0)
    {
        fill(0, 177, 22);
         textSize(40);
         text("You Win!", width-325, height-350);
    }
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
