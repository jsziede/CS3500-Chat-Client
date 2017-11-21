//prints all the emojis
//emojis are separated by each categry, which is what each for loop does
function printEmojis() {
	//gets the div that contains the emojis
	var list = document.getElementById("emojis");
	//creates new heading to tell user where all emojis of the Classic Faces category are
	var classicFaces = document.createElement('h3');
	//text of the heading
	classicFaces.innerHTML = "Classic Faces";
	//append the heading to the div of emojis
	list.appendChild(classicFaces);
	//print all the Classic Faces emojis
	for (var i = 0; i < 98; i++) {
		//each emoji is stored as a <p> element
        var emoji = document.createElement('p');
        //emojis are given a class name equal to their index in the list
        emoji.className = i;
        //puts the unicode value of the emoji inside the <p> tag
        emoji.innerHTML = emojis[i];
        //adds a click event to insert the emoji into the text box
        emoji.addEventListener("click", insertEmojis, false);
        //puts the <p> tag into the emoji div
        list.appendChild(emoji);
    }
    //repear for all categories
    var peopleActivities = document.createElement('h3');
	peopleActivities.innerHTML = "People and Activities";
	list.appendChild(peopleActivities);
	for (var i = 98; i < 381; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    for (var i = 386; i < 431; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var hands = document.createElement('h3');
	hands.innerHTML = "Hands and Senses";
	list.appendChild(hands);
	for (var i = 436; i < 611; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    for (var i = 616; i < 641; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var clothes = document.createElement('h3');
	clothes.innerHTML = "Interaction and Fashion";
	list.appendChild(clothes);
	for (var i = 641; i < 698; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var animals = document.createElement('h3');
	animals.innerHTML = "Animals, Plants, and Food";
	list.appendChild(animals);
	for (var i = 698; i < 894; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var place = document.createElement('h3');
	place.innerHTML = "Time, Space, Transport, and Weather";
	list.appendChild(place);
	for (var i = 894; i < 1107; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var culture = document.createElement('h3');
	culture.innerHTML = "Culture and Items";
	list.appendChild(culture);
	for (var i = 1107; i < 1327; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var signs = document.createElement('h3');
	signs.innerHTML = "Signs and Shapes";
	list.appendChild(signs);
	for (var i = 1327; i < 1529; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
    var flags = document.createElement('h3');
	flags.innerHTML = "Flags";
	list.appendChild(flags);
	for (var i = 1529; i < emojis.length; i++) {
        var emoji = document.createElement('p');
        emoji.className = i;
        emoji.innerHTML = emojis[i];
        emoji.addEventListener("click", insertEmojis, false);
        list.appendChild(emoji);
    }
}

//inserts an emoji into the text input when clicked on
function insertEmojis() {
	//the text box
    var $txt = jQuery("#textinput");
    //gets the position of the cursor inside the text box
    var caretPos = $txt[0].selectionStart;
    var textAreaTxt = $txt.val();
    //stores the emoji in unicode form
    var alt = $(this).children("img").attr("alt");
    //adds a space after the emoji
    var txtToAdd = alt + " ";
    //inserts the unicode emoji with the space
    $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
}

//Toggles the settings box as visible or not
function toggleSettings() {
	//if the list is visible, then hide it
	if(document.getElementById("emojis").style.display == 'block') {
		document.getElementById("emojis").style.display = 'none';
		document.getElementById("emojis").style.maxheight = '0';
	}
	//if the box is visible, then hide it
	if(document.getElementById("settings").style.display == 'block') {
		document.getElementById("settings").style.display = 'none';
		document.getElementById("settings").style.maxheight = '0';
	//if the box is invisible, then show it
	} else {
		document.getElementById("settings").style.maxheight = '600px';
		document.getElementById("settings").style.display = 'block';
	}
}

//Toggles the emoji list as visible or not
function toggleEmojis() {
	//hide settings if they are being shown
	if(document.getElementById("settings").style.display == 'block') {
		document.getElementById("settings").style.display = 'none';
		document.getElementById("settings").style.maxheight = '0';
	}
	//if the list is visible, then hide it
	if(document.getElementById("emojis").style.display == 'block') {
		document.getElementById("emojis").style.display = 'none';
		document.getElementById("emojis").style.maxheight = '0';
	//if the list is invisible, then show it
	} else {
		document.getElementById("emojis").style.maxheight = '600px';
		document.getElementById("emojis").style.display = 'block';
	}
}

//checks which theme is active and toggles it accordingly
function toggleTheme() {
	if(document.getElementById("themeToggle").style.left == '0px') {
		document.getElementById("themeToggle").style.left = '50px';
		document.getElementById("themeToggle").style.background = '#2be25f';
		document.getElementById("content").classList.add('dark');
		document.getElementById("content").classList.remove('light');

		$.ajax ({
			type: "POST",
			url:"theme.php",
		   	data: { "theme" : "dark" }
		});
	
	} else {
		document.getElementById("themeToggle").style.left = '0px';
		document.getElementById("themeToggle").style.background = '#909090';
		document.getElementById("content").classList.add('light');
		document.getElementById("content").classList.remove('dark');
		$.ajax ({
			type: "POST",
			url:"theme.php",
		   	data: { "theme" : "light" }
		});
	}
}

//checks the theme upon page load to determine if the theme switch should be on or not inside the settings
function getTheme() {
	if(document.getElementById("content").classList.contains('dark')) {
		document.getElementById("themeToggle").style.left = '50px';
		document.getElementById("themeToggle").style.background = '#2be25f';
	}
}

//Sends a message into the database
function sendMessage() {
	var text = document.getElementById("textinput").value.trim();
	$.ajax ({
		type: "POST",
		url:"send.php",
	   	data: { "textmessage" : text.trim() }
	});
	return true;
}

//Changes the users avatar
function updateAvatar(avatar, id) {
	var thisClass = "avatar-" + id;
	var thisAvatar = document.getElementsByClassName(thisClass);
    for (var i = 0; i < thisAvatar.length; i++) {
        thisAvatar[i].src = "images/avatars/" + avatar + ".png";
    }
	$.ajax({
		url: 'updateAvatar.php',
		type: 'POST',
		data: { 'avatar': avatar }
	})
}

//Changes the users name color
function updateColor(color, id) {
	var thisClass = "name-" + id;
	var thisName = document.getElementsByClassName(thisClass);
    for (var i = 0; i < thisName.length; i++) {
        thisName[i].style.color = color;
    }
	$.ajax({
		url: 'updateColor.php',
		type: 'POST',
		data: { 'color': color }
	})
}

//Changes the users background image
function updateBackground(bg, id) {
	var blur = document.getElementById("blur");
	var bgString = "url(\"images/backgrounds/" + bg + ".jpg\")";
	blur.style.backgroundImage = bgString;
	$.ajax({
		url: 'updateBackground.php',
		type: 'POST',
		data: { 'bg': bg }
	})
}

function getMessages() {
	//store buffer element into one variable
	var buffer = document.getElementById("buffer");
	var message = document.getElementById("messagebox");
	var moveToNewBottom = false;
	
   	if(message.scrollTop == message.scrollHeight) {
		moveToNewBottom = true;
   	}
	
	//data echoed from retrieve.php is stored into the div with id of buffer
	$(buffer).load( "retrieve.php", function() {
		//converts any emoji text strings into emoji images
		twemoji.parse(buffer);
  		if(message.innerHTML != buffer.innerHTML) {
			//update the visible messagebox
			message.innerHTML = buffer.innerHTML;
			if(moveToNewBottom) {
				message.scrollTop = message.scrollHeight;
			}
		}
	});
}

window.onload = function() {
	//store buffer element into one variable
	var message = document.getElementById("messagebox");
	
	var buffer = document.getElementById("buffer");
	
	//data echoed from retrieve.php is stored into the div with id of buffer
	$(message).load( "retrieve.php", function() {
		//converts any emoji text strings into emoji images
		twemoji.parse(message);
		buffer.innerHTML = message.innerHTML;
  		message.scrollTop = message.scrollHeight;
	});
}
