
// these are the variable needed
let currMoleTile;
let currPlantTile;
let score=0;
let gameOver=false;

window.onload=function(){
    setGame();
}
function setGame(){
    // set up the grid 
    for (let i = 0; i <9; i++) {
        let tile= document.createElement("div");
        tile.id=i.toString(); // yha id sene kai liyebhumne iske number hi use kiye h
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
        
    }
    setInterval(setMole,1000);
    setInterval(setPlant,2000);
}


function getRandomTile(){
    let num=Math.floor(Math.random()*9); // taki 0-9 kai beech ka ek random number mil jaye
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML="";

    }
    let mole= document.createElement("img");
    mole.src="./mole.png";

    // jo bhi number aaya us no. par ye tile chipka do 
    let num=getRandomTile();
    if(currPlantTile && currPlantTile.id==num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML="";

    }
    let plant= document.createElement("img");
    plant.src="./plant.png";

    // jo bhi number aaya us no. par ye tile chipka do 
    let num=getRandomTile();
    if(currMoleTile && currMoleTile.id==num){
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);
}
function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}