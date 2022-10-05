/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const feetToMeters = 0.3048
const literToGallons = 0.264
const gallonsToLiters = 3.78541
const kiloToPounds = 2.204
const poundsToKilo = 0.453592

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let btn = document.getElementById("btn")
let input = document.getElementById("input")


    btn.addEventListener("click",function(){
        let baseValue = input.value
        lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet  |  ${baseValue} feet = ${baseValue * feetToMeters} meters` 
        
    })

    btn.addEventListener("click",function(){
            let baseValue = input.value
            volumeEl.textContent = `${baseValue} liters = ${baseValue * literToGallons} gallons  |  ${baseValue} gallons = ${baseValue * gallonsToLiters} liters`
    })
    btn.addEventListener("click",function(){
            let baseValue = input.value
            massEl.textContent = `${baseValue} kilos = ${baseValue * kiloToPounds} pounds  |  ${baseValue} pounds = ${baseValue * poundsToKilo} kilos`
    })