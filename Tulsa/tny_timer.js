"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: William Geesey
   Date: 6/22/2023

*/

/* Execute the function to run and display the countdown clock */ 
showClock();
setInterval("showClock()", 1000);

/* Function to create and run the July 4th countdown clock */
function showClock() {
	var thisDay = new Date();
	var localDate = thisDay.toLocaleDateString();
	var localTime = thisDay.toLocaleTimeString();
	
	/* Calculate the days, hrs, min, sec until July 4th */ 
	document.getElementById("currentTime").innerHTML = "<span>" +localDate + "</span><span>" +
														localTime + "</span>";
	var j4Date = nextJuly4(thisDay);
	j4Date.setHours(21);
	var days = (j4Date - thisDay)/(1000*60*60*24);
	var hrs = (days - Math.floor(days))*24;
	var mins = (hrs - Math.floor(hrs))*60; 
	var secs = (mins - Math.floor(mins))*60;
	
	/* Display the time left until July 4th */
	document.getElementById("dLeft").textContent = Math.floor(days); 
	document.getElementById("hLeft").textContent = Math.floor(hrs); 
	document.getElementById("mLeft").textContent = Math.floor(mins); 
	document.getElementById("sLeft").textContent = Math.floor(secs);
}

/* Function to return the date of the next July 4th */
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}