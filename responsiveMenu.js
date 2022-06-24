var displayed = false;
var menu = document.getElementById("rightExpandMenu");

function expandMenu(){
console.log(displayed);
    if(displayed!=true){

menu.style.display = "flex";

displayed=true;
    } else if(displayed){
        menu.style.display = "none";
        displayed=false;
    } 
}