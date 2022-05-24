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
      let item = document.getElementById("wrapper");
      let randomItem = Math.floor(Math.random() * (json.length - 1));

      item.innerHTML +=
        `<div class="items">` +
        `<h1>` +
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
        `<br>` +
        `<span id="price">` +
        json[randomItem].PRICE_WITH_VAT +
        `<span id="dph"> €</span></span>` +
        `<br>` +
        `<button id="productDetail" onclick="productDetail(`+ randomItem +`)">Detail</button>`+
        `<br>`+
        `<br>`;
        
    }
  });

  function productDetail(randomItem){
    //let product = window.location.href = "product.html"
    //let productInfo = product.getElementById("productWrapper");

    fetch("./products.json")
   .then((response) => response.json())
   .then((json) => console.log(json[randomItem].PRODUCT_NAME)
     
   
    
    
    )
   }
  