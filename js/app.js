'use strict';

// TODO: take functions out since don't need them
// TODO: combine the thead and tfoot into one function

// Construct the store object
function Store ( name, minCust, maxCust, avgCookiesPerCust, cookieNeed ) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerCust = avgCookiesPerCust;

    // Array filled from calcCookiesPerHr
    this.cookieNeed = cookieNeed;
}

var hours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var store1 = new Store( 'PDX Airport', 23, 65, 6.3, [] );
var store2 = new Store( 'Pioneer Square', 3, 24, 1.2, [] );
var store3 = new Store( 'Powell\'s', 11, 38, 2.3, [] );
var store4 = new Store( 'St. John\'s', 20, 38, 2.3, [] );
var store5 = new Store( 'Waterfront', 2, 16, 4.6, [] );

Store.prototype.storeHours = '6:00 AM - 8:00 PM';

// calculate random number of customers per hour (between the min and max)
// cookiesNeeded/hr = (random estimated customers per hour) * (avg # cookies per customer)
// add the cookies into the cookieNeed array for each store
Store.prototype.calcCookiesPerHr = function () {
    for ( var h = 0; h < hours.length; h++ ) {
        var randCust = Math.floor(Math.random() * ( this.maxCust - this.minCust ) + this.minCust +1 );
        var cookies = Math.round(randCust * this.avgCookiesPerCust);
        this.cookieNeed.push( cookies );
    }
};

// TODO create a for loop later
store1.calcCookiesPerHr();
store2.calcCookiesPerHr();
store3.calcCookiesPerHr();
store4.calcCookiesPerHr();
store5.calcCookiesPerHr();

// Stores array
var storesArray = [store1, store2, store3, store4, store5];

// Helper function to create cells by row
function render ( cellType, content, rowToAddChildTo ) {
    var cell = document.createElement( cellType );
    cell.innerText = content;
	rowToAddChildTo.appendChild( cell );
}

// Create the Table Head
(function createTableHead () {
    var header = document.getElementById('header-row');
    render( 'th', 'Hours', header );
    for ( var j = 0; j < storesArray.length; j++ ) {
        render( 'th', storesArray[j].name, header );
    }
    render( 'th', 'Hourly Totals', header );
})();


// Variables for store totals
var total = 0;
var totalsArray = [];
var grandTotal = 0;

// Create an array of the store totals
(function createTotalsArray () {

    for ( var s = 0; s < storesArray.length; s++ ) {
        for ( var t = 0; t < hours.length; t++ ) {
            total += storesArray[s].cookieNeed[t];
        }
        totalsArray.push( total );  
        grandTotal += total;
        total = 0;
    }
    return grandTotal;
})();

// Variables for hourly totals
var totalByHour = 0;
var totalsByHourArray = [];

// Create an array of totals for all stores by hour
(function createTotByHourArray () {
    for ( var t = 0; t < hours.length; t++ ) {
        for ( var s = 0; s < storesArray.length; s++ ) {
            totalByHour += storesArray[s].cookieNeed[t];
        }
        totalsByHourArray.push( totalByHour );  
        totalByHour = 0;
    }
})();

// Create the Table Data
(function createTableData () {
    var body = document.getElementById('table-body');

    for ( var k = 0; k < hours.length; k++ ) {
        var tr = document.createElement('tr');
        body.appendChild(tr);
        render( 'td', hours[k], tr );

        for ( var l = 0; l < storesArray.length; l++ ) {
            render('td', storesArray[l].cookieNeed[k], tr );
        }
        render( 'td', totalsByHourArray[k], tr);
    }
})();

// Create the Table Footer and add Grand Total to last column/row
(function createTableFooter () {
    var footer = document.getElementById('footer-row');
    render( 'th', 'Store Totals: ', footer );
    for ( var f = 0; f < totalsArray.length; f++ ) {
        render( 'th', totalsArray[f], footer );
    }
    render( 'th', grandTotal, footer );
})();