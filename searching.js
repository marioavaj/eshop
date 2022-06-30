function searching() {
  /**nacitanie retazca od uzivatela */
  var whatSearching = document.getElementById("search").value ;

  whatSearching = whatSearching.toLowerCase();

  /**vyhladanie v produktoch v JSON */

  fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {
      let count = 0;
      let whatFinded;
      let searchResults = document.querySelector(".productsWrapper");
      searchResults.innerHTML = ` `;
      for (let i = 0; i < json.length; i++) {
        let whereSearch = json[i].PRODUCT_NAME;
        whereSearch = whereSearch.toLowerCase();

        whatFinded = whereSearch.match(whatSearching);

        if (whatFinded != null) {
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
    
}

function searchingMobil() {
  /**nacitanie retazca od uzivatela */
   whatSearching = document.getElementById("inputSearchMobil").value;
    
  

  whatSearching = whatSearching.toLowerCase();

  /**vyhladanie v produktoch v JSON */

  fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {
      let count = 0;
      let whatFinded;
      let searchResults = document.querySelector(".productsWrapper");
      searchResults.innerHTML = ` `;
      for (let i = 0; i < json.length; i++) {
        let whereSearch = json[i].PRODUCT_NAME;
        whereSearch = whereSearch.toLowerCase();

        whatFinded = whereSearch.match(whatSearching);

        if (whatFinded != null) {
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
    
}





function categoryList(catName) {
  const idArray = [];

  fetch("./categories.json")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        let whereSearch = json[i].CATEGORY_PATH;

        let whatFinded = whereSearch.match(catName);
        if (whatFinded != null) {
          idArray.push(json[i]["-ID"]);
        }

        if (json[i].hasOwnProperty("CATEGORIES")) {
          for (let j = 0; j < json[i].CATEGORIES.CATEGORY.length; j++) {
            whereSearch = json[i].CATEGORIES.CATEGORY[j].CATEGORY_PATH;

            whatFinded = whereSearch.match(catName);
            if (whatFinded != null) {
              idArray.push(json[i].CATEGORIES.CATEGORY[j]["-ID"]);
            }

            if (json[i].CATEGORIES.CATEGORY[j].hasOwnProperty("CATEGORIES")) {
              for (
                let k = 0;
                k < json[i].CATEGORIES.CATEGORY[j].CATEGORIES.CATEGORY.length;
                k++
              ) {
                whereSearch =
                  json[i].CATEGORIES.CATEGORY[j].CATEGORIES.CATEGORY[k]
                    .CATEGORY_PATH;

                whatFinded = whereSearch.match(catName);
                if (whatFinded != null) {
                  idArray.push(
                    json[i].CATEGORIES.CATEGORY[j].CATEGORIES.CATEGORY[k]["-ID"]
                  );
                }
              }
            }
          }
        }
      }
    });

  fetch("./products.json")
    .then((response) => response.json())
    .then((json) => {
      let count = 0;

      const newIdArray = " " + idArray.toString().replaceAll(",", " ");
      console.log("V tomto stringu " + newIdArray);
      let searchResults = document.querySelector(".productsWrapper");
      console.log(searchResults);
      searchResults.innerHTML = ` `;
      for (let i = 0; i < json.length; i++) {
        let whatIsSearch = json[i]["CATEGORY_ID"];
        whatIsSearch = whatIsSearch.toString();
        whatIsFinded = newIdArray.search("\\b" + whatIsSearch + "\\b");

        if (whatIsFinded != -1) {
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
}
