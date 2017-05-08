'use strict';

// PDX Airport store object
var store1 = {
    name: 'PDX Airport',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 23,
    maxCust: 65,
    avgCookiesPerCust: 6.3,
    cookieNeed: [],
    calcCookiesPerHr,
    randCustCalc
};

// Pioneer Square store object
var store2 = {
    name: 'Pioneer Square',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    cookieNeed: [],
    calcCookiesPerHr,
    randCustCalc
};

// Powell's store object
var store3 = {
    name: 'Powell\'s',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 11,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    cookieNeed: [],
    calcCookiesPerHr,
    randCustCalc
};

// St. John's store object
var store4 = {
    name: 'St. John\'s',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 20,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    cookieNeed: [],
    calcCookiesPerHr,
    randCustCalc
};

// Waterfront store object
var store5 = {
    name: 'Waterfront',
    storeHours: '6:00 AM - 8:00 PM',
    minCust: 2,
    maxCust: 16,
    avgCookiesPerCust: 4.6,
    cookieNeed: [],
    calcCookiesPerHr,
    randCustCalc
};

// Create and populate array of each hour from 8 AM to 6 PM (that's 15)
var hours = [];
for ( var i = 6; i < 12; i++ ) {
    hours += [i + 'am: '];
}
// Add in 12pm since it is annoying me
hours += ['12pm: '];
for ( var j = 1; j < 7; j++ ) {
    hours += [j + 'pm: '];
}

var randCustCalc = function ( maxCust, minCust ) {
    // calculate random number of customers per hour (between the min and max)
    var randCust = Math.floor(Math.random() * ( this.maxCust - this.minCust ) + this.minCust +1 );
    return randCust;
};

// Calculate the number of cookies needed per hour
// cookiesNeeded/hr = (random estimated customers per hour) * (avg # cookies per customer)
var calcCookiesPerHr = function ( cookieNeed ) {
    cookieNeed = randCustCalc * this.avgCookiesPerCust;
    this.cookieNeed.push( cookieNeed );
};