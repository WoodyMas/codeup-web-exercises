function isNumber (val) {
    return !((isNaN(val)) || typeof val === "boolean" || val === null);
}


// function average (array) {
//     let total = 0;
//     for(let i =0; i < array.length; i++) {
//         if (typeof array[i] === "string" || array[i] === NaN) {
//             return false;
//         }
//         for(let j = 0; j < array[i].length; j++) {
//             if (typeof array[j] === "string" || array[j] === NaN) {
//                 return false;
//             }
//             return total = array[i][j] / array.length;
//         }
//         console.log(`array[${j}]: ${array[i]}`);
//     }
// }

let array1 = [5, 10, 15];

let array2 = [100, 88, 23, 50];

let array3 = ["Apple pie", 90, 80]

function arrayAverage (array) {
    if (array === undefined) {return false;}
    let total = 0;
    array.forEach((element, index) => {
       total += element;
    });
    return total/array.length;
}

function average (array) {
    // an average adds all the elements of an array
    // and then divides the sum by the number of elements. SIMPLE
    if (array === undefined) {return false;}
    let count = 0;
    let total = 0;
    array.forEach((element, index) => {
        // if (typeof parseFloat(index) !== "number") {
        //     return false;
        // }
        total += element;
        count++;
    });

    let finalTot = total / count;
    if (isNaN(finalTot)) {
        return false
    } else {
        return finalTot;
    }

}

// Write a function that accepts an array of strings and returns the longest string.
// If there are two strings of equal length it returns the one with the lowest index.
// if there are any values that are not strings, return false.

let stringArray = ["buzzworthy", "Jabba", "Darth Maul", "Hondo"];

function longestString (array) {
    if (array === undefined) {return false;}
    // array.forEach((element, index) => {
    //     if (!isNaN(element)) {
    //         return false;
    //     } else {
    //
    //     }
    // });
    let longest = '';
    for(let i =0; i < array.length; i++){
        if (array[i].length > longest.length) longest = array[i];
    }
    return longest;
}