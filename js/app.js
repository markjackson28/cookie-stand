'use strict'

// console.log('Hello World');

const seattleList = document.getElementById('seattle-list');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  avgCookieSoldEachHourArray: [],
  getrandomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  randomCookiesPerHour: function () {
    return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
  },
    // for loop
    //Pushes into the array
    //this.avgCookieSoldEachHourArray.push(randomCookiesPerHour):
  

};


console.log(seattle.getrandomCustomersPerHour());
console.log(seattle.randomCookiesPerHour());

// List elements start
// for (let i = 0; i < hours.length; i++){
//   let li = document.createElement('li');
//   li.textContent = 'input hours array and sales';
//   seattleList.appendChild(li)
// }
