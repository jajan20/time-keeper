<template>
  <div id="app">
    <section class="container">
        <form>
            <div class="input-wrapper">
                <label for="start-time">Starttime</label>
                <div>
                    <input id="start-hours" type="text" placeholder="09">
                    <span>:</span>
                    <input id="start-minutes" type="text" placeholder="00">
                </div>
            </div>
            <div class="input-wrapper">
                    <label for="end-time">Endtime</label>
                    <div>
                        <input id="end-hours" type="text" placeholder="18">
                        <span>:</span>
                        <input id="end-minutes" type="text" placeholder="00">
                    </div>
                </div>
            <div class="checkboxes">
                <div class="checkbox-wrapper">
                    <label for="first-break">15min</label>
                    <input id="first-break" type="checkbox" value="15">
                </div>
                <div class="checkbox-wrapper">
                    <label for="second-break">30min</label>
                    <input id="second-break" type="checkbox" value="30">
                </div>
                <div class="checkbox-wrapper">
                    <label for="third-break">15min</label>
                    <input id="third-break" type="checkbox" value="15">
                </div>
            </div>
            <button id="submit" type="submit">Next</button>
        </form>
    </section>
  </div>
</template>

<script>
let TIME_ENTRY = {}

let submitBtn = document.querySelector('#submit')
let startHoursInput = document.querySelector('#start-hours')
let startMinutesInput = document.querySelector('#start-minutes')

let endHoursInput = document.querySelector('#end-hours')
let endMinutesInput = document.querySelector('#end-minutes')
let firstBreak = document.querySelector('#first-break')
let secondBreak = document.querySelector('#second-break')
let thirdBreak = document.querySelector('#third-break')

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

  if (firstBreak.checked) {
  	TIME_ENTRY.firstBreak = parseInt(firstBreak.value, 10)  
  } else {
    TIME_ENTRY.firstBreak = 0
  }

  if (secondBreak.checked) {
  	TIME_ENTRY.secondBreak = parseInt(secondBreak.value, 10)  
  } else {
    TIME_ENTRY.secondBreak = 0
  }

  if (thirdBreak.checked) {
  	TIME_ENTRY.thirdBreak = parseInt(thirdBreak.value, 10)  
  } else {
    TIME_ENTRY.thirdBreak = 0
  }

  
  TIME_ENTRY.workedHours = Math.round((TIME_ENTRY.endTime - TIME_ENTRY.startTime - TIME_ENTRY.firstBreak - TIME_ENTRY.secondBreak - TIME_ENTRY.thirdBreak) / 60 * 100) / 100
  console.log(TIME_ENTRY)

})

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  * {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
  }

  #submit {
      background-color: deepskyblue;
      border: 0;
      border-radius: 4px;
      padding: 10px 30px;
      outline: none;
      font-weight: bold;
  }


  form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
  }

  .input-wrapper {
      margin: 20px 0;
      text-align: center;
  }

  .input-wrapper label {
      margin-bottom: 10px;
      display: block;
  }

  .input-wrapper  input {
      padding: 10px;
      width: 50px;
      text-align: center;
  }

  .checkboxes {
      display: flex;
      flex-direction: row;
      max-width: 309px;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 20px;
  }

  .checkbox-wrapper {
      border: solid 1px black;
      padding: 5px;
  }
}
</style>
