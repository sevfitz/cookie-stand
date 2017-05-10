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
}

var hours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var store1 = new Store( 1, 'PDX Airport', 23, 65, 6.3, [] );
var store2 = new Store( 2, 'Pioneer Square', 3, 24, 1.2, [] );
var store3 = new Store( 3, 'Powell\'s', 11, 38, 2.3, [] );
var store4 = new Store( 4, 'St. John\'s', 20, 38, 2.3, [] );
var store5 = new Store( 5, 'Waterfront', 2, 16, 4.6, [] );

Store.prototype.storeHours = '6:00 AM - 8:00 PM';
Store.prototype.calcCookiesPerHr = function () {
    for ( var h = 0; h < hours.length; h++ ) {
        var randCust = Math.floor(Math.random() * ( this.maxCust - this.minCust ) + this.minCust +1 );
        var cookies = Math.round(randCust * this.avgCookiesPerCust);
        this.cookieNeed.push( cookies );
    }
};

store1.calcCookiesPerHr();
store2.calcCookiesPerHr();
store3.calcCookiesPerHr();
store4.calcCookiesPerHr();
store5.calcCookiesPerHr();

// Hours and Stores arrays to use later

var storesArray = [store1, store2, store3, store4, store5];

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
        render( 'th', storesArray[j].name, header );
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




// Create the Table Data
function createTableData () {
    var body = document.getElementById('table-body');

    for ( var k = 0; k < hours.length; k++ ) {
        var tr = document.createElement('tr');
        body.appendChild(tr);
        render( 'td', hours[k], tr );

        for ( var l = 0; l < storesArray.length; l++ ) {
            render('td', storesArray[l].cookieNeed[k], tr );
        }
    }
}
createTableData();
    
// // Create the Table Footer
// function createTableFooter () {
//     var footer = document.getElementById('footer-row');

//     for ( var j = 0; j < totalsArray.length; j++ ) {
//         render( 'tr', totalsArray[j], footer );
//     }
// }
// createTableFooter();


// for ( var j = 0; j < storesArray.length; j++ ) {

//     var store = stores[j];
//     var storeSection = document.getElementById('store-' + store.id);
    
//     var ellh = document.createElement('lh');
//     ellh.innerText = store.name;
//     storeSection.appendChild(ellh);

//     var ul = document.createElement('ul');
//     storeSection.appendChild(ul);



// for ( var j = 0; j < storesArray.length; j++ ) {

//     var store = storesArray[j];
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