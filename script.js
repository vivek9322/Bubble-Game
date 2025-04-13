
var timer = 60;
var score = 0;
var checkhit = 0;
var hitrn = 0;

// Event Bubbling : jispe click karoge us element par event raise hoga, aur event listener na milne par event element ke parent par listener dhundega, waha bhi naa milne par event ke parent ke parent par listener dhundega

document.querySelector("#pbot").addEventListener("click", function(dets){
    checkhit = Number(dets.target.textContent);
    if(checkhit === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else{
        if(score === 0){
            makeBubble();
            getNewHit();
        }
        else{
            decreaseScore();
            makeBubble();
            getNewHit();
        }
    }
});

function decreaseScore(){
    score -=10;
    document.querySelector("#scrval").textContent = score;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scrval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    var timefunc = setInterval(
        function () {
            if(timer > 0){
                timer--;
                document.querySelector("#timeval").textContent = timer;
            }else{
                clearInterval(timefunc);
                document.querySelector("#pbot").innerHTML = `<h3>GAME OVER</h3>`;
            }
        },1000);
}

function makeBubble(){
    var cluster = '';
    
    for (let i = 1; i <= 216; i++){
        var rn = Math.floor(Math.random()*10);
        cluster += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbot").innerHTML = cluster ;
}


runTimer();
makeBubble();
getNewHit();
