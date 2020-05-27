function total(){
    let qty = document.getElementById("qty")
    let price = document.getElementById("price")
    let total = document.getElementById("total")
     total.value = qty.value * price.value;
     total.innerHTML = total.value
}