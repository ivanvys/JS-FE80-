
/*function x (a,b) {
a+b;
return a+b;
};

let q=x(5,2);
let b=x(3,10);

console.log (q);
console.log (b);*/

const x = function (value) {
if (value>10) {
return 'error, number can not be grater than 11'
} if (value>5) {
return'it is middle'
} if (value>1) {
return'OK'
} return 'лох'};

console.log(x(5));
