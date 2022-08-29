AOS.init();

const app = document.querySelector('.weather-app')
const temp = document.querySelector('.degree')
const dateOutput = document.querySelector('.details')
const timeOutput = document.querySelector('.time')
const conditionOutput = document.querySelector('.condition')
const nameOutput = document.querySelector('.state')
const icon = document.querySelector('.icon')
const cloudOutput = document.querySelector('.cloud')
const humidityOutput = document.querySelector('.humidity')
const windOutput = document.querySelector('.wind')
const form = document.querySelector('.locationInput')// vicky
// const search = document.querySelector('.search')//vicky
const btn = document.querySelector('.search-box')
const cities = document.querySelector('.city')
const search = document.querySelector('.flex-item1')
const url = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
//API key a6f29206c2cb7d9e262f5a26cbfe7e9e 


    axios.get(url)
    
      .then(function (response) {
        // handle success
        nameOutput.innerText = response.data.name
        temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
        cloudOutput.innerText = " " + response.data.clouds.all
        humidityOutput.innerText = " " + response.data.main.humidity
        windOutput.innerText = " " + response.data.wind.speed
        conditionOutput.innerText = response.data.weather[0].main
        
        console.log(response)
     
        
      })
    
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
      .finally(function () {
        console.log("All done")
        // always executed
      });



const fetch = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
//API key a6f29206c2cb7d9e262f5a26cbfe7e9e 

  try {   
    const response = await axios.get(URL)
   
    nameOutput.innerText = response.data.name
        temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
        cloudOutput.innerText = " " + response.data.clouds.all
        humidityOutput.innerText = " " + response.data.main.humidity
        windOutput.innerText = " " + response.data.wind.speed
        conditionOutput.innerText = response.data.weather[0].main
  } catch(err) {
    console.log(err)
  }
}

const London = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
//API key a6f29206c2cb7d9e262f5a26cbfe7e9e 

  try {   
    const response = await axios.get(URL)
    
    nameOutput.innerText = response.data.name
        temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
        cloudOutput.innerText = " " + response.data.clouds.all
        humidityOutput.innerText = " " + response.data.main.humidity
        windOutput.innerText = " " + response.data.wind.speed
        conditionOutput.innerText = response.data.weather[0].main
  } catch(err) {
    console.log(err)
  }
}

const Manchester = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
//API key a6f29206c2cb7d9e262f5a26cbfe7e9e 

  try {   
    const response = await axios.get(URL)
    
    nameOutput.innerText = response.data.name
        temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
        cloudOutput.innerText = " " + response.data.clouds.all
        humidityOutput.innerText = " " + response.data.main.humidity
        windOutput.innerText = " " + response.data.wind.speed
        conditionOutput.innerText = response.data.weather[0].main
  } catch(err) {
    console.log(err)
  }
}
const New_york = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
//API key a6f29206c2cb7d9e262f5a26cbfe7e9e 

  try {   
    const response = await axios.get(URL)
    
    nameOutput.innerText = response.data.name
        temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
        cloudOutput.innerText = " " + response.data.clouds.all
        humidityOutput.innerText = " " + response.data.main.humidity
        windOutput.innerText = " " + response.data.wind.speed
        conditionOutput.innerText = response.data.weather[0].main
  } catch(err) {
    console.log(err)
  }
}
const California = async () => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=California&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
//API key a6f29206c2cb7d9e262f5a26cbfe7e9e 

  try {   
    const response = await axios.get(URL)
    
    nameOutput.innerText = response.data.name
        temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
        cloudOutput.innerText = " " + response.data.clouds.all
        humidityOutput.innerText = " " + response.data.main.humidity
        windOutput.innerText = " " + response.data.wind.speed
        conditionOutput.innerText = response.data.weather[0].main
  } catch(err) {
    console.log(err)
  }
}


    // function fetch() {
    //     console.log(search.value)
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=a6f29206c2cb7d9e262f5a26cbfe7e9e&units=metric`
    // //API key a6f29206c2cb7d9e262f5a26cbfe7e9e 
    
    // axios.get(url)
    
    //   .then(function (response) {
    //     // handle success
    //     nameOutput.innerText = response.data.name
    //     temp.innerText = " " + Math.floor(response.data.main.temp) + "°"
    //     cloudOutput.innerText = " " + response.data.clouds.all
    //     humidityOutput.innerText = " " + response.data.main.humidity
    //     windOutput.innerText = " " + response.data.wind.speed
    //     conditionOutput.innerText = response.data.weather[0].main
    //     console.log(response.data);
    //     console.log(response.data.console.log("ejiol")console.log("ejiol")weather[0].main);
    //   })
    
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    
    //   .finally(function () {
    //     console.log("All done")
    //     // always executed
    //   });
      
    // }

    // console.log(cities)
    // const time = "http://worldtimeapi.org/api/timezone/Lagos"

    // axios.get(time).then(function (response) {
    //     console.log(response)
    // }).catch(function(error) {
    //     console.log(error)
    // }).finally(function() {
    //     console.log("eiuheri")
    // })





// let cityInput = "London"

// cities.forEach(choice => {
//     choice.addEventListener("click", e => {
//       if (!acceptingAnswers) return;
  
//       acceptingAnswers = false;
//       const selectedChoice = e.target;
//       const selectedAnswer = selectedChoice.dataset["number"];
  
//       const classToApply =
//         selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  
//         if (classToApply === 'correct'){
//           incrementScore(CORRECT_BONUS)
//         }
//       selectedChoice.parentElement.classList.add(classToApply);
  
//       setTimeout(() => {
//         selectedChoice.parentElement.classList.remove(classToApply);
//         getNewQuestion();
//       }, 1000);
//     });
//   });

// cities.forEach(city => {
//     city.addEventListener('click', (e) => {

//         cityInput = e.target.innerHTML

//         fetchWeatherData();
//         app.style.opacity = '0'
//     });
//  });

//  form.addEventListener('submit', (e) =>{
//     if(search.value.length == 0){
//        alert('please type in a city name') 
//     } else {
//         cityInput = search.value
//         fetchWeatherData()
//         app.getElementsByClassName.opacity = 'e'
//     }
//     e.preventDefault()
    
//  })
// function daysOfTheWeek (day, month, year){
//     const weekDay = [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday' 
//     ]
//     return weekDay(new Date(`${day}/${month}/${year}`).getDay())
// }

// function fetchWeatherData() {
//     fetch(`http://api.weatherapi.com/v1/current.json?key=4e8e510e87b74c6cbc1162707221908=${cityInput}`)
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data)
//         temp.innerHTML = data.current.temp_c + "69176"
//         const date = data.location.localtime
//     })
// }