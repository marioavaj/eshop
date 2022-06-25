var displayed = false;
var menu = document.getElementById("rightExpandMenu");

function expandMenu(){

    if(displayed!=true){
        

menu.style.display = "flex";
menu.style.transition = "all .5s ease-in-out;" 
 
displayed=true;
    } else if(displayed){
        menu.style.display = "none";
        menu.style.transition = "all .5s ease-in-out;" 
        displayed=false;
    } 
}