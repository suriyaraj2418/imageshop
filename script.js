const form = document.getElementById("form");
const data = [];
const product = {};
const display=document.querySelector(".display")
display.innerHTML=""
var i = 0;

document.addEventListener("submit", (event) => {
  event.preventDefault();

  const productname = document.getElementById("product_name").value;
  const productid = document.getElementById("product_id").value;
  const productimage = document.getElementById("product_image").value;
  addtoproduct(productname, productid, productimage);
  form.reset();
});

function addtoproduct(a, b, c) {

  if (data.includes(a)) {
    console.log(a + "is available");
  } else {
    data.push(a);
    product[i++] =  { productname: a, prodcutid: b, productimage: c };
    console.log(product);
    var card=document.createElement("div")
    card.innerHTML=`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${c} alt="Card image cap">
    <div class="card-body">
   
      <h5 class="card-title">${a}</h5>
      <p class="card-text">${b}</p>
      <button type="button" id = ${b} class="btn btn-primary" onclick="del(this)">REMOVE</button>
    </div>
  </div>`
  display.appendChild(card)
  console.log(document.querySelector("button"))
  }
}


function del(e){
var x=e.parentNode
console.log(x.parentNode.remove())
}