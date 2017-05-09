'use strict';

// calculate random number of customers per hour (between the min and max)
// cookiesNeeded/hr = (random estimated customers per hour) * (avg # cookies per customer)
var calcCookiesPerHr = function () {
    var randCust = Math.floor(Math.random() * ( this.maxCust - this.minCust ) + this.minCust +1 );
    var cookies = Math.round(randCust * this.avgCookiesPerCust);
    this.cookieNeed.push( cookies );
    return cookies;
};

// Construct the store object
function Store ( id, name, minCust, maxCust, avgCookiesPerCust, cookieNeed ) {
    this.id = id;
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerCust = avgCookiesPerCust;

    // Array filled from calcCookiesPerHr
    this.cookieNeed = cookieNeed;

    // One method for this object: calculate the cookies per hour (for each store)
    this.calcCookiesPerHr = calcCookiesPerHr;
}

var store1 = new Store( 1, 'PDX Airport', 23, 65, 6.3, [] );
var store2 = new Store( 2, 'Pioneer Square', 3, 24, 1.2, [] );
var store3 = new Store( 3, 'Powell\'s', 11, 38, 2.3, [] );
var store4 = new Store( 4, 'St. John\'s', 20, 38, 2.3, [] );
var store5 = new Store( 5, 'Waterfront', 2, 16, 4.6, [] );

Store.prototype.storeHours = '6:00 AM - 8:00 PM';

// Hours and Stores arrays to use later
var hours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var storesArray = [store1.name, store2.name, store3.name, store4.name, store5.name];

// Helper function to create cells by row
function render ( cellType, content, row ) {
    var cell = document.createElement( cellType );
    cell.innerText = content;
    row.appendChild( cell );
}

// Create the Table Head
function createTableHead () {
    var header = document.getElementById('header-row');

    for ( var j = 0; j < storesArray.length; j++ ) {
        render( 'th', storesArray[j], header );
    }
}
createTableHead();

// for ( var j = 0; j < storesArray.length; j++ ) {

//     var store = stores[j];
//     var storeSection = document.getElementById('store-' + store.id);
    
//     var ellh = document.createElement('lh');
//     ellh.innerText = store.name;
//     storeSection.appendChild(ellh);

//     var ul = document.createElement('ul');
//     storeSection.appendChild(ul);
    
//     var total = 0;

//     for (var i = 0; i < hours.length; i++) {
//         total += store.calcCookiesPerHr();
//         var li = document.createElement('li');
//         li.innerText = hours[i] + ': ' + store.cookieNeed[i] + ' cookies';
//         ul.appendChild(li);
//     }
//     li = document.createElement('li');
//     li.innerText = 'Total: ' + total + ' cookies';
//     //  ['Total:', total, 'cookies'].join(' ');     // another way to do the line above
//     ul.appendChild(li);
// }


// for ( var j = 0; j < stores.length; j++ ) {

//     var store = stores[j];
//     var storeSection = document.getElementById('store-' + store.id);
    
//     var ellh = document.createElement('lh');
//     ellh.innerText = store.name;
//     storeSection.appendChild(ellh);

//     var ul = document.createElement('ul');
//     storeSection.appendChild(ul);
    
//     var total = 0;

//     for (var i = 0; i < hours.length; i++) {
//         total += store.calcCookiesPerHr();
//         var li = document.createElement('li');
//         li.innerText = hours[i] + ': ' + store.cookieNeed[i] + ' cookies';
//         ul.appendChild(li);
//     }
//     li = document.createElement('li');
//     li.innerText = 'Total: ' + total + ' cookies';
//     //  ['Total:', total, 'cookies'].join(' ');     // another way to do the line above
//     ul.appendChild(li);
// }

// // PDX Airport store object
// var store1 = {
//     id: 1,
//     name: 'PDX Airport',
//     storeHours: '6:00 AM - 8:00 PM',
//     minCust: 23,
//     maxCust: 65,
//     avgCookiesPerCust: 6.3,
//     cookieNeed: [],
//     calcCookiesPerHr: calcCookiesPerHr,
// };

// // Pioneer Square store object
// var store2 = {
//     id: 2,
//     name: 'Pioneer Square',
//     storeHours: '6:00 AM - 8:00 PM',
//     minCust: 3,
//     maxCust: 24,
//     avgCookiesPerCust: 1.2,
//     cookieNeed: [],
//     calcCookiesPerHr: calcCookiesPerHr,
// };

// // Powell's store object
// var store3 = {
//     id: 3,
//     name: 'Powell\'s',
//     storeHours: '6:00 AM - 8:00 PM',
//     minCust: 11,
//     maxCust: 38,
//     avgCookiesPerCust: 2.3,
//     cookieNeed: [],
//     calcCookiesPerHr: calcCookiesPerHr,
// };

// // St. John's store object
// var store4 = {
//     id: 4,
//     name: 'St. John\'s',
//     storeHours: '6:00 AM - 8:00 PM',
//     minCust: 20,
//     maxCust: 38,
//     avgCookiesPerCust: 2.3,
//     cookieNeed: [],
//     calcCookiesPerHr: calcCookiesPerHr,
// };

// // Waterfront store object
// var store5 = {
//     id: 5,
//     name: 'Waterfront',
//     storeHours: '6:00 AM - 8:00 PM',
//     minCust: 2,
//     maxCust: 16,
//     avgCookiesPerCust: 4.6,
//     cookieNeed: [],
//     calcCookiesPerHr: calcCookiesPerHr,
// };