module("Dates");

test("Basic requirements", function() {
    
    var d = new Date();
    var f = 'MMMM dd, yyyy KK:mm:ss:SSS a';
    var df = $.format.date(d, f);
    equals($.format.date(df, f).getTime(), d.getTime());
    
    f = 'dd.MM.yyyy';
    df = $.format.date('1.5.2009', f);
    d = new Date(df);
    equals($.format.date(d, f), '01.05.2009');
    
    $.format.locale({
        date: {
            format: 'EEEE, \'o\'\'clock\' dd\' de \'MMMM\' de \'yyyy H:mm:ss',
            monthsFull: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
            monthsShort: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],
            daysFull: ['domingo','lunes','martes','mi�rcoles','jueves','viernes','s�bado'],
            daysShort: ['dom','lun','mar','mi�','jue','vie','s�b'],
            timeFormat: 'H:mm:ss',
            shortDateFormat: 'dd/MM/yyyy',
            longDateFormat: 'EEEE, dd\' de \'MMMM\' de \'yyyy'
        }
    });

    d = new Date();
    d.setYear(1976);
    d.setMonth(4);
    d.setDate(31);
    d.setHours(3);
    d.setMinutes(20);
    d.setSeconds(43);
    d.setMilliseconds(0);

    equals($.format.date(d), 'lunes, o\'clock 31 de mayo de 1976 3:20:43');
    
});

module("Number");

test("Basic requirements", function() {
    
    equals($.format.number(0.123, '#0.0000'), '0.1230');
    equals($.format.number(7456.2, '#,##0.0#'), '7,456.2');
    equals($.format.number(7456.351, '#,##0.#'), '7,456.4');
    equals($.format.number(123.4, '#,##0.00#'), '123.40');
    equals($.format.number(12.32410, '#,##0.0000#'), '12.3241');
    equals($.format.number(0.123213, '#,##0.00###'), '0.12321');
    equals($.format.number(2101.234, '#,###'), '2,101');
    equals($.format.number(101.7, '#,###'), '102');
    equals($.format.number(0.123, '.0000'), '.1230');
    equals($.format.number(5.155, '.0#'), '.16');
    equals($.format.number(540.23, '###'), '540');
    equals($.format.number(540.23, '###.'), '540');
    equals($.format.number(540, '###.##'), '540');
    equals($.format.number(19.03), '19.03');
    equals($.format.number(5.0303, '00.0000'), '05.0303');
    equals($.format.number(5.0099, '#,##0.00'), '5.01');
    equals($.format.number(5.1009, '#,##0.00'), '5.10');
    equals($.format.number(5.1001, '#,##0.000'), '5.100');

    equals($.format.number(23540.23, '#,###.##'), '23,540.23');
    equals($.format.number(23540.23, '#,###'), '23,540');
    equals($.format.number(23540.23, '#####.000'), '23540.230');
    equals($.format.number(3.14, '#00.#'), '03.1');
    equals($.format.number(10.9, '#,##0.0#'), '10.9');

    equals($.format.number(1.02, "#.##"), '1.02');
    equals($.format.number(1.12, "#.##"), '1.12');
    equals($.format.number(1.999, "#.##"), '2');
    equals($.format.number(-2000.10, '#,###.00'), '-2,000.10');

    equals($.format.number('.1230'), 0.123);
    equals($.format.number('86.02'), 86.02);
    equals($.format.number('03.14'), 3.14);

    $.format.locale({
        number: {
            groupingSeparator: '.',
            decimalSeparator: ','
        }
    });
    
    equals($.format.number(123.4, '#,##0.000'), '123,400');
    equals($.format.number(12.32410, '#,##0.0000#'), '12,3241');
    equals($.format.number(2123.4, '#,##0.000'), '2.123,400');
    equals($.format.number(1231231212.32410, '#,##0.0000#'), '1.231.231.212,3241');
    equals($.format.number(-999, "#,###"), '-999');
    
    equals($.format.number('1.231.231.212,3241'), 1231231212.3241);
    equals($.format.number('18,00.5'), 18.005);
    
    $.format.locale({
        number: {
            groupingSeparator: '\'',
            decimalSeparator: '.'
        }
    });
    
    equals($.format.number(123.4, '#,##0.000'), '123.400');
    equals($.format.number(12.32410, '#,##0.0000#'), '12.3241');
    equals($.format.number(2123.4, '#,##0.000'), "2'123.400");
    equals($.format.number(1231231212.32410, '#,##0.0000#'), "1'231'231'212.3241");
    
    equals($.format.number("1'231'231'212.3241"), 1231231212.3241);
    equals($.format.number("18.00'5"), 18.005);
    
});