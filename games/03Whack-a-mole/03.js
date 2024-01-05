let squares = document.querySelectorAll('.square');
let score = document.querySelector('#score');
let timeLeft = document.querySelector('#time');
let body = document.querySelector('body');

let result = 0;
let hitMole;
let currenTime = 10;
let timerId;
let timer;

function mole() { //RANDOMLY PUT MOLE IN A DIV BOX
    squares.forEach((square) => {
        square.classList.remove('mole');
    });
    let randId = Math.floor(Math.random() * 12);
    let randSqr = squares[randId];
    randSqr.classList.add('mole');
    hitMole = randSqr.id;
}
//CHECK IF WE HIT THE RIGHT DIB BOX AND UPDATE SCORE 

squares.forEach((square) => {
    square.addEventListener('mousedown', () =>{
        if (square.id == hitMole) {
            result++;
            console.log(result);
            score.innerHTML = result;
        }
    });
    
})



function moveMole() { //MOVES THE MOLE AFTER (MOLE)
    timer = setInterval(mole, 600);
}

document.addEventListener('keypress', start);

function start() {
    moveMole();
    timerId = setInterval(countDown, 1000);
}

function countDown() { //DECREASING THE COUNTDOWN
    currenTime--;
    timeLeft.innerHTML = `${currenTime}sec`;
    if (currenTime == 0) {
        clearInterval(timerId);
        clearInterval(timer);
        alert("Time up!Your score was " + result);
        reset();
    }
}



function reset(){
    result=0;
    hitMole= null;
    currenTime=10;
    timerId=0;
    score.innerHTML = result;
}