
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    var FirstWord="";
    var FirstWorldFind='';
    
    
    
    fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {

      for (let i = 0; i < json.length; i++) {
       
        if(json[i]["ID"] == id){
            FirstWorldFind = json[i].PRODUCT_NAME.split(" ")[0];
            let price = parseInt(json[i]["PRICE_WITH_VAT"]);
            console.log(price)
            let freeDelivery=`Nad 30 € doprava zdarma`;
            if (price>29){
                freeDelivery = `Doprava zdarma`;

                
            } 

            let productDetailWrapper = document.getElementById("productDetailWrapper");
            
           productDetailWrapper.innerHTML=
           `<img id="IMAGE_SRC" src= ${json[i]["IMAGE_SRC"]} alt="">`+
           `<button id="freeDelivery"> ${freeDelivery}</button>`+
           `<div id="PRODUCT_NAME"> ${json[i]["PRODUCT_NAME"]}</div>`+
          `<div id="ID"><span class = "productdetailSpan">Kód: </span>${json[i]["ID"]}</div>`+
          `<p id="AVAILABILITY">${json[i]["AVAILABILITY"]}</p>`+
          `<div id="PRICE"><span class = "productdetailSpan">Cena bez DPH</span><br>${json[i]["PRICE"]} €</div>`+
          `<div id="PRICE_WITH_VAT"><span class = "productdetailSpan" style="font-size: 0.4em;" >Cena s DPH</span><br>${json[i]["PRICE_WITH_VAT"]} €</span></div><br>`+
          `<div id="DESCRIPTION"><span class = "productdetailSpan">Popis:</span><br> ${json[i]["DESCRIPTION"]}</div>`+
          `<button id="BASKET">Vlož do košíka</button>`;}   

    }
});


fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {
        var count = 0;
        for (let i = 0; i < json.length; i++) {

            FirstWord = json[i].PRODUCT_NAME.split(" ")[0]
            
           if(FirstWorldFind == FirstWord){
               
            
               if (count<15){
                   count++;
                     
            let relatedProductWrapper = document.querySelector('.relatedProductsWrapper');

            
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
               
    }
});