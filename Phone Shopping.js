//Phone buying algorithm

const PHONE_PRICE = 198.99;
var bankBalance = 1349.83;
var phonesBought = 0;

for (i = bankBalance; i >= PHONE_PRICE; i=-PHONE_PRICE){
    phonesBought++;
}
alert("You bought a total of " + phonesBought + "!");