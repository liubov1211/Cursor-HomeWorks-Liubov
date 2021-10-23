const container = document.querySelector('.container');
const generateBlocks = () => {
    for(const square of container.children){
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        square.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
    }
}
generateBlocks();

const generateBlocksInterval = () => {
    setInterval(()=> generateBlocks(),1000)
}
generateBlocksInterval();