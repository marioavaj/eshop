fetch("./categories.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      let tree = document.getElementById("tree");
      tree.innerHTML +=
        `<a href="#" class="sideMenu"><i class="fa-solid fa-angle-right"></i>` + `  `+ json[i].CATEGORY_NAME +`<br>`+`</a>`+ `<div id="spaceCategory">.</div>`;
    }
  });

fetch("./products.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < 15; i++) {
      let item = document.querySelector(".productsWrapper");
      let randomItem = Math.floor(Math.random() * (json.length - 1));
      let id = json[randomItem].ID;
      let price = parseInt(json[i]["PRICE_WITH_VAT"]);
            let freeDelivery="";
            if (price>29){
                freeDelivery = "Doprava zdarma"
            }

      item.innerHTML +=
        `<div class="items">` +
        `<h1 class = "productName">` +
        json[randomItem].PRODUCT_NAME +
        `</h1>` +
        `<img class="imgProduct" src="` +
        json[randomItem].IMAGE_SRC +
        `" alt="" />` +
        `<div class="description">` +
        json[randomItem].DESCRIPTION +
        `</div>` +
        `<br>` +
        `<p id="availability">` +
        json[randomItem].AVAILABILITY +
        `</p>` +
        `<span id="price">` +
        json[randomItem].PRICE_WITH_VAT +
        `<span id="dph"> €</span></span>` +
        `<a id="productDetail" href= "product.html?id=${json[randomItem].ID}">Detail</a>`;
               
    }
  });

  
    

    
   
  