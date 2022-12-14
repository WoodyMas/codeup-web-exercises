// AJAX request with jQuery
// $.get('data/murals.json', function (data){
//     console.log(data);
// });

// AJAX request with Fetch API
// fetch('data/murals.json').then((response) =>{
//     return response.json();
// }).then((data) =>{
//     console.log(data)
// });

// Abbreviated Fetch request using arrow functions
// fetch('data/murals.json').then(resp => resp.json()).then(data => console.log(data));

// Callback: a function passed as an argument to another function. It can run after another function has finished running
//
// function sayHello (greeting, name){
//     return `${greeting}, ${name}`;
// }
//
// let greeting = sayHello("What it do", "Mason");
//
// function displayOutput (output) {
//     $('#output').html(output);
// }
// displayOutput(greeting);

// function sayHello (greeting, name){
//     greeting = `${greeting}, ${name}`;
//     displayOutput(greeting);
// }
// function displayOutput (output) {
//     $('#output').html(output);
// }
//
// sayHello('YoooOOOrr', 'Mac');

// function displayToOutputDiv (output) {
//     $('#output').html(output);
// }
//
// greeter('hola', 'Mason', displayToOutputDiv);
//
// function greeter(greeting, name, displayFunction){
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
//
// const aPromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         (Math.random() > 0.5) ? resolve('Look Mah it worked!') : reject('Mah it din work...');
//     }, 3000);
// });
//
// aPromise.then(value => console.log(value)).catch(error=>console.log(error));
//
// const myFetchPromise = fetch('data/murals.json').then(response => {
//     console.log(response.status);
//     console.log(response.headers);
//     console.log(response.url);
//     return response.json();
// }).then(data => console.log(data)).catch(error => console.log('It din werk'))
//     .finally(()=>console.log('It will happen someday...'));
//
// console.log(myFetchPromise);


// ############################################### Exercise ##########################################################

    function convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }

    function returnLastCommitDate (userName) {
        fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_API_TOKEN}}).then(response => {
            return response.json();
        }).then(data => {
            let date = new Date(data[0].created_at).toDateString();
            // let time = new Date(data[0].created_at).toTimeString();
            console.log(data[0].created_at);
            console.log(date);
            return `Returned date: ${date}`;

        });
        //     .catch(error => console.log('no werky')).finally(()=> {
        //     console.log("it'll work if u jus beleev");
        // });
    }

    returnLastCommitDate('WoodyMas');
    returnLastCommitDate('MarquisTheCoder');

    function wait (number){
        setTimeout(()=>{

        }, number)
    }

