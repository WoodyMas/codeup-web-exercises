// Create a file named while.js in the js directory.
//
// Create a while loop that uses console.log() to create the output shown below.

            // 2
            // 4
            // 8
            // 16
            // 32
            // 64
            // 128
            // 256
            // 512
            // 1024
            // 2048
            // 4096
            // 8192
            // 16384
            // 32768
            // 65536 (16th Power)

let num = 2;
let powr = 1;


while (powr <= 16) {
    let newNum = Math.pow(num, powr);
    console.log(newNum);
    powr++;
}

//console.log(Math.pow(num, 16));
