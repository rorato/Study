//Phone buying algorithm

function Total(amt){
    const KY_TAX = .06; //Using the chrome console with this const causes no issues when the code is ran again and again
    return "$" + (amt + (amt * KY_TAX)).toFixed(2);
}
const PHONE_PRICE = 198.99; //When placed in a function, then CONST is ok with being reinducted
const ACCESSORY_PRICE = 4.99;
var bankBalance = prompt("How mucha muney u hef: ");
var phonesBought = 0;
var accessoriesBought = 0;

for (i = bankBalance; i >= PHONE_PRICE; i = i - PHONE_PRICE){
    phonesBought++;
    accessoriesBought++;
}
alert("You bought a total of " + phonesBought + "!");
alert("Your total price including taxes is: " + Total((phonesBought * PHONE_PRICE) + (accessoriesBought * ACCESSORY_PRICE)));
