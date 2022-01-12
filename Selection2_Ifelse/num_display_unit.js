function displayUnit(digitplace)
{
    if( digitplace == 1) console.log("Unit");
    else if( digitplace == 10) console.log("Ten");
    else if( digitplace == 100) console.log("Hundred");
    else if( digitplace == 1000) console.log("Thousand");
    else if( digitplace == 10000) console.log("Ten Thousand");
    else if( digitplace == 100000) console.log("Lakh");
    else if( digitplace == 1000000) console.log("Ten Lakh");
    else if( digitplace == 10000000) console.log("Crore");
    else if( digitplace == 100000000) console.log("Ten Crore");
}
var readline = require("readline-sync");
var digitplace = readline.question("Enter the decimal place :" );
displayUnit(parseInt(digitplace));