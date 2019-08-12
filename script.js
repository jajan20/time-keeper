let TIME_ENTRY = {}

let submitBtn = document.querySelector('#submit')
let startHoursInput = document.querySelector('#start-hours')
let startMinutesInput = document.querySelector('#start-minutes')

let endHoursInput = document.querySelector('#end-hours')
let endMinutesInput = document.querySelector('#end-minutes')
// let firstBreak = document.querySelector('#first-break')
// let secondBreak = document.querySelector('#second-break')
// let thirdBreak = document.querySelector('#third-break')

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  /*----------------------*/
  /* Calculate StartTime */
  /*--------------------*/
  let totalStartHoursInMinutes = startHoursInput.value * 60
  let totalStartMinutes = startMinutesInput.value * 1

  if (totalStartMinutes < 15 && totalStartMinutes > 0) {
    totalStartMinutes = 00
  } 

  if (totalStartMinutes < 30 && totalStartMinutes > 15) {
    totalStartMinutes = 15
  } 

  if (totalStartMinutes < 45 && totalStartMinutes > 30) {
    totalStartMinutes = 30
  }

  if (totalStartMinutes < 60 && totalStartMinutes > 46) {
    totalStartMinutes = 45
  } 
  
  TIME_ENTRY.startTime = totalStartHoursInMinutes + totalStartMinutes

  /*--------------------*/
  /* Calculate EndTime */
  /*------------------*/
  let totalEndHoursInMinutes = endHoursInput.value * 60
  let totalEndMinutes = endMinutesInput.value * 1
  if (totalEndMinutes < 15 && totalEndMinutes > 0) {
    totalEndMinutes = 00
  } 

  if (totalEndMinutes < 30 && totalEndMinutes > 15) {
    totalEndMinutes = 15
  } 

  if (totalEndMinutes < 45 && totalEndMinutes > 30) {
    totalEndMinutes = 30
  }

  if (totalEndMinutes < 60 && totalEndMinutes > 46) {
    totalEndMinutes = 45
  } 

  TIME_ENTRY.endTime = totalEndHoursInMinutes + totalEndMinutes

  TIME_ENTRY.workedHours = Math.round((TIME_ENTRY.endTime - TIME_ENTRY.startTime) / 60 * 100) / 100
  console.log(TIME_ENTRY)

  // if (firstBreak.checked) {
  // 	object.firstBreak = parseInt(firstBreak.value, 10)  
  // } else {
  // 	  object.firstBreak = 0
  // }

  // if (secondBreak.checked) {
  // 	object.secondBreak = parseInt(secondBreak.value, 10)  
  // } else {
  // 	  object.secondBreak = 0
  // }

  // if (thirdBreak.checked) {
  // 	object.thirdBreak = parseInt(thirdBreak.value, 10)  
  // } else {
  // 	  object.thirdBreak = 0
  // }
})