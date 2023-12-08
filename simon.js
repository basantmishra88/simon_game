let gameSeq=[];
let userSeq=[];


let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function (){
    if(started ==false){
        console.log("game started");
        started=true;
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
            document.querySelector("body").style.color="black";

        },200)
        levelUp();
    }
    
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },500)
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },500)
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    //random btn choose;
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
};
function checkAns(idx){
    // let idx= level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`game over! your score<b> ${level}</b><br> press any key for start`;
        document.querySelector("body").style.backgroundColor="red";
        document.querySelector("body").style.color="white";
        high.push(level);
        reset();
    }
}


function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    //console.log(userColor); 
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

