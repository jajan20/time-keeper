let object = {}

let submitBtn = document.querySelector('#submit')
let startTime = document.querySelector('#start-time')
let endTime = document.querySelector('#end-time')
let firstBreak = document.querySelector('#first-break')
let secondBreak = document.querySelector('#second-break')
let thirdBreak = document.querySelector('#third-break')

submitBtn.addEventListener('click', (event) => {
	event.preventDefault()
	object.startTime = parseInt(startTime.value, 10) * 60
  object.endTime = parseInt(endTime.value, 10) * 60
  
  if (firstBreak.checked) {
		object.firstBreak = parseInt(firstBreak.value, 10)  
  } else {
  	  object.firstBreak = 0
  }
  
  if (secondBreak.checked) {
		object.secondBreak = parseInt(secondBreak.value, 10)  
  } else {
  	  object.secondBreak = 0
  }
  
  if (thirdBreak.checked) {
		object.thirdBreak = parseInt(thirdBreak.value, 10)  
  } else {
  	  object.thirdBreak = 0
  }
  
  object.workedHours = (object.endTime - object.startTime - object.firstBreak - object.secondBreak - object.thirdBreak) / 60
 
  console.log(object)
})