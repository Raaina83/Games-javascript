const cardArray=[
    {
        name:'c++',
        img: 'c++.png'
    },
    {
        name:'css',
        img:'css.avif'
    },
    {
        name:'html',
        img:'html.png'
    },
    {
        name:'php',
        img:'php.png'
    },
    {
        name:'python',
        img:'pylogo.webp'
    },
    {
        name:'sass',
        img:'sass.png'
    },
    {
        name: "django",
        img: "django.png"
    },
    {
        name: "flutter",
        img: "flutter.jpg"
    },
    {
        name: "java",
        img: "java.jpg"
    },
    {
        name: "react",
        img: "react.png"
    },
    {
        name: "c##",
        img: "c.png"
    },
    {
        name: "kotlin",
        img: "kotlin.jpeg"
    },
    {
        name:'c++',
        img: 'c++.png'
    },
    {
        name:'css',
        img:'css.avif'
    },
    {
        name:'html',
        img:'html.png'
    },
    {
        name:'php',
        img:'php.png'
    },
    {
        name:'python',
        img:'pylogo.webp'
    },
    {
        name:'sass',
        img:'sass.png'
    },
    {
        name: "django",
        img: "django.png"
    },
    {
        name: "flutter",
        img: "flutter.jpg"
    },
    {
        name: "java",
        img: "java.jpg"
    },
    {
        name: "react",
        img: "react.png"
    },
    {
        name: "c##",
        img: "c.png"
    },
    {
        name: "kotlin",
        img: "kotlin.jpeg"
    },
]

cardArray.sort(() => 0.5 -Math.random()); //advance shortcut to randomly sort an array
console.log(cardArray);

let grid=document.querySelector('.grid');
let result = document.querySelector('#result');
let cardsChosen=[];
let cardsIds=[];
let cardWon= [];

function createBoard(){
    for(let i=0;i<24;i++){
        const img=document.createElement('img');
        img.setAttribute('src','js.png');
        img.setAttribute('data-id',i);
        grid.appendChild(img);
        if(img.src!="white.webp")
        img.addEventListener('click',flipCard);
    }
}

createBoard();

// let imgs = document.querySelectorAll('img');
// for (const img in imgs) {
//     if (img.src != "white.webp") {
//         img.addEventListener('click',flipCard);
//     }
// }

function checkMatch(){
    let cards=document.querySelectorAll('img');
    if(cardsIds[0]==cardsIds[1]){
        alert("You have clicked same images!")
        cards[cardsIds[0]].setAttribute('src','js.png');
        cardsChosen=[];
        cardsIds=[];
    }
    else if(cardsChosen[0]===cardsChosen[1] ){
        cards[cardsIds[0]].setAttribute('src','white.webp');
        cards[cardsIds[1]].setAttribute('src','white.webp');
        cards[cardsIds[2]]?.setAttribute('src','js.png');
        cards[cardsIds[0]].removeEventListener('click',flipCard);
        cards[cardsIds[1]].removeEventListener('click', flipCard);
        cardWon.push(cardsChosen);
    } else{

        cards[cardsIds[0]].setAttribute('src','js.png');
        cards[cardsIds[1]].setAttribute('src','js.png');
        cards[cardsIds[2]]?.setAttribute('src','js.png');
    }

    result.textContent = cardWon.length;
    cardsChosen=[];
    cardsIds=[];

    if(cardWon.length == (cardArray.length/2)){
        result.textContent = "Congratulations, You've got them all!";
    }
}

function flipCard(){
    console.log("clicked");
    let cardId=this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    console.log("cardIds",cardsIds);
    console.log("cardsChosen",cardsChosen)
    if(cardsChosen.length===2){
        setTimeout(()=>{
            checkMatch();
        },500)
    }
    
}