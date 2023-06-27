"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: William Geesey
   Date:  6/22/2023   

	
*/
/* Set the date displayed in the calendar */ 
var thisDay = new Date("August 30, 2018");

/* Generate the calendar table */ 
var tableHTML = "<table id='eventTable'>" + 
				"<caption>Upcoming Events</caption>" +
				"<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

/* For loop to populate the calendar with the events, descriptions and prices */
for (var i = 0; i < eventDates.length; i++) { 

	var eventDate = new Date(eventDates[i]);
	var eventDay = eventDate.toDateString();
	var eventTime = eventDate.toLocaleTimeString();
	
	if ((thisDay <= eventDate) && (eventDate <= endDate)) {
		tableHTML += "<tr> <td>" + eventDay + "@" + eventTime + "</td> <td>" +
					eventDescriptions[i] + "</td> <td>" + eventPrices[i] + 
					"</td> </tr>";
	}
}

/* Close the table element */
tableHTML += "</table>";

/* Insert the tableHTML into the document */
document.getElementById("eventList").innerHTML = tableHTML;