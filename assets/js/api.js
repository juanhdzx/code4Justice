var url = "https://jooble.org/api/";
var key = "7bba80c0-9960-448c-94d0-bd1345e3b7ed";
var params = "{ keywords: 'it', location: 'richmond'}"
var postKey="POST"
function receiveInput() {
    var keyInput = document.getElementById("keyTerm").value;
    var locatInput=document.getElementById("locatHTML").value; 
    return params = `{keywords: '${keyInput}', location:'${locatInput}' }`;
}

// //create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

// Send the proper header information
http.setRequestHeader("Content-type", "application/json");



// Callback when the state changes
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        const jobApi=JSON.parse(http.responseText);
        const jobs=jobApi.jobs;
        let html="";
        html+= `<div id='totalJobs'> <b> Total Jobs</b> ${jobApi.totalCount} </div></br>`;
        for (i=0;i<jobs.length;i++){
            html+=`<div class='job'><p>${i+1}&nbsp;&nbsp;&nbsp;&nbsp; Job: ${jobs[i].title}&nbsp;&nbsp;&nbsp;&nbsp; location: ${jobs[i].location
            }&nbsp;&nbsp;&nbsp;&nbsp; company:  ${jobs[i].company
            }&nbsp;&nbsp;&nbsp;&nbsp; link: </p> <a class ='jobUrl' href="${jobs[i].link}">Link</a>`;
        }
        document.getElementById("apiResults").innerHTML=html;

    }
}
//Send request to the server
function tester(keyword,locat){
return params=`{ keywords: '${keyword}', location: '${locat}'}`;
};
function test2(){
    http.open(postKey, url + key, true)
}
// http.send(params);