const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

let output = '';

// prices.forEach((price, index, array) =>{
//
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p id="price-${index+1}">Item number ${index + 1}: price: $${price}. Tax: $${tax}. Total: $${total} </p>`;
//     console.log(output)
//    $('div').html(output);
//
//     if (index === array.length -1){
//         $('div').append(`<p>That's all folks!</p>`);
//     }
// });

const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);

    return parseFloat(total);

});

// .map produces a new array from an array. See example below:

let doubledPrices = prices.map(price => price * 2);

console.log(`Prices: ${prices}`);
console.log(doubledPrices);
console.log(pricesAfterTax);

const desserts = ['sherbert', 'whisky cake', 'cupcake', 'eclair'];

let eatingDessert = desserts.map(dessert => `Eating ${dessert}`);

console.log(eatingDessert);

eatingDessert.forEach(element => {
   $('div').append(`<p>${element}</p>`)
});