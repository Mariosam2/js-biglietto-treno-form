const inputs = document.querySelectorAll('input, select');
const button = document.getElementById('generate');
const cancel = document.getElementById('cancel');
const userAge = document.getElementById('userAge');
const userName = document.getElementById('name');
const ageGroup = document.getElementById('ageGroup');
const price = document.getElementById('price');
let discount = 20;

function reset (){
    inputs.forEach((input)=> {
        if (input.type == "text") {
            input.value = "";
        }
    })
    userName.innerHTML = "";
    price.innerHTML = "";
    ageGroup.innerHTML = "";
    userAge.value = userAge[0].value;
}

function setDiscount(value){
    if (value == "underAge") {
        discount = 20;
        
        
    } else if (value == "overAge") {
        discount = 40;
        
        
    }  else {
        discount = 0;
        

    }
}

function getAgeGroup (value){
    let innerText;
    if (value == "underAge") {
        innerText = "Minorenne"
        return innerText;
        
        
    } else if (value == "overAge") {
        innerText = "Over 65"
        return innerText;
        
        
    }  else {
        innerText = "Nessuno Sconto"
        return innerText;
        

    }
}

function getPrice(value) {
    let price = value * 0.21;
    let discountedPrice = (price/100)* discount;
    price = price - discountedPrice;
    price = price.toFixed(2);
    return price.toString();
}




button.addEventListener('click',()=>{
    setDiscount(userAge.value);
    inputs.forEach((input)=>{
        if(input.id == "userAge"){
            console.log(input.value);
            ageGroup.innerHTML = getAgeGroup(input.value);
        }
        if(input.id == "userName"){
        userName.innerHTML = input.value;
        }
        if(input.id == "distance"){
            price.innerHTML = getPrice(input.value);
        }
    })

})

cancel.addEventListener('click', ()=>{
    reset();
})

