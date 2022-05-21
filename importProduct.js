let http = new XMLHttpRequest();
http.open("get", "./categories.json", true);
http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText)
    categoryTree = JSON.parse(this.responseText);
    let output = ``;
    for (let item of categoryTree) {
      output += `<a href="#" class="sideMenu">${item.CATEGORY_NAME}</a><br>`;
    }
    document.querySelector("tree").innerHTML = output;
  }
};
