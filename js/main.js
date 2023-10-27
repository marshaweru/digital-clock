let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

//To get date and time we use js object called date

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

},1000)//Set to 1000 milliseconds which is 1 sec

//To print current time
//console.log(currentTime);
//Then go to website and open console
//To get time only, remove date and day, and use JS methods getHours, getMinutes, getSeconds
//console.log(currentTime.getHours())//This will get you hours in current time, etc

//So display everything

//The above will not update everysecond so we use set Interval shown above
