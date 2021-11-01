const getRandomChinese = async (length = 1) => {
    let i = 0;
    let fromCharCode = '';
    while (i < length) {
        fromCharCode += String.fromCharCode(Date.now().toString().slice(-5));
        await new Promise((resolve, reject) => setTimeout(resolve, 50));
        i++;
    }
    console.log(fromCharCode);
    return fromCharCode;
}
console.log(getRandomChinese(4));
