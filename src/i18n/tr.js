$.format.locale({
  date: {
    format: 'dd.MMM.yyyy HH:mm:ss',
    monthsFull: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthsShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    daysFull: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    daysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    shortDateFormat: 'dd.MM.yyyy',
    longDateFormat: 'dd MMMM yyyy EEEE HH:mm:ss'
  },
  number: {
    format: '#,##0.00',
    groupingSeparator: '.',
    decimalSeparator: ','
  }
});
