/* Ideally notifications will connect to the back end and the database will be used to scroll the notifications but this project is frontend only so I am ignoring all that and just creating a simple function to show the effect of scrolling through notifications */ 
var counter=1;

function showNotifications(){
	document.getElementById("notificationInside").style.display="flex";
	document.getElementById("notificationsButton").style.display="none";
	
	document.getElementById("generalNotifications").innerHTML="General Notification " + counter;
	document.getElementById("examNotifications").innerHTML="Exam Notification " + counter;
	document.getElementById("eventsNotifications").innerHTML="Events Notification " + counter;
}

function scrollNotifications(scrollDirection){
	if(scrollDirection === "next"){
		if(counter<=2){
			counter++;
			document.getElementById("generalNotifications").innerHTML="General Notification " + counter;
			document.getElementById("examNotifications").innerHTML="Exam Notification " + counter;
			document.getElementById("eventsNotifications").innerHTML="Events Notification " + counter;
		}
	}
	
	else {
		if(counter>=2){
			counter--;
			document.getElementById("generalNotifications").innerHTML="General Notification " + counter;
			document.getElementById("examNotifications").innerHTML="Exam Notification " + counter;
			document.getElementById("eventsNotifications").innerHTML="Events Notification " + counter;
		}
	}
}