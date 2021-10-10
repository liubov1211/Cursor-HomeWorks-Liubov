console.log("__________task1__________");
const getRandomArray = (length, min, max) => {
    const arr = [];
    while(arr.length < length){
        let r = Math.round(Math.random() * (max - min)) + min;
        arr.push(r);
    }
    return arr;
}
console.log(getRandomArray(6, 1, 50));

console.log("__________task2__________");
const getModa = (...numbers) => {
    let numberFrequency = {};
     numbers.forEach(el => {
         if(!numberFrequency[el]){
            numberFrequency[el] = 1
         }
         else{
            numberFrequency[el] += 1;
         }
     });
     const maxFrequency = Math.max(...Object.values(numberFrequency));
    const moda = Object.entries(numberFrequency).filter(item => item[1] === maxFrequency);
   
    return moda.map(el => el[0]).join(', ');
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56,3,3,3, 3, 2));

console.log("__________task3__________");
const getAverage = (...numbers) => {
    const sum = numbers.reduce((a, b) => a+b);
    return sum/numbers.length;
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log("__________task4__________");
const getMedian = (...numbers) => {
    const arr = numbers.filter(number => Number.isInteger(number)).sort((a, b) => a - b);
    if (arr.length % 2) {
        return arr[Math.floor(arr.length / 2)];
    }
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
};
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log("__________task5__________");
const filterEvenNumbers = (...numbers) => numbers.filter(el => el%2 !== 0);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

console.log("__________task6__________");
const countPositiveNumbers = (...numbers) => {
    let count = 0;
    for(const number of numbers){
        if(number > 0) count+=1;
    }
    return count;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

console.log("__________task7__________");
const getDividedByFive = (...numbers) => numbers.filter(el => el%5 ===0)
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log("__________task8__________");
const replaceBadWords = (string) => {
    const badWords = ['shit', 'fuck'];
    let word = string;
    for(let words of badWords){
        word = word.split(words).join('****');
    }
        
    return word;
}
console.log(replaceBadWords('Сьогодні shit чудова погода'));

console.log("__________task9__________");
const divideByThree = (word) => {
     const partsOfWord = [];
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i +=3) {
        partsOfWord.push(word.slice(i, i + 3))
     }
     return partsOfWord
 }
console.log(divideByThree('Dhjfvjkfbjjbfb'));

console.log("__________task10__________");
function generateCombinations ( str , now = '' , arr = [ ] ) { 
    if ( str && str.length <= 10) 
        for ( var i = 0 ; i < str. length ; i ++ ) 
        generateCombinations ( str. slice ( 0 , i )  + str. slice ( i + 1 ) , now + str[ i ] , arr ) ; 
    else 
        if ( ! arr. includes ( now ) ) 
            arr. push ( now ) ; 
    return arr ; 
}
console.log(generateCombinations("man"));