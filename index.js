let apple = 15.678;
let peach = 123.965;
let melon = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
document.writeln(`Max price: ${Math.max(apple, peach, melon)}<br>`);
//Використовуючи вбудований об'єкт Math – виведіть максимальне число
document.writeln(`Min price: ${Math.min(apple, peach, melon)}<br>`);
//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let totalPrice = apple+peach+melon;
document.writeln(`Sum: ${totalPrice}<br>`);
//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let floorPrice = Math.floor(apple) + Math.floor(peach) + Math.floor(melon);
document.writeln(`Sum without coins: ${floorPrice}<br>`);
//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
document.writeln(`Rounding to hundredths: ${Math.round(floorPrice/100)*100}<br>`);
//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let fraction = floorPrice/2;
let result = (Number(Math.trunc(fraction))- Number(fraction));
document.writeln(`Result is an odd number: ${Boolean(result)}<br>`);
//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let change = 500-totalPrice;
document.writeln(`Change: ${change}<br>`);
//Виведіть середнє значення цін, округлене до другого знаку після коми
let average = totalPrice/3;
console.log(average);
document.writeln(`Average: ${Math.round(average*100)/100}<br>`);
//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random)
let discount = Number(Math.random()*100).toFixed(0);
console.log(discount);
let discountNumber = totalPrice*discount/100;
console.log(discountNumber);
//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let finalPriceDiscount = Number(totalPrice-discountNumber).toFixed(2);
document.writeln(`Price with discount: ${finalPriceDiscount}<br>`);
//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
let cost = totalPrice/2;
let netProfit = Number(cost-discountNumber).toFixed(2);
document.writeln(`Net Profit with discount: ${netProfit}<br>`);






