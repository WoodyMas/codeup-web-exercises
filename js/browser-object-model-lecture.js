// let sayHey = function () {
//     let count = 0;
//     function hey() {
//         if (count < 10) {
//             console.log("hey " + count);
//             count++;
//         } else {
//             clearInterval();
//         }
//
//     }
//
//     setInterval(hey, 1000); //says hey every 1000 milliseconds
// }

function tenHeys () {
    let count =1;
    let thisWillStop = setInterval(function() {
        if (count < 10) {
            console.log("Hey " + count);
            count++;
        } else {
            clearInterval(thisWillStop);
        }
    }, 1000);
}

setTimeout(wakeUpUser, 5000); // setTimeout(function, how many seconds it takes before it executes the function)

function wakeUpUser() {
    alert("WAKE UP!!!!!!!!!!");
}