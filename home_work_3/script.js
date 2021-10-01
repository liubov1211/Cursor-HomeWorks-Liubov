const getMaxDigit = (number) => number.toString().split('').sort().reverse()[0];
const getPow = (number, pow) => {
    let result = 1;
    for(let i = 1; i <= pow; i++){
        result *=  number
    }
    return result;
}
const makesTheFirstLetterUppercase = (name) => {
   name = name.toLowerCase();
   let correctName = name.slice(0,1).toUpperCase() + name.slice(1);
   return correctName;
}
const calculatesNetIncome = (salary, tax) => salary - (salary/100 * tax);
const getRandomNumber = (n, m) => Math.floor(Math.random() * (m - n))+n;
const countLetter = (letter, word) => {
    word = word.toLowerCase();
    let count = 0;
    for(let i = 0; i <= word.length; i++){
        if(word[i] === letter) count ++
    }
    return count;
}
const convertCurrency = (currency) => {
    let res;
    if(currency.includes('$')){
        res = parseInt(currency) * 26
    }
     else if(currency.includes('UAH'.toLocaleLowerCase())){
        res = parseInt(currency) / 26
    }
    else{
        res = 'sorry, it`s problem'
    }
    return res;
}
const getRandomPassword = (number = 8) => {
    let str = '';
    for(let i = 0; i < number; i++){
        str += Math.floor(Math.random() * 10)
    }
    
return str;
}
const deleteLetters = (letter, sentence) => sentence.replaceAll(letter,'');
const isPalyndrom = (sentence) => {
    const newSentence = sentence.replaceAll(' ','').toLowerCase();
    const reverseSentence = newSentence.split('').reverse().join('');
    return newSentence === reverseSentence;
}

const deleteDuplicateLetter = (sentence) => {
    let str = sentence.toLowerCase().split("");
    str = str.filter(letter => str.indexOf(letter) === str.lastIndexOf(letter));
    return str.join("");
}

console.log(`FUNCTION 1: ${getMaxDigit(2547)}`)
console.log(`FUNCTION 2: ${getPow(5, 3)}`)
console.log(`FUNCTION 3: ${makesTheFirstLetterUppercase("vLaD")}`)
console.log(`FUNCTION 4: ${calculatesNetIncome(10000, 19.5)}`)
console.log(`FUNCTION 5: ${getRandomNumber(5, 20)}`)
console.log(`FUNCTION 6: ${countLetter("а", "Асталавіста")} `)
console.log(`FUNCTION 7: ${convertCurrency("100$")} `)
console.log(`FUNCTION 8: ${getRandomPassword(4)} `)
console.log(`FUNCTION 9: ${deleteLetters('a', "blablabla")} `)
console.log(`FUNCTION 10: ${isPalyndrom("Я несу гусеня")} `)
console.log(`FUNCTION 11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} `)