let input=document.getElementById("text-input");
let result=document.querySelector(".result");

function showelement(ele){
    console.log(ele.target.innerText);
    let key=ele.target.innerText;
    if(key==="c"){
        input.value="";
        result.innerHTML="";
    }
    else if(key==="x"){
        input.value=input.value+"*";
    }
    else if(key==="÷"){
        input.value=input.value+"/";
    }
    else if(key==="+"){
        input.value=input.value+"+";
    }
    else if(key==="-"){
        input.value=input.value+"-";
    }
    else if(key==="+/-"){
        input.value=-(input.value);
    }
    else if(key==="%"){
        input.value=eval(input.value)/100;
        result.innerHTML="";
    }
    else if(key==="="){
        input.value=eval(input.value);
        result.innerHTML="";
    }else{
        input.value=input.value+key;
        result.innerText=eval(input.value);
    }  
}



const buttons=document.querySelector(".buttons-div").querySelectorAll("button");

buttons.forEach(btn=>{
    btn.addEventListener("click",showelement);
})