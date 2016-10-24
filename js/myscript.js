function getMonth(monthId){
	switch(monthId){
		case 0: return 'January';
			break;
		case 1: return 'February';
			break;
		case 2: return 'March';
			break;
		case 3: return 'April';
			break;
		case 4: return 'May';
			break;
		case 5: return 'June';
			break;
		case 6: return 'July';
			break;
		case 7: return 'August';
			break;
		case 8: return 'September';
			break;
		case 9: return 'October';
			break;
		case 10: return 'November';
			break;
		case 11: return 'December';
			break;
		default: return 'Undefined';
			break;
	}
}
function getHours(hoursId)
{
	var result = hoursId;
	if(hoursId>12&&hoursId<=23)
		result = hoursId - 12;
	if(result<10)
		result = "0" + result;
	return result;
}
function displayPerfect(x)
{
	if(x<10)
		return "0"+x;
	return x;
}

function getSuperscript(x){
	 x = x%10;
		if(x==1)
			return "st";
		else if(x==2)
			return "nd";
		else if(x==3)
			return "rd";
	 else 
		 return "th";
}
function getDay(monthId){
	switch(monthId){
		case 0: return 'Sunday';
			break;
		case 1: return 'Monday';
			break;
		case 2: return 'Tuesday';
			break;
		case 3: return 'Wednesday';
			break;
		case 4: return 'Thursday';
			break;
		case 5: return 'Friday';
			break;
		case 6: return 'Saturday';
			break;
		case 7: return 'Sunday';
			break;
		default: return "Alien Day!";
			break;
	}
}
var timeId = document.getElementById("time");
function displayTime(){
	var date = new Date();
	timeId.innerHTML = "<center>"+getHours(date.getHours()) + ":" + displayPerfect(date.getMinutes()) + ":" + displayPerfect(date.getSeconds()) + "<br>" + displayPerfect(date.getDate()) + "<sup>"+ getSuperscript(date.getDate()) +"</sup> " + getMonth(date.getMonth()) + ", " + date.getFullYear() + ".<br>(" + getDay(date.getDay()) + ")</center>";
}
setInterval(displayTime, 1000);

//below is the code which runs after every 5 seconds
// Declaring array of images
var imagesArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];

var textId = document.getElementById("text");
var authorId = document.getElementById("authorName");

function changeAfter(){
		document.body.style.backgroundImage = "url('images/bg/"+ imagesArray[Math.floor(Math.random() * imagesArray.length)] +"')";
	
		var value = Math.floor(Math.random() * quotes.length);
		textId.innerHTML = quotes[value].qouteText;
		authorId.innerHTML = "- " + quotes[value].author;

}

//changing after every 10 seconds
setInterval(changeAfter, 10000);				