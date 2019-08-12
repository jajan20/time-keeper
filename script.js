let TIME_ENTRY = {}

let submitBtn = document.querySelector('#submit')
let startTimeInput = document.querySelector('#start-time')
let endtimeInput = document.querySelector('#end-time')
// let firstBreak = document.querySelector('#first-break')
// let secondBreak = document.querySelector('#second-break')
// let thirdBreak = document.querySelector('#third-break')

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let startTimeValue = startTimeInput.value.split(':')
  let endTimeValue = endtimeInput.value.split(':')

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
  TIME_ENTRY.workedHours = (TIME_ENTRY.endTime - TIME_ENTRY.startTime) / 60

  console.log(TIME_ENTRY)

})