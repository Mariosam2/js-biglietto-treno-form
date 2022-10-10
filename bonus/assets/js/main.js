const form = document.getElementById("ticketForm");
const inputs = document.getElementById("ticketForm").elements;
const cancel = document.getElementById("cancel");
const userName = document.getElementById("name");
const surname = document.getElementById("surname");
const ageGroup = document.getElementById("ageGroup");
const wagonNumber = document.getElementById('cabin');
const cpCode = document.getElementById('CP');
const price = document.getElementById("price");
let discount = 20;
reset();
let innerWagonNumber = Math.floor(Math.random()*10) + 1;
let innerCpCode = Math.floor(Math.random()*99000);
wagonNumber.innerHTML = innerWagonNumber;
cpCode.innerHTML = innerCpCode;
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
function getAgeGroup (value){
    let innerText;
    if (value == "underAge") {
        discount = 20;
        innerText = "Minorenne"
        return innerText;
        
        
    } else if (value == "overAge") {
        discount = 40
        innerText = "Over 65"
        return innerText;
        
        
    }  else {
        discount = 0;
        innerText = "Nessuno Sconto"
        return innerText;
        

    }
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
    wagonNumber.innerHTML = "";
    cpCode.innerHTML = "";
    price.innerHTML = "0.00&euro;";
}

// Saving input values
inputs["userName"].addEventListener("input", ()=>{
    if(!inputs["userName"].value.match(/^[A-Z]+$/gi)){
        inputs["userName"].classList.add("error")
    } else {
        inputs["userName"].classList.remove("error")
    }
    userName.innerHTML = inputs["userName"].value;
})


inputs["userSurname"].addEventListener("input", ()=>{
    if(!inputs["userSurname"].value.match(/^[A-Z]+$/gi)){
        inputs["userSurname"].classList.add("error")
    } else {
        inputs["userSurname"].classList.remove("error")
    }
    surname.innerHTML = inputs["userSurname"].value;
})

inputs["distance"].addEventListener("input", ()=> {
    if(!Number(inputs["distance"].value)){
        inputs["distance"].classList.add("error");
        
    } else {
        inputs["distance"].classList.remove("error");
    }
    
    price.innerHTML = getPrice(inputs["distance"].value) + "&euro;"  
})

inputs["userAge"].addEventListener("input", ()=>{
    ageGroup.innerHTML =  getAgeGroup(inputs["userAge"].value);
    price.innerHTML = getPrice(inputs["distance"].value) + "&euro;"
})

form.addEventListener("reset", () => {
    reset();
});

// Form validation
form.addEventListener("submit", (event) => {
    if(!Number(inputs["distance"].value)) {
        event.preventDefault();
        
    }
    if (!(inputs["userName"].value.match(/^[A-Z]+$/gi) && inputs["userSurname"].value.match(/^[A-Z]+$/gi))){
        event.preventDefault()
    }
    localStorage.setItem("userName", inputs["userName"].value);
    localStorage.setItem("userSurname", inputs["userSurname"].value);
    localStorage.setItem("ageGroup", getAgeGroup(inputs["userAge"].value));
    localStorage.setItem("price", getPrice(inputs["distance"].value));
    localStorage.setItem("wagonNumber", innerWagonNumber);
    localStorage.setItem("cpCode", innerCpCode);

    
});


