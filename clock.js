let datetime;
let date;
let time;
let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

setInterval(() => { 
    datetime = new Date();
    date = datetime.toLocaleDateString(undefined,options);
    time = datetime.getHours() + ":"+ datetime.getMinutes() + ":" + datetime.getSeconds();
    document.getElementById('time').innerHTML = time + ' on ' + date;
    document.getElementById('zone').innerHTML = zone;
}, 1000);
// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)