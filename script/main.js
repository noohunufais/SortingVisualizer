function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}


function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_sz');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
}); 

let delay = 750;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 1500 - parseInt(delayElement.value);
});

createNewArray();

function createNewArray(noOfBars = 30) {

    deleteChild();

    let array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*1.4}px`;
        bar.classList.add('singleBar');
        bars.appendChild(bar);
    }
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    console.log(arraySize.value)
    createNewArray(arraySize.value);
}); 