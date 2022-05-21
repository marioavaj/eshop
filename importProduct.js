fetch("./categories.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      let tree = document.getElementById("tree");
      tree.innerHTML +=
        `<a href="#" class="sideMenu">` + json[i].CATEGORY_NAME + `</a><br>`;
    }
  });

fetch("./products.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < 10; i++) {
      console.log("som v loope produkty");
      let item = document.getElementById("wrapper");
      let randomItem = Math.floor(Math.random() * (json.length-1));

      item.innerHTML +=
       
        `<div class="items">`   +     `<h1>` +
        json[randomItem].PRODUCT_NAME +
        `</h1>` +
        `<img src="` +
        json[randomItem].IMAGE_SRC +
        `" alt="" />` +
        `<div class="text">` +
        json[randomItem].DESCRIPTION +
        `<br>`+`<br>`+`<span>` +
        json[randomItem].PRICE_WITH_VAT +
        `</span><br>`+`<img src="img/basketbutton.png" style="width: 3.5em; margin: auto" alt=""></div>`;
    }
  });
