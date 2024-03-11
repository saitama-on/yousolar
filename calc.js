let mounting = document.getElementById("mounting");
let panel = document.getElementById("panel");
let capacity = document.getElementById("capacity");
let get_price_btn = document.getElementById("get_price_btn");
let final_price = document.getElementById("final_price");

let config = document.getElementById("configurator");




get_price_btn.addEventListener("click", () =>{

    const price = parseInt(mounting.value) + parseInt(panel.value) + parseInt(capacity.value);
    final_price.textContent = "₹"+price+" estd.";
    
})