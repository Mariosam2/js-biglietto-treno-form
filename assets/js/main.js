const form = document.getElementById("ticketForm");
const inputs = document.getElementById("ticketForm").elements;
const cancel = document.getElementById("cancel");
const userName = document.getElementById("name");
const surname = document.getElementById("surname");
const ageGroup = document.getElementById("ageGroup");
const cpCode = document.getElementById("CP");
const price = document.getElementById("price");
let discount = 0;
reset();
// calculation for the price
function getPrice(value) {
    let price = value * 0.21;
    let discountedPrice = (price/100)* discount;
    price = price - discountedPrice;
    if(!Number(price)){
        price = 0;
    }
    price = price.toFixed(2);
    return price.toString();
}
// resetting the state of the page as default
function reset () {
    for (let [key, value] of Object.entries(inputs)){
        if(value.type == "text"){
            value.value = "";
        } if (value.type == "select-one"){
            value.value = value[0].value;
        }
        
    }
    userName.innerHTML = "";
    surname.innerHTML = "";
    ageGroup.innerHTML = "Minorenne"
    price.innerHTML = "0.00&euro;";
}

// Saving input values
inputs["userName"].addEventListener("input", ()=>{
    userName.innerHTML = inputs["userName"].value;
})


inputs["userSurname"].addEventListener("input", ()=>{
    surname.innerHTML = inputs["userSurname"].value;
})

inputs["distance"].addEventListener("input", ()=> {
    if(!Number(inputs["distance"].value)){
        inputs["distance"].classList.add("error");
        
    } else {
        inputs["distance"].classList.remove("error");
    }
       
    if (inputs["userAge"].value == "underAge") {
        discount = 20;
        
    } else if (inputs["userAge"].value == "overAge") {
        discount = 40;
        
    }  else {
        discount = 0;

    }
    price.innerHTML = getPrice(inputs["distance"].value) + "&euro;"
    
    
})

inputs["userAge"].addEventListener("input", ()=>{
    console.log(inputs["userAge"].value);
    if (inputs["userAge"].value == "underAge") {
        ageGroup.innerHTML = "Minorenne"
        discount = 20;
        
    } else if (inputs["userAge"].value == "overAge") {
        ageGroup.innerHTML = "Over 65"
        discount = 40
        
    }  else {
        ageGroup.innerHTML = "Nessuno sconto"
        discount = 0;

    }
    price.innerHTML = getPrice(inputs["distance"].value) + "&euro;"
})

cancel.addEventListener("click", ()=>{
    reset();
    

})

// Form validation


form.addEventListener("submit", (event) => {
    if(!Number(inputs["distance"].value)) {
        event.preventDefault();
        
    }
    
});


