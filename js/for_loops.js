// function showMultiplicationTable(num){
//     for (let i = 1; i <=10; i++){
//         console.log(`${num} x ${i} = ${i * num}`);
//     }
// }
//
// function isEvenOrOdd(num) {
//     if (num %2 === 0) {
//         return `${num} is even.`;
//     } else {
//         return `${num} is odd.`;
//     }
// }


    // // This is how you get a random number between 50 and 100
    // let allCones = Math.floor(Math.random() * 21) + 180;


// for (let i = 1; i <= 10; i++) {
//     let randomNum = Math.floor(Math.random() * 181) + 20;
//     console.log(`${isEvenOrOdd(randomNum)}`);
// }




// Create a for loop to display the following
//
// for (let i = 100; i > 0; i-= 5){
//     console.log(i);
// }

            /*
            100
            95
            90
            85
            80
            75
            70
            65
            60
            55
            50
            45
            40
            35
            30
            25
            20
            15
            10
            5
            */

// Create a for loop that uses console.log to create the output shown below.


// for (let i = 1; i <= 9; i++) {
//
// }

// for (i = 1; i <= 9; i++) {
//     let res = [];
//     for (a = 1; a <= i; a++) {
//         res.push(i);
//     }
//     console.log(res.join(""));
// }



// let n = 9; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//     // Internal loop
//     for (let j = 1; j <= i; j++) {
//         string += i;
//     }
//     string += "\n";
// }
// console.log(string);
//
// for(let i = 1, n = 9, string = ""; i <= n; i++){
//     for(let j=1; j <= i; j++){
//         string += j;
//     }
//     string += "\n";
//     console.log(string);
// }

// // BEST METHOD
// for (let i =1; i<= 9; i++) {
//     console.log(i.toString().repeat(i));
// }

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

let array1 = ["apple", "tomato", "beans", "enchilada", "peer", "yo", "a", "fill"];


// function findLongest (arr) {
//     let charLength = 0;
//     let longest;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > charLength) {
//             charLength = arr[i].length;
//             longest = arr[i];
//         }
//     }
//
//     console.log(longest);
//
// }

let mathArr = [1, 5, 8, 99, 100, 43, 6, 44, 78] //  14
let mathArr2 = [3, 8, 5] // 16
            // Total        30

// function addArrays (arr, arr2) {
//     let arrSum = 0;
//     let arrSum2 = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         arrSum += arr[i];
//     }
//     // console.log(`arrSum is ${arrSum}`);
//
//     for (let j = 0; j < arr2.length; j++) {
//         arrSum2 += arr2[j];
//     }
//     // console.log(`arrSum2 is ${arrSum2}`);
//
//     return arrSum + arrSum2;
// }

// function forLoopTest (arr) {
//     let test = 0;
//
//     for (let i = 100; i > arr.length; i--) {
//         if (i %2 !== 0) {
//             console.log(i);
//         }
//     }
// }

// let mathArr = [1, 5, 8, 99, 100, 43, 6, 44, 78]

function newLoopTest (arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        console.log(`this is index # ${i}`);
    }
}



