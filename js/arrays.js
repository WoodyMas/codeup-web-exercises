//declaring an array literal

// Each item in an array is called an element ("bread", "eggs", "butter", "milk")
// Arrays always start with the 0 index, not 1.

let groceryList = ["bread", "eggs", "butter", "milk"];
// Element -> E#    // E0   //E1    //E2      //E3

for (let i = 0; i < groceryList.length; i++) {
    if (i === groceryList.length - 1) {
        console.log(`I have to buy ${groceryList[i]}.`);
    } else {
        console.log(`I have to buy ${groceryList[i]} and `)
    }
}