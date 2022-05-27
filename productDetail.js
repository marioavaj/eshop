
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    
    
    
    fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {

      for (let i = 0; i < json.length; i++) {
              
        if(json[i]["ID"] == id){
            

            let productDetailWrapper = document.getElementById("productDetailWrapper");
            var CATEGORY_ID = json[i]["CATEGORY_ID"];
            var PRODUCT_NAME = json[i]["PRODUCT_NAME"];
            var FirstWord = json[i].PRODUCT_NAME.split(" ")[0]

            
           productDetailWrapper.innerHTML=

           `<img id="IMAGE_SRC" src= ${json[i]["IMAGE_SRC"]} alt="">`+
           `<div id="PRODUCT_NAME"> ${json[i]["PRODUCT_NAME"]}</div>`+
          `<div id="ID"><span class = "productdetailSpan">Kód</span><br>${json[i]["ID"]}</div>`+
          `<div id="AVAILABILITY"><span class = "productdetailSpan">Dostupnosť</span><br> ${json[i]["AVAILABILITY"]}</div>`+
          `<div id="PRICE"><span class = "productdetailSpan">Cena bez DPH</span><br>${json[i]["PRICE"]}</div>`+
          `<div id="PRICE_WITH_VAT"><span class = "productdetailSpan">Cena s DPH</span><br>${json[i]["PRICE_WITH_VAT"]}</div><br>`+
          `<div id="DESCRIPTION"><span class = "productdetailSpan">Popis:</span><br> ${json[i]["DESCRIPTION"]}</div>`+
          `<button id="BASKET">Vlož do košíka</button>`;  }

          var FirstWorldFind = json[i].PRODUCT_NAME.split(" ")[0]
            
          
           if(FirstWorldFind == FirstWord){
            
            console.log(FirstWorldFind);
            console.log(FirstWord);
            
            let relatedProductWrapper = document.querySelector('.relatedProductsWrapper')

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
        `<a id="productDetail" href= "product.html?id=${json[i].ID}">Detail</a>`;}
  
    

          

    }
});

