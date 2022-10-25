#!/usr/bin/env node
//console.log(process.argv);
const lib = require("./lib.js"); 

if(process.argv.length <= 3)
{
    console.log("error");
    process.exit(1);
}
let command = process.argv[2];
let numbers = process.argv.slice(3,process.argv.length).map((n) => parseFloat(n));

if(numbers.some((n) => isNaN(n)) === true)
{ 
    console.log("error");
    process.exit(1);

}


console.log(numbers);

let result;
switch (command)
{
 case "sum" :
    result = lib.sum(numbers);
    break;
 case "avg" :
    result = lib.avg(numbers);
    break;
 case "max" :
    result = lib.max(numbers);
    break;

 default :
       conseol.log("wrong!");
       prcess.exit(1);  

}
console.log(result);