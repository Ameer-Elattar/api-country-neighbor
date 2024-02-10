let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let input=document.querySelector("input[type=text]");
    let contain=document.querySelector(".container");
    let counrty=input.value;
    if(contain.children.length>=1){
        for(let i=0;i<2;i++){
            contain.children[0].remove();
        }
    }
    CountryInfo(counrty,contain);
})