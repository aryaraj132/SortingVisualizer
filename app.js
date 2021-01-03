Bar_size = Math.floor((window.innerWidth - 120)/15);;
timeout = 100
document.getElementById('fast').addEventListener('click',()=>{
    timeout=30
});
document.getElementById('default-speed').addEventListener('click',()=>{
    timeout=100
});
document.getElementById('slow').addEventListener('click',()=>{
    timeout=500
});
function randomInt(min, max) {
    return Math.floor(Math.random() * (max-min +1) + min);
}
Arr = [];
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
function GenArray() {
    let bars = document.querySelectorAll('.bars');
    for (let index = 0; index < Bar_size; index++) {
        const element = bars[index];
        Arr[index] = randomInt(5,90);
        element.style.height = Arr[index] + "%"; 
        element.style.background = "aqua"; 
    }
}
async function bubbleSort(inputArr){
    let len = Bar_size;
    bars = document.querySelectorAll('.bars');
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1-i; j++) {
            bars[j].style.background = "green";
            bars[j+1].style.background = "green";
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                await timer(timeout);
                bars[j].style.background = "red";
                bars[j+1].style.background = "red";
                bars[j].style.height = Arr[j] + "%";
                bars[j+1].style.height = Arr[j+1] + "%";
            }
            await timer(timeout);
                bars[j].style.background = "aqua";
                bars[j+1].style.background = "aqua";
        }
        bars[len-1-i].style.background = "violet";
    }
    return inputArr;
};
document.getElementById('bubbleSort').addEventListener('click', ()=>{
    bubbleSort(Arr);
});
window.onload = function(){
    
if (window.innerWidth < 170) {
        Bar_size = 4;
    }
    ul = document.querySelector('.bars-container');
    for (let i = 0; i < Bar_size; i++) {
        ul.insertAdjacentHTML( 'afterbegin', '<li class="bars"></li>');
    }
    GenArray();
};