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
function render ( cellType, content, rowToAddChildTo ) {
    var cell = document.createElement( cellType );
    cell.innerText = content;
    rowToAddChildTo.appendChild( cell );
}

// Create the Table Head
function createTableHead () {
    var header = document.getElementById('header-row');
    render( 'th', 'Hours', header );
    for ( var j = 0; j < storesArray.length; j++ ) {
        render( 'th', storesArray[j], header );
    }
}
createTableHead();

// var total = 0;

// for (var i = 0; i < hours.length; i++) {
//   //  var loc = storesArray[i];
//   //  total += loc.calcCookiesPerHr();
//   total += store1.cookieNeed[i];
  
  
//     console.log(total);

// }


// // Create the Table Footer
// function createTableFooter () {
//     var footer = document.getElementById('footer-row');

//     for ( var j = 0; j < cookies.length; j++ ) {
//         render( 'th', cookies[j], footer );
//     }
// }
// createTableFooter();

// Create the Table Data
function createTableData () {
    var body = document.getElementById('table-body');
    // each row needs a th with the hour
    // each row needs one td for each store with this.cookieNeed[i]

    for ( var j = 0; j < hours.length; j++ ) {
        render( 'tr', 'test', body );

    }
}
createTableData();


// for ( var j = 0; j < storesArray.length; j++ ) {

//     var store = stores[j];
//     var storeSection = document.getElementById('store-' + store.id);
    
//     var ellh = document.createElement('lh');
//     ellh.innerText = store.name;
//     storeSection.appendChild(ellh);

//     var ul = document.createElement('ul');
//     storeSection.appendChild(ul);



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