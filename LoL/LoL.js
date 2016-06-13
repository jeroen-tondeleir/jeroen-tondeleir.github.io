var key = "b560e5ec-e12f-41b6-8693-d8785319c341";
var region = "euw";

/*
// reference:
var userurl = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + name + "?api_key=" + key;
var matchlisturl = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v2.2/matchlist/by-summoner/" + id + "?api_key=" + key;
var iconurl = "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/" + imgID + ".png";
*/


// get output area
	var infoArea = document.getElementById("infoArea");
	var SummonerName = document.getElementById("SummonerName");
	var SummonerLevel = document.getElementById("SummonerLevel");


// Look up user info

function LookUpSummonerInformation(user) {
  var userurl = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + user + "?api_key=" + key;
  var xml = new XMLHttpRequest();
  xml.open("get", userurl);
  xml.addEventListener("load", function(lol) {
    var rsp = JSON.parse(lol.target.response);
    var info = rsp[user.toLowerCase()];
    SummonerName.innerHTML = "<p>Name : <strong>" + info.name + "<strong></p>";
    SummonerLevel.innerHTML = "<p>Level: <strong>" + info.summonerLevel + "</strong></p>";
    //
	
	// make var id and make matchlist url
	var id = info.id;
	var matchlisturl = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v2.2/matchlist/by-summoner/" + id + "?api_key=" + key;

    // OPNIEUW XmlHttpRequest om matches op te halen
	console.log("Matchtests");
	var xml2 = new XMLHttpRequest();
	xml2.open("get", matchlisturl);
	xml2.addEventListener("load", function(matches) {
		console.log("target:");
		console.log(matches.target);
		console.log("target.response:");
		console.log(matches.target.response);
		var rsp = JSON.parse(matches.target.response);
		console.log("response:");
		console.log(rsp);
		console.log(user);
		var info = rsp[user.toLowerCase()];
		
	});
	xml2.send();	
  });
  xml.send();
};


// Look up match info
