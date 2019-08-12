let TIME_ENTRY = {}

let submitBtn = document.querySelector('#submit')
let startTimeInput = document.querySelector('#start-time')
let endtimeInput = document.querySelector('#end-time')
// let firstBreak = document.querySelector('#first-break')
// let secondBreak = document.querySelector('#second-break')
// let thirdBreak = document.querySelector('#third-break')

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  /*----------------------*/
  /* Calculate StartTime */
  /*--------------------*/
  let startTimeValue = startTimeInput.value.split(':')
  if (startTimeValue[1] < 15 && startTimeValue[1] > 0) {
    startTimeValue[1] = 00
  } 

  if (startTimeValue[1] < 30 && startTimeValue[1] > 15) {
    startTimeValue[1] = 15
  } 

  if (startTimeValue[1] < 45 && startTimeValue[1] > 30) {
    startTimeValue[1] = 30
  }

  if (startTimeValue[1] < 60 && startTimeValue[1] > 46) {
    startTimeValue[1] = 45
  } 

  /*--------------------*/
  /* Calculate EndTime */
  /*------------------*/
  let endTimeValue = endtimeInput.value.split(':')
  if (endTimeValue[1] < 15 && endTimeValue[1] > 0) {
    endTimeValue[1] = 00
  } 

  if (endTimeValue[1] < 30 && endTimeValue[1] > 15) {
    endTimeValue[1] = 15
  } 

  if (endTimeValue[1] < 45 && endTimeValue[1] > 30) {
    endTimeValue[1] = 30
  }

  if (endTimeValue[1] < 60 && endTimeValue[1] > 46) {
    endTimeValue[1] = 45
  } 

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
  
  TIME_ENTRY.startTime = parseInt(startTimeValue[0], 10) * 60 + parseInt(startTimeValue[1], 10)
  TIME_ENTRY.endTime = parseInt(endTimeValue[0], 10) * 60 + parseInt(endTimeValue[1], 10)
  TIME_ENTRY.workedHours = Math.round((TIME_ENTRY.endTime - TIME_ENTRY.startTime) / 60 * 100) / 100

  console.log(TIME_ENTRY)

})