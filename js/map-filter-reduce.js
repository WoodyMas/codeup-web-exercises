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

// let doubledPrices = prices.map(price => price * 2);

console.log(`Prices: ${prices}`);
// console.log(doubledPrices);
console.log(pricesAfterTax);

const desserts = ['sherbert', 'whisky cake', 'cupcake', 'eclair'];

let eatingDessert = desserts.map(dessert => `Eating ${dessert}`);

console.log(eatingDessert);

eatingDessert.forEach(element => {
   $('div').append(`<p>${element}</p>`)
});

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);

console.log(mileages);

// const newObject = cars.map(car => {
//     car.newProp = 'new property';
//     return car;
// });

const array = [4, 5, 7, 9];

function doubleTheArray (array){
    let newArr =[];
    for (let i = 0; i < array.length; i++){
        newArr.push(array[i] * 2);
    } return newArr;
}

console.log(doubleTheArray(array));

const under10K = cars.filter(car => car.mileage < 1000);

under10K.forEach(({make, model, mileage}) =>{
    output += `<p>I found a ${make} ${model} with ${mileage} miles</p>`;
});

const under10KDollarsWithTax = prices.filter(price => price < 10).map(price =>{
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    return parseFloat(total)
}).forEach(price => $('div').append(`<p>${price}</p>`));

console.log(under10KDollarsWithTax);

const totalCost = prices.reduce(function (total, price,){
    return total + price;
});
console.log(totalCost);

totalCostVar = affordablesWithTax.reduce(function(total, itemPrice, index){
    console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
    return total + itemPrice;
});
$("#output").append(`<p>The total is ${totalCost}</p>`);