// let arr = ['Osiel', 'Jordan', 'Jodi', 'Narivi'];
// arr.reverse();
// console.log(arr);

function noOfDaysFunction() {

    var startDate = document.getElementById("fromDate").value;
    
    var endDate = document.getElementById("toDate").value;
    
    var aa = moment(startDate, 'YYYY/MM/DD');
    
    var bb = moment(endDate, 'YYYY/MM/DD');
    
    var days1 = bb.diff(aa, 'days');
    
    document.getElementById("noofdays").value = days1;
    
    }