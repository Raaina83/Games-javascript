let arr=["rock","paper","scissors"];

let computer=document.querySelector("#computer-choice");
let user=document.querySelector("#user-choice");
let result=document.querySelector("#result");
let usrChoice;
let compChoice;

let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click", (e) =>{
        console.log(e.target.id);
        usrChoice=e.target.id;
        compChoice=computerChoice();

        user.innerHTML=usrChoice;
        computer.innerHTML=compChoice;
        check();
    });
}

function computerChoice(){
    let idxRand=Math.floor(Math.random() * 3);
    console.log(arr[idxRand]);
    return arr[idxRand];
}

function check(){
    if(usrChoice===compChoice){
        result.innerHTML="Draw";
    } else if(usrChoice=="rock" && compChoice=="paper"){
        result.innerHTML="You lost!Try again.";
    } else if(usrChoice=="rock" && compChoice=="scissors"){
        result.innerHTML="You won!";
    } else if(usrChoice=="paper" && compChoice=="rock"){
        result.innerHTML="You won!";
    } else if(usrChoice=="paper" && compChoice=="scissors"){
        result.innerHTML="You lost!Try again.";
    } else if(usrChoice=="scissors" && compChoice=="paper"){
        result.innerHTML="You won!";
    } else if(usrChoice=="scissors" && compChoice=="rock"){
        result.innerHTML="You lost!Try again.";
    }
}