//1
//var req= require('./calculator.js');
//2
const o = require("./sum.js");
const p = require("./sub.js");
const q = require("./mul.js");
const r = require("./div.js");

console.log(`The sum of ${o.c} & ${o.d} is ${o.addition}`);
console.log(`The difference of ${p.c} & ${p.d} is ${p.difference}`);
console.log(`The multiplication of ${q.c} & ${q.d} is ${q.multiplication}`);
console.log(`The division of ${r.c} & ${r.d} is ${r.division}`);
//3
/*var moment=require("moment");
console.log("today is"+" "+moment().format("dddd,MMMM Do YYYY,h:mm:ss a"));
console.log("The sum of 3 & 7 is :"+ " " +req.sum(3,7));
console.log("The product of 3 & 7 is :"+ " " +req.multiplication(3,7));*/


