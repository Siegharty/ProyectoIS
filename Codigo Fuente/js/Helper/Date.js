var DateHelper = {
  fechaDDMMYYYY: (d) => {
    var date = new Date(d);
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var m = date.getMinutes();
    var ss = date.getSeconds();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    if (hh < 10) {
      hh = '0' + hh;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (ss < 10) {
      ss = '0' + ss;
    }

    return (d = `${dd}/${mm}/${yyyy} ${hh}:${m}:${ss}`);
  },
};

export default DateHelper;
