/**import kategorii */
let tree = document.getElementById("tree");
fetch("./categories.json")
  .then((response) => response.json())
  .then((json) => {
    let s = "";

    for (let i = 0; i < json.length; i++) {
      s += `<li href="#"><a href="">${json[i].CATEGORY_NAME}</a>`;
      s += "<ul>"; // otvorime zoznam

      if (json[i].hasOwnProperty("CATEGORIES")){      
      for (let j = 0; j < json[i].CATEGORIES.CATEGORY.length; j++) {
        s += `<li   ><a href="">${json[i].CATEGORIES.CATEGORY[j].CATEGORY_NAME}</a>`;

        if (json[i].CATEGORIES.CATEGORY[j].hasOwnProperty("CATEGORIES")) {
          s += "<ul>"; 
          for (let k = 0; k < json[i].CATEGORIES.CATEGORY[j].CATEGORIES.CATEGORY.length; k++) {
            s += `<li href="#"><a href="">${json[i].CATEGORIES.CATEGORY[j].CATEGORIES.CATEGORY[k].CATEGORY_NAME}</a></li>`;
          }
          s += `</ul></li>`; 
        }
      }
      s += `</ul></li>`; // zatvorime zoznam
    }
  }
    tree.innerHTML = s;
  });

/**import 15 nahodnych produktov na hlavnu stranu */  
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

  
    

    
   
  