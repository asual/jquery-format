[![npm version](https://badge.fury.io/js/jquery-format.svg)](https://badge.fury.io/js/jquery-format)

# jQuery Format

The jQuery Format plugin enables the formatting and parsing of dates and numbers. It's a 
client-side alternative of the popular 
[SimpleDateFormat](http://java.sun.com/javase/6/docs/api/java/text/SimpleDateFormat.html) 
and [NumberFormat](http://java.sun.com/javase/6/docs/api/java/text/NumberFormat.html) APIs.

## Usage

Formatting dates and numbers is as easy as the following:

    $.format.date(new Date(), 'MMMM dd, yyyy KK:mm:ss:SSS a');
    $.format.number(7456.2, '#,##0.00#');
    
Parsing is very similar to the formatting but works with strings as a first parameter:

    $.format.date('1.5.2009', 'dd.MM.yyyy');
    $.format.number('1.231.231.212,3241');
    
The second format parameter is always optional and by default the plugin uses the formats 
of the en_US locale. The locale can be globally configured using the following:

    $.format.locale({
        date: {
            format: 'MMM dd, yyyy h:mm:ss a',
            monthsFull: ['January','February','March','April','May','June',
                    'July','August','September','October','November','December'],
            monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            daysFull: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            daysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            shortDateFormat: 'M/d/yyyy h:mm a',
            longDateFormat: 'EEEE, MMMM dd, yyyy h:mm:ss a'
        },
        number: {
            format: '#,##0.0#',
            groupingSeparator: ',',
            decimalSeparator: '.'
        }
    });

## Changes

### 09/28/2013 - jQuery Format 1.3

- Issue 14: Incorrectly rounding up at 3 decimals
- Issue 9: Function 'date' should not use current time
- Various minor fixes

### 11/24/2011 - jQuery Format 1.2

- Issue 8: Parsing string
- Issue 5: Decimal rounding
- Fixed issue with fraction formatting

### 09/26/2010 - jQuery Format 1.1

- Issue 3: Issue on rounding
- Issue 2: A semicolon is missing line 275
- Issue 1: Issue with number format #.## (or more)

### 12/23/2009 - jQuery Format 1.0

Initial release
