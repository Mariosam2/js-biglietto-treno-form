const userName = document.getElementById("name");
const surname = document.getElementById("surname");
const ageGroup = document.getElementById("ageGroup");
const price = document.getElementById("price");

userName.innerHTML = localStorage.getItem("userName");
surname.innerHTML = localStorage.getItem("userSurname");
ageGroup.innerHTML = localStorage.getItem("ageGroup");
price.innerHTML = `${localStorage.getItem("price")}&euro;`;