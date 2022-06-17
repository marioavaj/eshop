function searching(){

/**nacitanie retazca od uzivatela */   
var whatSearching = (document.getElementById("search").value);
whatSearching = whatSearching.toLowerCase();


//var whatSearching = document.getElementById("search").value;


/**rozdelenie viacslovneho retazca na samostatne retazce*/



/**uprava retazcov pre vstup do vzhladavania pomocou regex */


/**vyhladanie v produktoch v JSON */

fetch("./products.json")
  .then((response) => response.json())
  .then((json) => { 
    var count = 0;
    var whatFinded;
    let searchResults = document.querySelector(".productsWrapper");
    searchResults.innerHTML=` `;
    for (let i = 0; i < json.length; i++) {
        whereSearch =json[i].PRODUCT_NAME ;
        whereSearch = whereSearch.toLowerCase();
        
         whatFinded = whereSearch.match(whatSearching);
         
        
      if (whatFinded!=null) {

        

        if (count < 50) {
          count++;
         
          searchResults.innerHTML +=
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


/**vypis vzhladanych produktov na obrayovku */


}

