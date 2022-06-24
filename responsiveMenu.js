var displayed = false;
var menu = document.getElementById("rightExpandMenu");

function expandMenu(){

    if(displayed!=true){

menu.style.display = "flex";
menu.style.
displayed=true;
    } else if(displayed){
        menu.style.display = "none";
        displayed=false;
    } 
}