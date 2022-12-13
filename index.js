/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



const inputEl = document.getElementById("input_el")
const btnEl = document.getElementById("convert_btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const inputFromLocalStorage = JSON.parse( localStorage.getItem("myInput") )
const pL = document.getElementById("pl")
const pV = document.getElementById("pv")
const pM = document.getElementById("pm")
let myInput = []
const feet = 3.281
const gallon = 0.624
const pound = 2.204

if(inputFromLocalStorage) {
    myInput= inputFromLocalStorage
    render(myInput)
}

/* Interaction with the convert btn */
btnEl.addEventListener("click", function() {
    myInput.push(inputEl.value)
    inputEl.value=""
    render(myInput)
})

/* Function that make the conversion */
function render() {
    let lengthMath = " "
    let volumeMath = " "
    let massMath = " "
    for(let i = 0; i < myInput.length; i++) {
        console.log(myInput[i])
        lengthMath = `${myInput[i]} meters = ${(myInput[i] * feet).toFixed(3)} feet | ${myInput[i]} feet = ${(myInput[i] / feet).toFixed(3)} meters`
        volumeMath = `${myInput[i]} liters = ${(myInput[i] * gallon).toFixed(3)} gallons | ${myInput[i]} gallons = ${(myInput[i] / gallon).toFixed(3)} liters`
        massMath = `${myInput[i]} kilos = ${(myInput[i] * pound).toFixed(3)} pounds | ${myInput[i]} pounds = ${(myInput[i] / pound).toFixed(3)} kilos`
    }
    pL.innerHTML = lengthMath
    pV.innerHTML = volumeMath
    pM.innerHTML = massMath
}


