var url = new URL(window.location.href);
var id = url.searchParams.get("id");
var FirstWord = "";
var FirstWorldFind = "";
var inBasket= [];




fetch("./products.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      if (json[i]["ID"] == id) {
        FirstWorldFind = json[i].PRODUCT_NAME.split(" ")[0];
        var price = parseFloat(json[i]["PRICE_WITH_VAT"]);
        var priceWithoutVat = parseFloat(json[i]["PRICE"]);

        var freeDelivery = `Nad 30 € doprava zdarma`;
        if (price >= 30) {
          freeDelivery = `Doprava zdarma`;
        }

        let productDetailWrapper = document.getElementById(
          "productDetailWrapper"
        );

        productDetailWrapper.innerHTML =
          `<img id="IMAGE_SRC" src= ${json[i]["IMAGE_SRC"]} alt="">` +
          `<button id="freeDelivery"> ${freeDelivery}</button>` +
          `<div id="PRODUCT_NAME"> ${json[i]["PRODUCT_NAME"]}</div>` +
          `<div id="ID"><span class = "productdetailSpan">Kód: </span>${json[i]["ID"]}</div>` +
          `<p id="AVAILABILITY">${json[i]["AVAILABILITY"]}</p>` +
          `<div id="PRICE"><span class = "productdetailSpan">Cena bez DPH</span><br>${json[i]["PRICE"]} €</div>` +
          `<div id="PRICE_WITH_VAT"><span class = "productdetailSpan" style="font-size: 0.4em;" >Cena s DPH</span><br>${price} €</div><br>` +
          `<div id="DESCRIPTION"><span class = "productdetailSpan">Popis:</span><br> ${json[i]["DESCRIPTION"]}</div>` +
          `<button id="BASKET" onclick="">Vlož do košíka</button>` +
          `<input id="INPUT" type="number" value="1" min="1" max="999">`;
          
          document.getElementById("BASKET").onclick = function() {addToBasket()};
          function addToBasket (){  
              
            
            let ls = localStorage.getItem("basketInLocalStorage");
            inBasket = JSON.parse(ls);
            if(inBasket ==undefined){
            inBasket = [];
            console.log(inBasket);
            }            

            
                    
                    inBasket.push({"ID": json[i]["ID"], "NAME": json[i]["PRODUCT_NAME"],  "AMOUNT": element.value, "PRICE":json[i]["PRICE"], "PRICE_WITH_VAT": json[i]["PRICE_WITH_VAT"]  });
                    console.log(inBasket);
                    
                    localStorage.setItem("basketInLocalStorage",JSON.stringify(inBasket) );
                    };

        var element = document.getElementById("INPUT");

        element.addEventListener("input", () => {
          if (element.value == "") {
            element.value = 1;
          }

          console.log(element.value);

          let totalPriceWithVAT = (price * element.value).toFixed(2);
          let totalPriceWithoutVAT = (priceWithoutVat * element.value).toFixed(
            2
          );
          if (totalPriceWithVAT == 0) {
            totalPriceWithVAT = price * 1;
            totalPriceWithoutVAT = priceWithoutVat * 1;
          }

          document.querySelector(`#PRICE`).innerHTML = ``;
          document.querySelector(
            `#PRICE`
          ).innerHTML = `<span class = "productdetailSpan">Cena bez DPH</span><br>${totalPriceWithoutVAT} €`;

          document.querySelector(`#PRICE_WITH_VAT`).innerHTML = ``;
          document.querySelector(
            `#PRICE_WITH_VAT`
          ).innerHTML = `<span class = "productdetailSpan" style="font-size: 0.4em;" >Cena s DPH</span><br>${totalPriceWithVAT} €`;

          if (totalPriceWithVAT > 29) {
            document.querySelector(`#freeDelivery`).innerHTML = ``;
            document.querySelector(
              `#freeDelivery`
            ).innerHTML = `Doprava zdarma`;
          } else
            document.querySelector(
              `#freeDelivery`
            ).innerHTML = `Nad 30 € doprava zdarma`;
        });
      }
    }
  });

fetch("./products.json")
  .then((response) => response.json())
  .then((json) => {
    var count = 0;
    for (let i = 0; i < json.length; i++) {
      FirstWord = json[i].PRODUCT_NAME.split(" ")[0];

      if (FirstWorldFind == FirstWord) {
        if (count < 15) {
          count++;

          let relatedProductWrapper = document.querySelector(
            ".relatedProductsWrapper"
          );

          relatedProductWrapper.innerHTML +=
            `<div class="items">` +
            `<h1 class = "productName">` +
            json[i].PRODUCT_NAME +
            `</h1>` +
            `<img class="imgProduct" src="` +
            json[i].IMAGE_SRC +
            `" alt="" />` +
            `<div class="description">` +
            json[i].DESCRIPTION +
            `</div>` +
            `<br>` +
            `<p id="availability">` +
            json[i].AVAILABILITY +
            `</p>` +
            `<span id="price">` +
            json[i].PRICE_WITH_VAT +
            `<span id="dph"> €</span></span>` +
            `<a id="productDetail" href= "product.html?id=${json[i].ID}">Detail</a>`;
        }
      }
    }
  });

  

