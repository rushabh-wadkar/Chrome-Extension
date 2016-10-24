var textId = document.getElementById("text");
	var authorId = document.getElementById("authorName");

	function changeAfter(){

			var value = Math.floor(Math.random() * quotes.length);
			textId.innerHTML = quotes[value].qouteText;
			authorId.innerHTML = "- " + quotes[value].author;

	}

	changeAfter();
	//changing after every 10 seconds
	setInterval(changeAfter, 10000);	