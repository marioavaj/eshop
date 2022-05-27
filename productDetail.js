
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    
    
    
    fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {

      for (let i = 0; i < json.length; i++) {
              
        if(json[i]["ID"] == id){
            console.log(id);
            console.log(json[i]["ID"]);

            let productDetailWrapper = document.getElementById("productDetailWrapper");

           productDetailWrapper.innerHTML=

           `<img id="IMAGE_SRC" src= ${json[i]["IMAGE_SRC"]} alt="">`+
           `<div id="PRODUCT_NAME"> ${json[i]["PRODUCT_NAME"]}</div>`+
          `<div id="ID"><span class = "productdetailSpan">Kód</span><br>${json[i]["ID"]}</div>`+
          `<div id="AVAILABILITY"><span class = "productdetailSpan">Dostupnosť</span><br> ${json[i]["AVAILABILITY"]}</div>`+
          `<div id="PRICE"><span class = "productdetailSpan">Cena bez DPH</span><br>${json[i]["PRICE"]}</div>`+
          `<div id="PRICE_WITH_VAT"><span class = "productdetailSpan">Cena s DPH</span><br>${json[i]["PRICE_WITH_VAT"]}</div><br>`+
          `<div id="DESCRIPTION"><span class = "productdetailSpan">Popis:</span><br> ${json[i]["DESCRIPTION"]}</div>`+
          `<button id="BASKET">Vlož do košíka</button>`;
          
          


        }
    }
})