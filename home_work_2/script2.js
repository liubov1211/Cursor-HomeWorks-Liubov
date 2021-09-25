const n = +prompt("write any number");
const m = +prompt("write any other number greater than the first number");
const checkTheТumberOfN = parseInt(n);
const checkTheТumberOfM = parseInt(m);
const choice = confirm("Skip even numbers when calculating the amount");
let sum = 0;
for(let i = n; i <= m; i++) {
    if(choice === true && (i % 2 === 0)) {
        sum += 0;
     }else {
        sum += i; 
    }
}
console.log(sum);