
var thisUid = 0;
var bgID = 0;
var bgName = 0;
var counter = 0;

$(document).ready(function()
{
	//sets sendMessageForm onsubmit listener
	$("#textbox").on("onsubmit",sendMessage);
	
	//sets emoticon click toggleSettings
	//$("#settingicon").on("onclick",toggleSettings);
	
	//user clicks message send button	
	$('#submit').click(sendMessage);
	
	//from websockets example------------
	//create a new WebSocket object.
	var wsUri = "ws://"+location.host+":9000/CS3500/CS3500-Chat-Client/server.php"; 	
	websocket = new WebSocket(wsUri);
	websocket.onopen = function(ev){$('#leftRail').append("<div class=\"system_msg\">Connected to server</div>");};
	websocket.onmessage = messagedRecieved;
	websocket.onerror	= function(ev){$('#leftRail').append("<div class=\"system_error\">Server Connection error Occurred - "+ev.data+"</div>");}; 
	websocket.onclose 	= function(ev){$('#leftRail').append("<div class=\"system_msg\">Server Connection Closed</div>");}; 
	//end of websocket example-------------
	
	//get this uid from html
	thisUid = $("#uid").html();
	bgID = $("#bgid").html();
	bgName = bgID;
	
	document.getElementById('textinput').onkeydown = function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
}
});

//Sends a message into the database
function sendMessage()
{
	var mymessage = $('#textinput').val(); //get message text
	if(mymessage == "")//empty message
	{
		return;
	}
	//prepare json data
	var msg =
	{
		type: "usermsg",
		message: mymessage,
		uid: thisUid
	};
	//convert and send data to server
	websocket.send(JSON.stringify(msg));
	
	$('#textinput').val('');
	if(document.getElementById("emojis").style.display == 'block') {
		document.getElementById("emojis").style.display = 'none';
		document.getElementById("emojis").style.maxheight = '0';
	}
}

//Message received from server
function messagedRecieved(ev)
{
	var msg = JSON.parse(ev.data); 	//PHP sends Json data
	var type = msg.type; 			//message type
	
	if(type =="uid")				//occures when first connected
	{
		thisUid= msg.message;
	}
	
	if(type == 'usermsg') 			//message received
	{
		var uid = msg.uid;			//user id
		var time = msg.time;		//message time stamp
		var umsg = msg.message; 	//message text
		var color = msg.color;
		var name = msg.name;
		var avatar = msg.avatar;
		
		var oldCont = "";
		var newCont = "";
		var section;
		var isFirst = $("#messagebox div").length==0;//in case there are no messages
		
		if(isFirst)
			$("#messagebox").html("");						//clear all
		var lastUid = $("#messagebox div:last-child .messagecontentcontainer div:first-child").attr("class");
		
		if(lastUid=="username "+uid)
		{
			section =$("#messagebox div:last-child .messagecontentcontainer div:last-child");
			oldCont = section.html();
			newCont="<p>"+umsg+"</p>";
			counter++;
		}
		if(lastUid!="username "+uid||isFirst||counter > 5)
		{
			section= $('#messagebox');
			oldCont = section.html();
			//prepare new message
			newCont = "<div class = 'message'>";
			newCont += "	<div class ='avatar'>";
			newCont += "		<img src='images/avatars/"+avatar+".png' class ='avatar "+uid+"'>";
			newCont += "	</div>";		//close avatar
			newCont += "	<div class = 'messagecontentcontainer'>";
			newCont += "		<div class='username "+uid+"' style = 'color: "+color+"'>"+name;
			newCont += "		</div>";
			newCont += "		<small>"+time+"</small>";
			newCont += "		<div class = 'messagecontent'>";
			newCont += "		<p>"+umsg+"</p>";
			newCont += "		</div >";
			newCont += "	</div>";		//close mesage
			newCont += "</div>";		//close mesage
			counter = 0;
		}
		section.html(oldCont+newCont);
		twemoji.parse(document.body);
		setTimeout(function() {
			var objDiv = document.getElementById("messagebox");
			objDiv.scrollTop = objDiv.scrollHeight;
		}, 10);
	}
	if(type == 'system')			//system level messages received
	{
		var umsg = msg.message; 	//message text
		$('#leftRail').append("<div class=\"system_msg\">"+umsg+"</div>");
	}
	if(type == 'color')
	{
		var color = msg.color;
		var newUid = msg.uid;
		updateThisColor(newUid, color);
	}
	if(type == 'avatar')
	{
		var avatar = msg.avatar;
		var newUid = msg.uid;
		updateThisAvatar(newUid, avatar);
	}
		
	$('#textinput').val(''); //reset textinput
};

//Changes the users avatar
function updateAvatar(name)
{
	//prepare json data
	var msg =
	{
		type: "avatar",
		avatar: name,
		uid: thisUid
	};
	//convert and send data to server
	websocket.send(JSON.stringify(msg));
	
	//update this page
	updateThisAvatar(thisUid, name);
	var divID = "header-avatar-" + thisUid;
	var nameDiv = document.getElementById(divID);
	nameDiv.setAttribute("src", "images/avatars/"+name+".png");
}
function updateThisAvatar(uid, name)
{
	var clasname = "avatar "+uid;
	var names = document.getElementsByClassName(clasname);
	for (var i = 0; i < names.length; i++) {
		names[i].setAttribute("src", "images/avatars/"+name+".png");
	}
}

function changeBG(name,id)
{
	//prepare json data
	var msg =
	{
		type: "bg",
		bgID: name,
		uid: thisUid
	};
	//convert and send data to server
	websocket.send(JSON.stringify(msg));
	
	bg = document.getElementById("blur");
	var path = "images/backgrounds/"+name + ".jpg";
	bg.style.backgroundImage = "url("+path+")";
}

//Changes the users name color
function updateColor(color)
{
	//prepare json data
	var msg =
	{
		type: "color",
		colorName: color,
		uid: thisUid
	};
	//convert and send data to server
	websocket.send(JSON.stringify(msg));
	
	//change on page
	updateThisColor(thisUid, color);
	var divID = "header-name-" + thisUid;
	var nameDiv = document.getElementById(divID);
	nameDiv.style.color = color;
}

function updateThisColor(uid, color)
{
	var clasname = "username "+uid;
	var names = document.getElementsByClassName(clasname);
	for (var i = 0; i < names.length; i++)
		names[i].style.color = color;
}

function toggleTheme() 
{
	var content = $("#content");
	if(content.attr("class")=="light")
	{
		content.attr("class","dark");
		
		//prepare json data
		var msg =
		{
			type: "theme",
			theme: "dark",
			uid: thisUid
		};
		//convert and send data to server
		websocket.send(JSON.stringify(msg));	
	}
	else 
	{
		content.attr("class","light");
		
		//prepare json data
		var msg =
		{
			type: "theme",
			theme: "light",
			uid: thisUid
		};
		//convert and send data to server
		websocket.send(JSON.stringify(msg));
	}
}
//prints all the emojis
//emojis are separated by each categry, which is what each for loop does
function printEmojis()
{
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
function insertEmojis()
{
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
	twemoji.parse(document.body);
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

window.onload = function() {
	var message = document.getElementById("messagebox");
  	message.scrollTop = message.scrollHeight;
}
