'use strict'

const salmonCookieTable = document.getElementById('salmonCookieTable');
const salmonCookieTableFooter = document.querySelector('tfoot');
let cookieForm = document.getElementById('cookie-form');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let grandTotal = 0;

function Stores(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgCookieSoldEachHourArray = [];
  this.dailyTotal = 0;
  allStores.push(this);
  
  this.renderSales();
}

Stores.prototype.getrandomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
}

Stores.prototype.getrandomCookiesPerHour = function () {
  return Math.ceil(this.getrandomCustomersPerHour() * this.avg);
}

Stores.prototype.getArrayPush = function () {
  for (let i = 0; i < hours.length; i++) {
    this.avgCookieSoldEachHourArray.push(this.getrandomCookiesPerHour());
  }
}

Stores.prototype.totalSales = function () {
  this.getArrayPush();
  for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
    this.dailyTotal += this.avgCookieSoldEachHourArray[i];
  }
}

Stores.prototype.renderSales = function () {
  this.totalSales();
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.avgCookieSoldEachHourArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.avgCookieSoldEachHourArray[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = this.dailyTotal
  tr.appendChild(td);
  
  salmonCookieTable.appendChild(tr);
}

function hoursHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = 'Hours';
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);

  salmonCookieTable.appendChild(thead);
}

function sumFooter() {
  salmonCookieTableFooter.innerHTML = '';
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Total';
  tr.appendChild(td);

  grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let columnTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      columnTotal += allStores[j].avgCookieSoldEachHourArray[i];
    }

    let td = document.createElement('td');
    td.textContent = columnTotal;
    tr.appendChild(td);

    grandTotal += columnTotal;
  }

  let td1 = document.createElement('td');
  td1.textContent = grandTotal;
  tr.appendChild(td1);

  salmonCookieTableFooter.appendChild(tr);
}

function handleSubmit(event) {
  event.preventDefault();

  let storeName = event.target.name.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let average = +event.target.average.value;

  new Stores(storeName, min, max, average);

  event.target.name.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.average.value = '';
  
  sumFooter();
}

hoursHeader();
new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);
sumFooter();

cookieForm.addEventListener('submit', handleSubmit);
