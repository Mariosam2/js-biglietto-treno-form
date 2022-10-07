const inputs = document.getElementById("ticketForm").elements;
const userName = document.getElementById("name");
const surname = document.getElementById("surname");
const ageGroup = document.getElementById("ageGroup");
const cpCode = document.getElementById("CP");
const price = document.getElementById("price");
let discount = 0;

function getPrice(value) {
    let price = value * 0.21;
    let discountedPrice = (price/100)* discount;
    price = price - discountedPrice;
    price = price.toFixed(2);
    return price.toString();
}


inputs["userName"].addEventListener("input", ()=>{
    userName.innerHTML = inputs["userName"].value;
})


inputs["userSurname"].addEventListener("input", ()=>{
    surname.innerHTML = inputs["userSurname"].value;
})

inputs["distance"].addEventListener("input", ()=> {
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



inputs.addEventListener("submit", ()=> {
    inputs.foreach((input)=>{
        input.value = "";
    })
    return false;
})




/* inputs["generate"].addEventListener("click", () => {
    
      inputs["userName"].value;
    
})
 */



