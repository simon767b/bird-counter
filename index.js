//document.getElementById("count").innerText = 5

// let myAge = 23
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// Ctrl+k+c
// let firstBatch = 5
// let secondBatch = 7

let countEl = document.getElementById("count-el") //pass in arguments
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count
}






