var itemInBasket = document.querySelector("#ItemBasketWrapperGrid");
var lsData = localStorage.getItem("basketInLocalStorage");
var itemsInBasket = JSON.parse(lsData);
var totalSum;
var priceWithVat = document.querySelector("#totalPriceInBasket");
var totalSumWithoutVAT;
var vat;


/**Vypise polozky z kosika z ls */
for (i = 0; i < itemsInBasket.length; i ++) {

    let sum = Math.round((parseInt(itemsInBasket[i]["AMOUNT"]) * parseFloat(itemsInBasket[i]["PRICE_WITH_VAT"])) * 100) / 100;
    localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
    
    itemInBasket.innerHTML += `<div class = "item">
<img src="deleteIcon.jpg" onclick="deleteItemFromBasket(${
        itemsInBasket[i]["ID"]
    })"   class="deleteItemFromBasket"></img>    
            <img class="imageInBasket" src=${
        itemsInBasket[i]["IMG"]
    } alt="">
            <div class="NameItemInBasket">${
        itemsInBasket[i]["NAME"]
    }</div>
            <input onclick = "valueChecker()" class="increaseCountBasket" type="number" value="${
        itemsInBasket[i]["AMOUNT"]
    }" min="1" max="999">
            <div class="pricewithoutBasket">${
        itemsInBasket[i]["PRICE"] +" €"
    }</div>
            <div class="pricewithBasket">${
        itemsInBasket[i]["PRICE_WITH_VAT"] +" €"
    }</div>
            <div class="sumInRowBasket">${sum  + " €"}</div> </div>`;

            totalSum = 0;
            totalSumWithoutVAT=0;
            vat = 0;
        
            for(let i=0; i<itemsInBasket.length; i ++) {
                totalSum = Math.round((totalSum+parseInt(itemsInBasket[i]["AMOUNT"])* parseFloat(itemsInBasket[i]["PRICE_WITH_VAT"]))*100)/100 ;
            }
            console.log(totalSum)
        
            var totalSumWithoutVAT = Math.round((totalSum/1.2) * 100) / 100;
            vat = Math.round((totalSum - totalSumWithoutVAT) * 100) / 100;
               
            localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
            localStorage.setItem("totalSum", JSON.stringify(totalSum));
        
            
        priceWithVat.innerHTML = 
        `
                        <div id="textWithoutVAT">Celkom bez DPH</div>
                        <div id="totalPriceInBasketWithoutVAT">${totalSumWithoutVAT  +" €"}</div>
                        <div id="textVAT">Z toho DPH</div>
                        <div id="totalPriceVAT">${vat  +" €"}</div>
                        <div id="textWithVAT">Celkom s DPH</div>
                        <div id="totalPriceInBasketWithVAT">${totalSum   +" €" }</div>
                        
                    `



}

function valueChecker() {
    let valueCheck = document.querySelectorAll(".increaseCountBasket").value

    if (valueCheck == "" || valueCheck == 0) {
        element.value = 1;
    }

}

/** zmena ks v kosiku */
let parent = document.querySelector("#ItemBasketWrapperGrid");

parent.addEventListener("input", (e) => {

    let amounts = document.querySelectorAll(`.item > .increaseCountBasket`);
    let newSumChange = document.querySelectorAll(`.item > .sumInRowBasket`);
    
    let indexOfItem = [].indexOf.call(amounts, e.target); // cislo indexu polozky v kosiku
    var amountChanged = amounts[indexOfItem].value; // pocet ks v kosiku

    console.log(amountChanged);

    let newSum = parseInt(amountChanged) * itemsInBasket[indexOfItem]["PRICE_WITH_VAT"];

    amounts[indexOfItem].value = amountChanged;
    newSumChange[indexOfItem].innerText = Math.round(newSum*100)/100;
    itemsInBasket[indexOfItem]["AMOUNT"] = amountChanged;
    
    
    
    totalSum = 0;
    totalSumWithoutVAT=0;
    vat = 0;

    for(let i=0; i<itemsInBasket.length; i ++) {
        totalSum = Math.round((totalSum+parseInt(amounts[i].value)* itemsInBasket[i]["PRICE_WITH_VAT"])*100)/100;
    }
    console.log(totalSum)

    

    var totalSumWithoutVAT = Math.round((totalSum/1.2) * 100) / 100;
            vat = Math.round((totalSum - totalSumWithoutVAT) * 100) / 100;
       
    localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
    localStorage.setItem("totalSum", JSON.stringify(totalSum));

    
priceWithVat.innerHTML = 
`
                <div id="textWithoutVAT">Celkom bez DPH</div>
                <div id="totalPriceInBasketWithoutVAT">${totalSumWithoutVAT   +" €"}</div>
                <div id="textVAT">Z toho DPH</div>
                <div id="totalPriceVAT">${vat   +" €"}</div>
                <div id="textWithVAT">Celkom s DPH</div>
                <div id="totalPriceInBasketWithVAT">${totalSum   +" €"}</div>
            `


});



       






/**vymazanie vsetkych poloziek z kosika */
function deleteItemsFromBasket() {
    let message = confirm("Naozaj chcete vymazať všetky položky z košíka?");

    if (message) {
        itemsInBasket = [];//vymaze polozky z ls
        localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
        localStorage.setItem("totalSum", JSON.stringify(0));
        itemInBasket.innerHTML = ""; //vymaze polozky z obrazovky

priceWithVat.innerHTML = 
`
                <div id="textWithoutVAT">Celkom bez DPH</div>
                <div id="totalPriceInBasketWithoutVAT"></div>
                <div id="textVAT">Z toho DPH</div>
                <div id="totalPriceVAT"></div>
                <div id="textWithVAT">Celkom s DPH</div>
                <div id="totalPriceInBasketWithVAT"></div>
            `

        document.getElementById("h1InBasket").innerHTML = "Váš košík je prázdny";
    }
}


/** vymazanie 1 polozky z kosika */

function deleteItemFromBasket(deleteItem) {
    totalSum = localStorage.getItem("totalSum");

    console.log("Vstup do fukcie " + totalSum)
    for (let i = 0; i < itemsInBasket.length; i++) {

        if (deleteItem == itemsInBasket[i]["ID"]) {

            totalSum = Math.round((totalSum-(parseInt(itemsInBasket[i].AMOUNT) * parseFloat(itemsInBasket[i].PRICE_WITH_VAT))) * 100) / 100;

            console.log("total po zruseni polozky " + totalSum);
            console.log("cena zruenej polozky" + parseFloat(itemsInBasket[i].PRICE_WITH_VAT));
            localStorage.setItem("totalSum", JSON.stringify(totalSum));

            priceWithVat.innerHTML = 
`
                <div id="textWithoutVAT">Celkom bez DPH</div>
                <div id="totalPriceInBasketWithoutVAT">${Math.round((totalSum/1.2) * 100) / 100   +" €"}</div>
                <div id="textVAT">Z toho DPH</div>
                <div id="totalPriceVAT">${Math.round((totalSum*0.2) * 100) / 100   +" €"}</div>
                <div id="textWithVAT">Celkom s DPH</div>
                <div id="totalPriceInBasketWithVAT">${totalSum   +" €"}</div>
            `
            
            itemsInBasket.splice(i, 1);

            localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
            itemInBasket.removeChild(itemInBasket.children[i]);
            
        }


    }

}