'use strict'

// console.log('Hello World');

const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');
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
  getrandomCookiesPerHour: function () {
    return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
  },
  getArrayPush: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookieSoldEachHourArray.push(this.getrandomCookiesPerHour());
    }
  },
  totalSales: function () {
    for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
      this.dailyTotal += this.avgCookieSoldEachHourArray[i];
    }
  },
  renderSales: function () { 
    for (let i = 0; i < hours.length; i++) {
      let hoursLi = document.createElement('li');
      hoursLi.textContent = `${hours[i]}: ${this.getrandomCookiesPerHour()} cookies`;
      seattleList.appendChild(hoursLi);
    }
    let totalList = document.createElement('li');
    totalList.textContent = `Total: ${this.dailyTotal} cookies`
    seattleList.appendChild(totalList);
  },
};

  seattle.getArrayPush();
  seattle.totalSales(); 
  seattle.renderSales();
  
  // seattle.getArrayPush();
  // seattle.totalSales();
  // console.log(seattle.getrandomCustomersPerHour());
  // console.log(seattle.getrandomCookiesPerHour());
  // console.log(seattle.avgCookieSoldEachHourArray);
  // console.log(seattle.dailyTotal)
  
  let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
  dailyTotal: 0,
  avgCookieSoldEachHourArray: [],
  getrandomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getrandomCookiesPerHour: function () {
    return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
  },
  getArrayPush: function () {
    for (let i = 0; i < hours.length; i++) {
    this.avgCookieSoldEachHourArray.push(this.getrandomCookiesPerHour());
    }
  },
  totalSales: function () {
    for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
      this.dailyTotal += this.avgCookieSoldEachHourArray[i];
    }
  },
  renderSales: function () { 
    for (let i = 0; i < hours.length; i++) {
      let hoursLi = document.createElement('li');
      hoursLi.textContent = `${hours[i]}: ${this.getrandomCookiesPerHour()} cookies`;
      tokyoList.appendChild(hoursLi);
      }
      let totalList = document.createElement('li');
      totalList.textContent = `Total: ${this.dailyTotal} cookies`
      tokyoList.appendChild(totalList);
  },
};

  tokyo.getArrayPush();
  tokyo.totalSales(); 
  tokyo.renderSales();


  let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    dailyTotal: 0,
    avgCookieSoldEachHourArray: [],
    getrandomCustomersPerHour: function () {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getrandomCookiesPerHour: function () {
      return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
    },
    getArrayPush: function () {
      for (let i = 0; i < hours.length; i++) {
      this.avgCookieSoldEachHourArray.push(this.getrandomCookiesPerHour());
      }
    },
    totalSales: function () {
      for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
        this.dailyTotal += this.avgCookieSoldEachHourArray[i];
      }
    },
    renderSales: function () { 
      for (let i = 0; i < hours.length; i++) {
        let hoursLi = document.createElement('li');
        hoursLi.textContent = `${hours[i]}: ${this.getrandomCookiesPerHour()} cookies`;
        dubaiList.appendChild(hoursLi);
        }
        let totalList = document.createElement('li');
        totalList.textContent = `Total: ${this.dailyTotal} cookies`
        dubaiList.appendChild(totalList);
    },
  };
  
    dubai.getArrayPush();
    dubai.totalSales(); 
    dubai.renderSales();
  

    let paris = {
      name: 'Paris',
      min: 20,
      max: 38,
      avg: 2.3,
      dailyTotal: 0,
      avgCookieSoldEachHourArray: [],
      getrandomCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      getrandomCookiesPerHour: function () {
        return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
      },
      getArrayPush: function () {
        for (let i = 0; i < hours.length; i++) {
        this.avgCookieSoldEachHourArray.push(this.getrandomCookiesPerHour());
        }
      },
      totalSales: function () {
        for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
          this.dailyTotal += this.avgCookieSoldEachHourArray[i];
        }
      },
      renderSales: function () { 
        for (let i = 0; i < hours.length; i++) {
          let hoursLi = document.createElement('li');
          hoursLi.textContent = `${hours[i]}: ${this.getrandomCookiesPerHour()} cookies`;
          parisList.appendChild(hoursLi);
          }
          let totalList = document.createElement('li');
          totalList.textContent = `Total: ${this.dailyTotal} cookies`
          parisList.appendChild(totalList);
      },
    };
    
      paris.getArrayPush();
      paris.totalSales(); 
      paris.renderSales();
    

    
      let lima = {
        name: 'Lima',
        min: 2,
        max: 16,
        avg: 4.6,
        dailyTotal: 0,
        avgCookieSoldEachHourArray: [],
        getrandomCustomersPerHour: function () {
          return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
        getrandomCookiesPerHour: function () {
          return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
        },
        getArrayPush: function () {
          for (let i = 0; i < hours.length; i++) {
          this.avgCookieSoldEachHourArray.push(this.getrandomCookiesPerHour());
          }
        },
        totalSales: function () {
          for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
            this.dailyTotal += this.avgCookieSoldEachHourArray[i];
          }
        },
        renderSales: function () { 
          for (let i = 0; i < hours.length; i++) {
            let hoursLi = document.createElement('li');
            hoursLi.textContent = `${hours[i]}: ${this.getrandomCookiesPerHour()} cookies`;
            limaList.appendChild(hoursLi);
            }
            let totalList = document.createElement('li');
            totalList.textContent = `Total: ${this.dailyTotal} cookies`
            limaList.appendChild(totalList);
        },
      };
      
        lima.getArrayPush();
        lima.totalSales(); 
        lima.renderSales();
      