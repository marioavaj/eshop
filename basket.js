var itemInBasket = document.querySelector("#ItemBasketWrapperGrid");
var lsData = localStorage.getItem("basketInLocalStorage");
var itemsInBasket = JSON.parse(lsData);
var totalPrice = 0;

/**Vypise polozky z kosika z ls */
for (i = 0; i < itemsInBasket.length; i ++) {

    let sum = parseInt(itemsInBasket[i]["AMOUNT"]) * parseFloat(itemsInBasket[i]["PRICE_WITH_VAT"]).toFixed(2);
    itemsInBasket[i].TOTAL = sum;
    localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
    totalPrice = totalPrice + sum;
    itemInBasket.innerHTML += `
<button onclick="deleteItemFromBasket(${
        itemsInBasket[i]["ID"]
    })"   class="deleteItemFromBasket">X</button>    
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
        itemsInBasket[i]["PRICE"]
    }</div>
            <div class="pricewithBasket">${
        itemsInBasket[i]["PRICE_WITH_VAT"]
    }</div>
            <div class="sumInRowBasket">${sum}</div>`;
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


    let amounts = document.querySelectorAll(`#ItemBasketWrapperGrid > .increaseCountBasket`);

    let newSumChange = document.querySelectorAll(`#ItemBasketWrapperGrid > .sumInRowBasket`);


    let indexOfItem = [].indexOf.call(amounts, e.target); // cislo indexu polozky v kosiku
    var amountChanged = amounts[indexOfItem].value; // pocet ks v kosiku
    console.log(amountChanged);


    let newSum = parseInt(amountChanged) * itemsInBasket[indexOfItem]["PRICE_WITH_VAT"];

    amounts[indexOfItem].value = amountChanged;

    newSumChange[indexOfItem].innerText = newSum.toFixed(2);
    itemsInBasket[indexOfItem]["AMOUNT"] = amountChanged;

    localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));


});
/**Vymazanie jednej polozky z kosika */

var nodes = document.querySelectorAll('.deleteItemFromBasket');

for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function (index) {
        var indexOfDeleteItem = index;
        console.log(indexOfDeleteItem);


    }.bind(this, i));
}


/** Celkova cena objednavky 

amount.addEventListener("onchange", (e)=> {

let priceWithVat = document.querySelector("#totalPriceInBasketWithVAT");
priceWithVat.innerText = 
`<div id="totalPriceInBasketWrapper">

                <div id="textWithoutVAT">Celkom bez DPH</div>

                <div id="totalPriceInBasketWithoutVAT">10.00</div>

                <div id="textVAT">Z toho DPH</div>

                <div id="totalPriceVAT">2.00</div>

                <div id="textWithVAT">Celkom s DPH</div>

                <div id="totalPriceInBasketWithVAT">${totalPrice}</div>
            </div>`

        })
*/


/** vymazanie jednej polozky z kosika */


/**vymazanie vsetkych poloziek z kosika */
function deleteItemsFromBasket() {
    let message = confirm("Naozaj chcete vymazať všetky položky z košíka?");

    if (message) {
        itemsInBasket = [];
        localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
        itemInBasket.innerHTML = "";
        document.getElementById("h1InBasket").innerHTML = "Váš košík je prázdny";
    }
}
