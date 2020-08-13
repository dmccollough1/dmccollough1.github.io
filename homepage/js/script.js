var d = new Date();
var dateText = document.querySelector("#date");

window.onload = function() {
    setDate();
    getPost();
};

function getPost(){
    const url = 'https://www.reddit.com/r/wallpapers/top/.json';
    $.get(url, function(data, status){
        getBackground(data);
    })
}

function getBackground(data){
    const bgPath = data.data.children[0].data.url;
    document.querySelector('html').style.backgroundImage = "url(" + bgPath + ")";
}

function setDate(){
    var day = numberToDay(d.getDay());
    var date = d.getDate();
    var month = numberToMonth(d.getMonth());
    var year = d.getFullYear();
    dateText.innerHTML = day + " " + date + " " + month + " " + year;
}

function numberToDay(i){
    switch(i){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Whattheheck";
    }
}

function numberToMonth(i){
    switch(i){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "No month";
    }
}