function* createIdGenerator () {
    let i = 1;
    while(i > 0){
        yield i;
        i++
    }

}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function* newFontGenerator(fs) {
    let res = yield fs;
    while(true){
        if(res === 'up'){
            fs += 2;
            res = yield fs
        }else if(res === 'down'){
            fs -= 2;
            res = yield fs
        }else res = yield fs;
    }
}
const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);