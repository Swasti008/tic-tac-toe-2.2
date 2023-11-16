let blocks = document.querySelectorAll(".box");
let button =document.getElementById("button");
console.log(blocks)
let xArray=[];
let yArray=[];
let gameResult = document.getElementById("result");
let Message = document.getElementById("message");
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [2,4,6],

]
blocks.forEach((box)=>
    box.onclick=handleclick
)
var click =0;
function handleclick(event){
    let i=event.target.getAttribute("Id")
    let p = document.createElement("p");
    
    if (click%2==0){
       p.innerText="X";
       xArray.push(i-1);
       console.log(xArray);
       result(win,xArray,"X");
       click++;
    }
    else{
        p.innerText="O";
        yArray.push(i-1);
        console.log(xArray);
        result(win,yArray,"O");
        click++;
    }
    blocks[i-1].append(p);
    if (click==9) {
        gameResult.style.visibility="visible";
        Message.innerHTML ="Draw!";
        wonTheGame=1;
    }
    
}
function result(win,attempt,playerName){
    let track=[];
    let flag=0;
    for (let i=0;i<win.length;i++){
        if(Array.isArray(win[i])){
            result(win[i],attempt,playerName)
        }
        else{
            if(attempt.includes(win[i])){
                track.push(true);
                flag++;
            }
            else{
                track.push(false);
            }
  
        }
    }
    
    if (track.every(track => track === true)&&flag>2){
        gameResult.style.visibility="visible";
        Message.innerHTML = "'" + playerName + "'" +"Won the game!";
        wonTheGame=1;

    }
 console.log(track)
}

button.addEventListener("click",function(){
    window.location.href="./index.html"
})
