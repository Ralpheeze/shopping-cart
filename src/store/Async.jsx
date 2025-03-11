//LEARNING ASYNC
import React, { useEffect } from 'react'

const Async = () => {
    
// let pizza;
// function orderPizza() {
//     console.log("Order pizza");
    
//     setTimeout(() => 
//     {
//         pizza = '🍕';
//         console.log("order is being processed");

//     }, 2000);

// }
// orderPizza();
// console.log("Pizza is ready");
// console.log(`Time to eat ${pizza}`);

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = '🍕';
//     console.log(`${pizza} is being processed`)
//     callback(pizza);
//   }, 5000)
// }

// function pizzaReady() {
//   console.log('pizza is ready');
// }

// orderPizza(pizzaReady);
// console.log('Go take a stroll');

// window.addEventListener('click', callback)

// function callback() {
//   console.log('clicked');
// }

// let weather = getWeather();
// console.log(weather);

// function getWeather() {
//   callWeatherAPI(() => {
//     return 'sunny';
//   })
// }

// let weather;

// function getWeather() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve('cloudy');
//     }, 100);

//   })
// }

// function getWeatherIcon() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       switch(weather) {
//         case 'sunny':
//             resolve('☀️')
//             break
        
//         case 'cloudy':
//             resolve('☁️')
//             break

//         case 'rainy':
//             resolve('⛈️')
//             break

//         default:
//             reject('NO WEATHER ICON FOUND')
//         }
//     }, 2000)
//   })
// }

// function onSuccess(data) {
//     console.log(`success ${data}`)
// }

// function onError(error) {
//     console.log(`error ${error}`)
// }

// getWeather()
//     .then(getWeatherIcon)
//     // .then(onSuccess, onError) 
//     //OR
//     .then(onSuccess)
//     .catch(onError)

//FETCHING DATA FROM API
// console.log('start fetching...')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json()) //waits for API to respond and takes more time than normal lines of code
//     .then(data => console.log('received data', data));//runs when the data is ready

    
// console.log('continue with other tasks');

// const [data, setData] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((receivedData) => {
        // Log each object with "0 { body: book, id: 1 }" format
        receivedData.slice(0, 4).forEach((item, index) => {
          console.log(`${index + 1}: { body: "${item.body}", id: ${item.id} }`);
        });

        // Store data in state
        // setData(receivedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
        
    </div>
  )
};

export default Async;