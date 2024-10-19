const accountId = 1234;
let accountEmail = "Naveen@gmail.com";
var accountPassword = "7654";
accountCity = "Bengaluru";

console.log(accountCity);

/*
Prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);