
let itemInBasket = document.querySelector("#ItemBasketWrapperGrid");
let lsData = localStorage.getItem("basketInLocalStorage");
let itemsInBaket = JSON.parse(lsData)

for(i=0;i<itemsInBaket.length; i++){

    let Sum = parseInt(itemsInBaket[i]["AMOUNT"])* parseFloat(itemsInBaket[i]["PRICE_WITH_VAT"]).toFixed(2);

itemInBasket.innerHTML+=`
<input class="cancelItemFromBasket" type="checkbox">    
            <img class="imageInBasket" src=${itemsInBaket[i]["IMG"]} alt="">
            <div class="NameItemInBasket">${itemsInBaket[i]["NAME"]}</div>
            <input class="increaseCountBasket" type="number" value="${itemsInBaket[i]["AMOUNT"]}" min="1" max="999">
            <div class="pricewithoutBasket">${itemsInBaket[i]["PRICE"]}</div>
            <div class="pricewithBasket">${itemsInBaket[i]["PRICE_WITH_VAT"]}</div>
            <div class="sumInRowBasket">${Sum}</div>`;

}

