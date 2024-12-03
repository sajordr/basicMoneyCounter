"use strict";
/*
	Money Calculator

    Count physical money and calculate the total amount of money.
*/

// nodes
let ones = document.getElementById("dollarOne");
let twos = document.getElementById("dollarTwo");
let fives = document.getElementById("dollarFive");
let tens = document.getElementById("dollarTen");
let twenties = document.getElementById("dollarTwenty");
let fifties = document.getElementById("dollarFifty");
let hundreds = document.getElementById("dollarHundred");
let pennies = document.getElementById("penny");
let nickels = document.getElementById("nickel");
let dimes = document.getElementById("dime");
let quarters = document.getElementById("quarter");
let halfDollars = document.getElementById("halfDollar");
let dollars = document.getElementById("dollarCoin");
let total = document.getElementById("total");

// variables
let calcTotal = 0.00;

// constants

// functions
function calculateTotal() {
    calcTotal = 0.00;
    calcTotal += (ones.value * 1.00);
    calcTotal += (twos.value * 2.00);
    calcTotal += (fives.value * 5.00);
    calcTotal += (tens.value * 10.00);
    calcTotal += (twenties.value * 20.00);
    calcTotal += (fifties.value * 50.00);
    calcTotal += (hundreds.value * 100.00);
    calcTotal += (pennies.value * 0.01);
    calcTotal += (nickels.value * 0.05);
    calcTotal += (dimes.value * 0.10);
    calcTotal += (quarters.value * 0.25);
    calcTotal += (halfDollars.value * 0.50);
    calcTotal += (dollars.value * 1.00);
    total.innerHTML = "$" + calcTotal.toFixed(2);
}

ones.addEventListener("input", calculateTotal);
twos.addEventListener("input", calculateTotal);
fives.addEventListener("input", calculateTotal);
tens.addEventListener("input", calculateTotal);
twenties.addEventListener("input", calculateTotal);
fifties.addEventListener("input", calculateTotal);
hundreds.addEventListener("input", calculateTotal);
pennies.addEventListener("input", calculateTotal);
nickels.addEventListener("input", calculateTotal);
dimes.addEventListener("input", calculateTotal);
quarters.addEventListener("input", calculateTotal);
halfDollars.addEventListener("input", calculateTotal);
dollars.addEventListener("input", calculateTotal);