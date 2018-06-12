//Phone buying algorithm

function GoodsTax(amt){
    const KY_TAX = .06; //Using the chrome console with this const causes no issues when the code is ran again and again
    return amt + (amt * KY_TAX);
}
//const PHONE_PRICE = 198.99; //When placed in a function, then CONST is ok with being reinducted
var bankBalance = 1349.83;
var phonesBought = 0;

for (i = bankBalance; i >= PHONE_PRICE; i = i - PHONE_PRICE){
    phonesBought++;
}
alert("You bought a total of " + phonesBought + "!");
alert("Your total price including taxes is: $" + GoodsTax(phonesBought * PHONE_PRICE).toFixed(2));