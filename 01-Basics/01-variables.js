const accountId = 1234;
let accountEmail = "Naveen@gmail.com";
var accountPassword = "7654";
accountCity = "Bengaluru";

console.log(accountCity);

/*
- var: Declares a variable that can be used anywhere in a function or globally, and you can re-declare it.

- let: Declares a variable that can only be used inside the block (like inside a loop), and you can’t re-declare it in the same place.

- Prefer not to use var because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);
