var displayed = false;
var menu = document.getElementById("rightExpandMenu");

function expandMenu(){

    if(displayed!=true){
   menu.style.display = "flex";
   displayed=true;
    } else if(displayed){
        menu.style.display = "none";
        displayed=false;
    } 
}



var categoryTree = document.querySelector(".navigation");
var displayedTree = false;

function expandCategoryTree(){
    
    if(displayedTree!=true){
        categoryTree.style.display = "flex";
        displayedTree=true;

            } else if(displayedTree){
                categoryTree.style.display = "none";
               
                displayedTree=false;
            } 
}