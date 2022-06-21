var itemInBasket = document.querySelector("#ItemBasketWrapperGrid");
var lsData = localStorage.getItem("basketInLocalStorage");
var itemsInBasket = JSON.parse(lsData);
var totalSum;
var priceWithVat = document.querySelector("#totalPriceInBasket");
var totalSumWithoutVAT;
var vat;



/**Vypise polozky z kosika z ls */
for (i = 0; i < itemsInBasket.length; i++) {
  let sum =
    Math.round(
      parseInt(itemsInBasket[i]["AMOUNT"]) *
        parseFloat(itemsInBasket[i]["PRICE_WITH_VAT"]) *
        100
    ) / 100;
  localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));

  itemInBasket.innerHTML += `<div class = "item">
<img src="deleteIcon.jpg" onclick="deleteItemFromBasket(${
    itemsInBasket[i]["ID"]
  })"   class="deleteItemFromBasket"></img>    
            <img class="imageInBasket" src=${itemsInBasket[i]["IMG"]} alt="">
            <div class="NameItemInBasket">${itemsInBasket[i]["NAME"]}</div>
            <input onclick = "valueChecker()" class="increaseCountBasket" type="number" value="${
              itemsInBasket[i]["AMOUNT"]
            }" min="1" max="999">
            <div class="pricewithoutBasket">${
              itemsInBasket[i]["PRICE"] + " €"
            }</div>
            <div class="pricewithBasket">${
              itemsInBasket[i]["PRICE_WITH_VAT"] + " €"
            }</div>
            <div class="sumInRowBasket">${sum + " €"}</div> </div>`;

  totalSum = 0;
  totalSumWithoutVAT = 0;
  vat = 0;

  for (let i = 0; i < itemsInBasket.length; i++) {
    totalSum =
      Math.round(
        (totalSum +
          parseInt(itemsInBasket[i]["AMOUNT"]) *
            parseFloat(itemsInBasket[i]["PRICE_WITH_VAT"])) *
          100
      ) / 100;
  }
  

  var totalSumWithoutVAT = Math.round((totalSum / 1.2) * 100) / 100;
  vat = Math.round((totalSum - totalSumWithoutVAT) * 100) / 100;

  localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
  localStorage.setItem("totalSum", JSON.stringify(totalSum));

  priceWithVat.innerHTML = `
                        <div id="textWithoutVAT">Celkom bez DPH</div>
                        <div id="totalPriceInBasketWithoutVAT">${
                          totalSumWithoutVAT + " €"
                        }</div>
                        <div id="textVAT">Z toho DPH</div>
                        <div id="totalPriceVAT">${vat + " €"}</div>
                        <div id="textWithVAT">Celkom s DPH</div>
                        <div id="totalPriceInBasketWithVAT">${
                          totalSum + " €"
                        }</div>
                        
                    `;
}



var deliveryPriceWrapper = document.getElementById("deliveryBasketWprapper");


deliveryFree(totalSum);

function deliveryFree(totalSum){

  /**Zobrazit alebo zrusit dopravu podla ceny objednavku */
 
  
if (totalSum >= 30){
 
  
deliveryPriceWrapper.innerHTML = 
`<img
          id="imgDelivery"
          src="./img/delivery.png"
          
          alt=""
        />
        <button id="freeDelivery" style= "top: 1.9em">Doprava zdarma</button>`

}else 

deliveryPriceWrapper.innerHTML = 
`<img
          id="imgDelivery"
          src="./img/delivery.png"
          
          alt=""
        />

        <input
          onchange="getValue(this)"
          value="5"
          type="radio"
          class="deliveryStyle"
          name="delivery"
          id="kurier"
        />
        <label for="delivery" class="deliveryStyle" id="kurierLabel"
          ><b>Kuriér</b></label
        >
        <div class="deliveryStyle"><i>Dodacia doba 1 pracovný deň</i></div>
        <div class="deliveryPriceStyle">5.00 €</div>

        <input
          onchange="getValue(this)"
          value="4"
          type="radio"
          class="deliveryStyle"
          name="delivery"
          id="posta"
        />
        <label for="delivery" class="deliveryStyle" id="postaLabel"
          ><b>Slovenká pošta</b></label
        >
        <div class="deliveryStyle"><i>Dodacia doba 3 pracovné dni</i></div>
        <div class="deliveryPriceStyle">4.00 €</div>

        <input
          onchange="getValue(this)"
          value="2"
          type="radio"
          class="deliveryStyle"
          name="delivery"
          id="zasielkovna"
        />
        <label for="delivery" class="deliveryStyle" id="zasielakovnaLabel"
          ><b>Zásielkovňa</b></label
        >
        <div class="deliveryStyle"><i>Vyzdvihnutie na odbernom mieste</i></div>
        <div class="deliveryPriceStyle">2.00 €</div>

        <input
          onchange="getValue(this)"
          value="1"
          type="radio"
          class="deliveryStyle"
          name="delivery"
          id="OsobnyOdber"
        />
        <label for="delivery" class="deliveryStyle" id="osobnyOdberLabel"
          ><b>Osobný odber</b></label
        >
        <div class="deliveryStyle"><i>Odber v mieste sídla</i></div>
        <div class="deliveryPriceStyle">1.00 €</div>`

      }








function valueChecker() {
  let valueCheck = document.querySelectorAll(".increaseCountBasket").value;

  if (valueCheck == "" || valueCheck == 0) {
    element.value = 1;
  }
}

/**Pripocitanie ceny dopravy */
var previous;
var deliveryPrice;
function getValue(radio) {
  let totalSumElement = document.getElementById("totalPriceInBasketWithVAT");
  let totalPriceVATElement = document.getElementById("totalPriceVAT");
  let totalPriceInBasketWithoutVATElement = document.getElementById(
    "totalPriceInBasketWithoutVAT"
  );
  if (previous == undefined) {
    previous = 0;
  }



  totalSum = totalSum + parseInt(radio.value) - previous;
  localStorage.setItem("totalSum", JSON.stringify(totalSum));
  totalSumElement.innerText = Math.round(totalSum * 100) / 100 + " €";
  totalPriceVATElement.innerText =
    Math.round(totalSum * 0.2 * 100) / 100 + " €";
  totalPriceInBasketWithoutVATElement.innerText =
    Math.round((totalSum / 1.2) * 100) / 100 + " €";
  
  previous = parseInt(radio.value);
  deliveryPrice = radio.value;
  return deliveryPrice;
}

/** zmena ks v kosiku */
let parent = document.querySelector("#ItemBasketWrapperGrid");

parent.addEventListener("input", (e) => {
  let amounts = document.querySelectorAll(`.item > .increaseCountBasket`);
  let newSumChange = document.querySelectorAll(`.item > .sumInRowBasket`);

  let indexOfItem = [].indexOf.call(amounts, e.target); // cislo indexu polozky v kosiku
  var amountChanged = amounts[indexOfItem].value; // pocet ks v kosiku

  let newSum =
    parseInt(amountChanged) * itemsInBasket[indexOfItem]["PRICE_WITH_VAT"];

  amounts[indexOfItem].value = amountChanged;
  newSumChange[indexOfItem].innerText = Math.round(newSum * 100) / 100;
  itemsInBasket[indexOfItem]["AMOUNT"] = amountChanged;

  totalSum = 0;
  totalSumWithoutVAT = 0;
  vat = 0;

  for (let i = 0; i < itemsInBasket.length; i++) {
    totalSum =
      Math.round(
        (totalSum +
          parseInt(amounts[i].value) * itemsInBasket[i]["PRICE_WITH_VAT"]) *
          100
      ) / 100;
  }

  var totalSumWithoutVAT = Math.round((totalSum / 1.2) * 100) / 100;
  vat = Math.round((totalSum - totalSumWithoutVAT) * 100) / 100;

  localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
  localStorage.setItem("totalSum", JSON.stringify(totalSum));

  deliveryFree(totalSum);

  priceWithVat.innerHTML = `
                <div id="textWithoutVAT">Celkom bez DPH</div>
                <div id="totalPriceInBasketWithoutVAT">${
                  totalSumWithoutVAT + " €"
                }</div>
                <div id="textVAT">Z toho DPH</div>
                <div id="totalPriceVAT">${vat + " €"}</div>
                <div id="textWithVAT">Celkom s DPH</div>
                <div id="totalPriceInBasketWithVAT">${totalSum + " €"}</div>
                            `;
                            return totalSum;
});

/**vymazanie vsetkych poloziek z kosika */
function deleteItemsFromBasket() {
  let message = confirm("Naozaj chcete vymazať všetky položky z košíka?");

  if (message) {
    itemsInBasket = []; //vymaze polozky z ls
    localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
    localStorage.setItem("totalSum", JSON.stringify(0));
    itemInBasket.innerHTML = ""; //vymaze polozky z obrazovky

    priceWithVat.innerHTML = `
                <div id="textWithoutVAT">Celkom bez DPH</div>
                <div id="totalPriceInBasketWithoutVAT"></div>
                <div id="textVAT">Z toho DPH</div>
                <div id="totalPriceVAT"></div>
                <div id="textWithVAT">Celkom s DPH</div>
                <div id="totalPriceInBasketWithVAT"></div>
            `;

            deliveryPriceWrapper.innerHTML = "";
            
  }
  
}

/** vymazanie 1 polozky z kosika */
function deleteItemFromBasket(deleteItem) {
  totalSum = localStorage.getItem("totalSum");

  
  for (let i = 0; i < itemsInBasket.length; i++) {
    if (deleteItem == itemsInBasket[i]["ID"]) {
      totalSum =
        Math.round(
          (totalSum -
            parseInt(itemsInBasket[i].AMOUNT) *
              parseFloat(itemsInBasket[i].PRICE_WITH_VAT)) *
            100
        ) / 100;

      localStorage.setItem("totalSum", JSON.stringify(totalSum));

      priceWithVat.innerHTML = `
                <div id="textWithoutVAT">Celkom bez DPH</div>
                <div id="totalPriceInBasketWithoutVAT">${
                  Math.round((totalSum / 1.2) * 100) / 100 + " €"
                }</div>
                <div id="textVAT">Z toho DPH</div>
                <div id="totalPriceVAT">${
                  Math.round(totalSum * 0.2 * 100) / 100 + " €"
                }</div>
                <div id="textWithVAT">Celkom s DPH</div>
                <div id="totalPriceInBasketWithVAT">${totalSum + " €"}</div>
            `;

      itemsInBasket.splice(i, 1);

      localStorage.setItem(
        "basketInLocalStorage",
        JSON.stringify(itemsInBasket)
      );
      itemInBasket.removeChild(itemInBasket.children[i]);
      deliveryFree(totalSum);
    }
  }
}
function productInBasket() {
  if (itemsInBasket.length > 0) {
    document.querySelector("#topNavBasketIcon").style.color = "red";
  }
}


  
/**tlacidlo odosli objednavku */
function placeOrder() {
  
/** validacia formularov(doprava+adresa) */
var userName = document.formInBasket.firstname.value;
  var email = document.formInBasket.email.value;
  var address = document.formInBasket.address.value;
  var city = document.formInBasket.city.value;
  var zip = document.formInBasket.zip.value;
  var state = document.formInBasket.state.value;

  
  /**Validacia zadania dopravy */
  if (totalSum <= 30){
    if (
    !(
      document.getElementById("kurier").checked ||
      document.getElementById("posta").checked ||
      document.getElementById("zasielkovna").checked ||
      document.getElementById("OsobnyOdber").checked
    )
  ) {
    alert("Zvoľte dopravu");
    return;
  }
} 
  /**validacia vyplnenia formularu */
    if (userName == null || userName == "") {
    alert("Vyplňte meno");
    return;
  } else if (email == null || email == "") {
    alert("Vyplňte email");
    return;
  } else if (address == null || address == "") {
    alert("Vyplňte adresu");
    return;
  } else if (city == null || city == "") {
    alert("Vyplňte mesto");
    return;
  } else if (zip == null || zip == "") {
    alert("Vyplňte PSČ");
    return;
  } else if (state == null || state == "") {
    alert("Vyplňte štát");
    return;
  }

  /** ulozenie dat z formularu */
  const customer = {
    name: userName,
    address: address,
    city: city,
    ZIP: zip,
    email: email,
    state: state,
  };

  /** Cislo objednavky */
  let orderID = localStorage.getItem("orderID");
  if (orderID == undefined) {
    orderID = 220000;
  }
  orderID = parseInt(orderID) + 1;
  localStorage.setItem("orderID", JSON.stringify(orderID));

  /** odoslanie objednavky do LocalSorage */
  const order = [];
  order.push({ orderID: orderID });
  order.push(customer);
  order.push({ DeliveryPrice: deliveryPrice });
  order.push(itemsInBasket);
  localStorage.setItem(orderID, JSON.stringify(order));

  /**sprava o odoslani objednavky */
  alert("Vašu objenávku sme zaevidovali pod číslom " + orderID);

  /**Vymazanie kosika */
  itemsInBasket = []; //vymaze polozky z ls
  localStorage.setItem("basketInLocalStorage", JSON.stringify(itemsInBasket));
  localStorage.setItem("totalSum", JSON.stringify(0));
  location.replace("emptyBasket.html")
}
