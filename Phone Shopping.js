//Phone buying algorithm

function GoodsTax(amt){
    const KY_TAX = .06;
    return amt + (amt * KY_TAX);
}
const PHONE_PRICE = 198.99;
var bankBalance = 1349.83;
var phonesBought = 0;

for (i = bankBalance; i >= PHONE_PRICE; i = i - PHONE_PRICE){
    phonesBought++;
}
alert("You bought a total of " + phonesBought + "!");
alert("Your total price including taxes is: " + GoodsTax(phonesBought * PHONE_PRICE));