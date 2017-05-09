'use strict';

var calcCookiesPerHr = function () {
    // calculate random number of customers per hour (between the min and max)
    // cookiesNeeded/hr = (random estimated customers per hour) * (avg # cookies per customer)
    var randCust = Math.floor(Math.random() * ( this.maxCust - this.minCust ) + this.minCust +1 );
    var cookies = Math.round(randCust * this.avgCookiesPerCust);
    this.cookieNeed.push( cookies );
    return cookies;
};

// PDX Airport store object
var store1 = {
    id: 1,
    name: 'PDX Airport',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 23,
    maxCust: 65,
    avgCookiesPerCust: 6.3,
    cookieNeed: [],
    calcCookiesPerHr: calcCookiesPerHr,
};

// Pioneer Square store object
var store2 = {
    id: 2,
    name: 'Pioneer Square',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    cookieNeed: [],
    calcCookiesPerHr: calcCookiesPerHr,
};

// Powell's store object
var store3 = {
    id: 3,
    name: 'Powell\'s',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 11,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    cookieNeed: [],
    calcCookiesPerHr: calcCookiesPerHr,
};

// St. John's store object
var store4 = {
    id: 4,
    name: 'St. John\'s',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 20,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    cookieNeed: [],
    calcCookiesPerHr: calcCookiesPerHr,
};

// Waterfront store object
var store5 = {
    id: 5,
    name: 'Waterfront',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 2,
    maxCust: 16,
    avgCookiesPerCust: 4.6,
    cookieNeed: [],
    calcCookiesPerHr: calcCookiesPerHr,
};

var hours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [store1, store2, store3, store4, store5];

for ( var j = 0; j < stores.length; j++ ) {

    var store = stores[j];
    var storeSection = document.getElementById('store-' + store.id);
    
    var ellh = document.createElement('lh');
    ellh.innerText = store.name;
    storeSection.appendChild(ellh);

    var ul = document.createElement('ul');
    storeSection.appendChild(ul);
    
    var total = 0;

    for (var i = 0; i < hours.length; i++) {
        total += store.calcCookiesPerHr();
        var li = document.createElement('li');
        li.innerText = hours[i] + ': ' + store.cookieNeed[i] + ' cookies';
        ul.appendChild(li);
    }
    li = document.createElement('li');
    li.innerText = 'Total: ' + total + ' cookies';
  //  ['Total:', total, 'cookies'].join(' ');
    ul.appendChild(li);
}