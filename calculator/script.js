let btns = document.querySelectorAll("button");
// let inp=document.querySelector('input');
let str = "";
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // let inp=document.querySelector('input');

        if (e.target.innerHTML == "=") {
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == "C") {
            clear();
            // str="";
            // document.querySelector('input').value = str;

        }
        else if(e.target.innerHTML=="cross"){
            deleteLeft();
            // let str2=document.querySelector('input');
            // let str3=str2.value.slice(0,str2.value.length-1); //returns new string without last character
            // str2.value=str3;
        }
        else {
            let inp = document.querySelector('input');
            console.log(e.target.innerHTML);
            str = str + e.target.innerHTML;
            console.log(str);
            inp.value = str;
        }
    });
});

function clear(){
    str="";
    document.querySelector('input').value = str;
}

function deleteLeft(){
    let str2=document.querySelector('input');
    str=str2.value.slice(0,str2.value.length-1); //returns new string without last character
    str2.value=str;
    console.log(str);
}