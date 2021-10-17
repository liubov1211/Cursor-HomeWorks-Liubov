const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary) {
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 10000));

const getMiddleTaxes = function () {
    return this.tax * this.middleSalary
}
console.log(getMiddleTaxes.call(latvia));

const getTotalTaxes = function () {
    return this.tax * this.middleSalary * this.vacancies
}
console.log(getTotalTaxes.call(litva));

const getMySalary = function () {
    const maxSalary = 2000;
    const minSalary = 1500;
    const randomSalary = Math.round(Math.random() * (maxSalary - minSalary)) + minSalary;
    const taxes = randomSalary * this.tax;
    const profit = randomSalary - taxes;
    return {
        salary: randomSalary,
        taxes: taxes,
        profit: profit,
    }

}
console.log(getMySalary.call(latvia));
setInterval(() => console.log(getMySalary.call(latvia)), 10000);
