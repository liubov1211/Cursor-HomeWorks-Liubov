let n;
let m;
do {
    n = +prompt("Введи перше число");
} while (!Number.isInteger(n));

do {
    m = +prompt("Введи друге число, але більше ніж перше");
} while (!Number.isInteger(m) || (m < n));

const choice = confirm("Пропускати парні числа???");
let sum = 0;

for (let i = n; i <= m; i++) {
    if (choice && (i % 2 === 0)) {
        sum += 0;
    } else {
        sum += i;
    }
}
console.log(sum);