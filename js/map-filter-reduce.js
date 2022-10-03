
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filteredUsers = users.filter(user => user.languages.length >= 3);
console.log(filteredUsers);

let userEmails = users.map(userEmail => userEmail.email);
console.log(userEmails);

// let totalCostVar = prices.reduce(function(total, itemPrice, index){
//     console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
//     return total + itemPrice;
// });

let totalYears = users.reduce((acc, element, index)=>{
    console.log(element.yearsOfExperience);
    return acc + element.yearsOfExperience;

}, 0)

let averageYears = users.reduce((acc, element, index, array)=>{
    console.log(element.yearsOfExperience);
    return acc + element.yearsOfExperience / array.length;

}, 0)

let longestEmail = users.reduce((acc, element, index, array)=>{
    console.log(element.email);
    console.log(element.email.length);
});

let getLongestText = users.reduce(
    (savedText, {email}) => (email.length > savedText.length ? email : savedText),
    '',
    //found on https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
);

let returnAllUserString = users.reduce((acc, {name}, index, array)=>{
    //Your instructors are: ryan, luis, zach, fernando, justin.
    // name += users[index].name;
});
console.log(returnAllUserString);
