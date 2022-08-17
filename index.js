let apple = 15.678;
let peach = 123.965;
let melon = 90.2345;


document.writeln("Max price: " + Math.max(apple, peach, melon) + "<br>");
document.writeln("Min price: " + Math.min(apple, peach, melon) + "<br>");

let totalPrice = apple+peach+melon;
document.writeln("Sum: " + totalPrice + "<br>");

let floorPrice = Math.floor(apple) + Math.floor(peach) + Math.floor(melon);
document.writeln("Sum without coins: " + floorPrice + "<br>");
document.writeln("Rounding to hundredths: " + Math.round(floorPrice/100)*100 + "<br>");

let fraction = floorPrice/2;
let result = (Number(Math.trunc(fraction))- Number(fraction));

document.writeln("Result is an odd number: " + Boolean(result) + "<br>");

let change = 500-totalPrice;
document.writeln("Change: " + change + "<br>");

let average = totalPrice/3;
console.log(average);
document.writeln("Average: " + Math.round(average*100)/100 + "<br>");

let discount = Number(Math.random()*100).toFixed(0);
console.log(discount);
let discountNumber = totalPrice*discount/100;
console.log(discountNumber);

let finalPriceDiscount = Number(totalPrice-discountNumber).toFixed(2);
document.writeln("Price with discount: " + finalPriceDiscount+ "<br>");

let cost = totalPrice/2;
let netProfit = Number(cost-discountNumber).toFixed(2);
document.writeln("Net Profit with discount: " + netProfit+ "<br>");






