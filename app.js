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
function mSort (array) {
    if (array.length === 1) {
    return array                            // return once we hit an array with a single item
    }
 const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
 const left = array.slice(0, middle)         // items on the left side
 const right = array.slice(middle) 
 return merge(
    mSort(left),
    mSort(right)
 )}
 // compare the arrays item by item and return the concatenated result
 function merge (left, right) {
    //let result = []
    let leftIndex = 0
    let rightIndex = 0
    let barIndex = 0
    //bars = document.querySelectorAll('.bars');
    while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex])
       leftIndex++    
       } else {
       result.push(right[rightIndex])
       rightIndex++      
    }
 }
 
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 }
async function insertionSort(inputArr) {
    bars = document.querySelectorAll('.bars');
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1;
            bars[i].style.background = "green";
            await timer(timeout)
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                bars[j+1].style.background = "red";
                await timer(timeout)
                bars[j+1].style.height = inputArr[j+1] + "%";
                bars[j+1].style.background = "aqua";
                j--;
            }
            inputArr[j+1] = current;
            bars[j+1].style.height = inputArr[j+1] + "%";
            bars[i].style.background = "aqua";
        }
    return inputArr;
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
                await timer(timeout/2);
                bars[j].style.background = "red";
                bars[j+1].style.background = "red";
                bars[j].style.height = Arr[j] + "%";
                bars[j+1].style.height = Arr[j+1] + "%";
            }
            await timer(timeout/2);
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
document.getElementById('insertionSort').addEventListener('click', ()=>{
    insertionSort(Arr);
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