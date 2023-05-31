
let urlparams = new URLSearchParams(window.location.search);
let thisid = urlparams.get("uuid");
let thispet = JSON.parse(localStorage.getItem("new_card")).find((e) => e.uuid == thisid);
let loanamount = document.getElementById("loanAmount").value = thispet["pet_price"]

function calculateEMI() {
let loanAmount = document.getElementById("loanAmount").value;
let loanTenure = document.getElementById("loanTenure").value;

let emi = (loanAmount / loanTenure).toFixed(2);

window.localStorage.setItem("emi_amount", JSON.stringify(emi))
window.localStorage.setItem("months", JSON.stringify(loanTenure))

}
let emi_amount = JSON.parse(localStorage.getItem("emi_amount"));
let months = JSON.parse(localStorage.getItem("months"));

for(let i = 1; i <= months; i++){
	


// Create the card container
let card = document.createElement("div");
card.classList.add("card");

// Create the pet image element
let petImage = document.createElement("div");
petImage.classList.add("pet-image");

let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
img.alt = "Pet Image";
petImage.appendChild(img);

// Create the pet info element
let petInfo = document.createElement("div");
petInfo.classList.add("pet-info");

let petName = document.createElement("h2");
petName.classList.add("pet-name");
petName.textContent = "Pet Name";

// Create the amount and months element
let amountMonth = document.createElement("div");
amountMonth.classList.add("amount_month");

let amount = document.createElement("div");
amount.classList.add("amount");

let amountLabel = document.createElement("p");
amountLabel.textContent = "Amount : ";

let amountValue = document.createElement("p");
amountValue.classList.add("amount-value");
amountValue.innerText = emi_amount;
console.log(amount)


amount.appendChild(amountLabel);
amount.appendChild(amountValue);

let months = document.createElement("div");
months.classList.add("months");

let monthsLabel = document.createElement("p");
monthsLabel.textContent = "Month : ";

let monthsValue = document.createElement("p");
monthsValue.classList.add("months-value");
monthsValue.textContent = i;

months.appendChild(monthsLabel);
months.appendChild(monthsValue);

amountMonth.appendChild(amount);
amountMonth.appendChild(months);

petInfo.appendChild(petName);
petInfo.appendChild(amountMonth);

// Create the payment info element
let paymentInfo = document.createElement("div");
paymentInfo.classList.add("payment-info");

let payEmiBtn = document.createElement("button");
payEmiBtn.classList.add("pay-emi-btn");
payEmiBtn.setAttribute("onclick",`./buy-now-2.html?uuid=${thispet["uuid"]}`)
payEmiBtn.textContent = "Pay EMI";

paymentInfo.appendChild(payEmiBtn);

// Append the elements to the card container
card.appendChild(petImage);
card.appendChild(petInfo);
card.appendChild(paymentInfo);

// Append the card container to the page
document.body.appendChild(card);
}




