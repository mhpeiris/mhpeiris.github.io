function retriever()
{
	var cf = 1;
	var d = new Date();
	var n = d.getDay();
	var date = d.getDate();
	var year = d.getFullYear();
	var hours = d.getHours();
	var city = document.getElementById("inCity").value;
	var weather = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=d142142e4a4c1c74a977bed2e2f1ac17";
	var weather_7_day = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&cnt=7&appid=d142142e4a4c1c74a977bed2e2f1ac17" ;
	var hourly_3 = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=d142142e4a4c1c74a977bed2e2f1ac17";
	var http_request = new XMLHttpRequest();
	var http_request2 = new XMLHttpRequest();
	var http_request3 = new XMLHttpRequest();
	var thun = "png/Thunderstorms-128.png";
	var driz = "png/rain-128.png";
	var rain = "png/Showers-128.png";
	var snow = "png/snow-128.png";
	var atm = "png/fog-128.png";
	var clear = "png/Sunny-Period-128.png";
	var clouds = "png/Cloudy-128.png";
	var adit = "png/Overcast-128.png";
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
				
				
	http_request.onreadystatechange = function()
	{
		if (http_request.readyState == 4  )
		{
    		var jsonObj = JSON.parse(http_request.responseText);
			var icon = jsonObj.weather[0].main;
						
			var suffix = "";
			if(hours >= 12){suffix = "PM";} else {suffix = "AM";}
						
        	document.getElementById("Name").innerHTML = jsonObj.name + ", " + jsonObj.sys.country;
			document.getElementById("Date").innerHTML = date + " " + months[d.getMonth()] + " " + year + ", " + ((hours + 11) % 12 + 1) + ":" + d.getMinutes() + "" + suffix;
			if(document.getElementById("C").selected)
			{
        		document.getElementById("Temp").innerHTML = Math.round(jsonObj.main.temp - 273.15) + " &#8451";
				cf = 1;
			}
			else if(document.getElementById("F").selected)
			{
				document.getElementById("Temp").innerHTML = Math.round(jsonObj.main.temp * (9/5) - 459.67) + " &#8457";
				cf = 2;
			}
						
			if(icon == "Thunderstorm"){document.getElementById("Icon").src= thun;}
			else if(icon == "Drizzle"){document.getElementById("Icon").src= driz;}
			else if(icon == "Rain"){document.getElementById("Icon").src= rain;}
			else if(icon == "Snow"){document.getElementById("Icon").src= snow;}
			else if(icon == "Atmosphere" || icon=="Fog"){document.getElementById("Icon").src= atm;}
			else if(icon == "Clear"){document.getElementById("Icon").src= clear;}
			else if(icon == "Clouds"){document.getElementById("Icon").src= clouds;}
			else {document.getElementById("Icon").src= adit;}
						
			document.getElementById("Icon").width = 75;
			document.getElementById("cond").innerHTML = icon;
			var str = document.getElementById("Wind").innerHTML;
			var windNum ;
			var humNum ;
			
				windNum = Math.round(jsonObj.wind.speed * 3600 / 1000);
				humNum = jsonObj.main.humidity;
				document.getElementById("IconWind").src = "png/blowing_wind.png" ;
				document.getElementById("IconWind").width = 28;
				document.getElementById("Wind").innerHTML = "&nbsp&nbsp" + Math.round(jsonObj.wind.speed * 3600 / 1000) + " Km/h";
				document.getElementById("IconHum").src = "png/humidity.png" ;
				document.getElementById("IconHum").width = 25;
				document.getElementById("Hum").innerHTML = "&nbsp&nbsp&nbsp" + jsonObj.main.humidity + "%";
		}
	}
	http_request.open("GET", weather, true);
	http_request.send();
				
	http_request2.onreadystatechange = function()
	{
		if (http_request2.readyState == 4  )
		{
			var jsonObj2 = JSON.parse(http_request2.responseText);
						
			var icon2 = jsonObj2.list[1].weather[0].main;
			var icon3 = jsonObj2.list[2].weather[0].main;
			var icon4 = jsonObj2.list[3].weather[0].main;
			var icon5 = jsonObj2.list[4].weather[0].main;
			var icon6 = jsonObj2.list[5].weather[0].main;
			var icon7 = jsonObj2.list[6].weather[0].main;
						
			if(icon2 == "Thunderstorm"){document.getElementById("Icon2").src= thun;document.getElementById("Icon2").width= 45;}
			else if(icon2 == "Drizzle"){document.getElementById("Icon2").src= driz;document.getElementById("Icon2").width= 45;}
			else if(icon2 == "Rain"){document.getElementById("Icon2").src= rain;document.getElementById("Icon2").width= 45;}
			else if(icon2 == "Snow"){document.getElementById("Icon2").src= snow;document.getElementById("Icon2").width= 45;}
			else if(icon2 == "Atmosphere"){document.getElementById("Icon2").src= atm;document.getElementById("Icon2").width= 45;}
			else if(icon2 == "Clear"){document.getElementById("Icon2").src= clear;document.getElementById("Icon2").width= 45;}
			else if(icon2 == "Clouds"){document.getElementById("Icon2").src= clouds;document.getElementById("Icon2").width= 45;}
			else {document.getElementById("Icon2").src= adit;document.getElementById("Icon2").width= 45;}
						
			if(icon3 == "Thunderstorm"){document.getElementById("Icon3").src= thun;document.getElementById("Icon3").width= 45;}
			else if(icon3== "Drizzle"){document.getElementById("Icon3").src= driz;document.getElementById("Icon3").width= 45;}
			else if(icon3 == "Rain"){document.getElementById("Icon3").src= rain;document.getElementById("Icon3").width= 45;}
			else if(icon3 == "Snow"){document.getElementById("Icon3").src= snow;document.getElementById("Icon3").width= 45;}
			else if(icon3 == "Atmosphere"){document.getElementById("Icon3").src= atm;document.getElementById("Icon3").width= 45;}
			else if(icon3 == "Clear"){document.getElementById("Icon3").src= clear;document.getElementById("Icon3").width= 45;}
			else if(icon3 == "Clouds"){document.getElementById("Icon3").src= clouds;document.getElementById("Icon3").width= 45;}
			else {document.getElementById("Icon3").src= adit;document.getElementById("Icon3").width= 45;}
						
			if(icon4 == "Thunderstorm"){document.getElementById("Icon4").src= thun;document.getElementById("Icon4").width=45;}
			else if(icon4 == "Drizzle"){document.getElementById("Icon4").src= driz;document.getElementById("Icon4").width=45;}
			else if(icon4 == "Rain"){document.getElementById("Icon4").src= rain;document.getElementById("Icon4").width=45;}
			else if(icon4 == "Snow"){document.getElementById("Icon4").src= snow;document.getElementById("Icon4").width=45;}
			else if(icon4 == "Atmosphere"){document.getElementById("Icon4").src= atm;document.getElementById("Icon4").width=45;}
			else if(icon4 == "Clear"){document.getElementById("Icon4").src= clear;document.getElementById("Icon4").width=45;}
			else if(icon4 == "Clouds"){document.getElementById("Icon4").src= clouds;document.getElementById("Icon4").width=45;}
			else {document.getElementById("Icon4").src= adit;document.getElementById("Icon4").width=45;}
						
			if(icon5 == "Thunderstorm"){document.getElementById("Icon5").src= thun;document.getElementById("Icon5").width=45;}
			else if(icon5 == "Drizzle"){document.getElementById("Icon5").src= driz;document.getElementById("Icon5").width=45;}
			else if(icon5 == "Rain"){document.getElementById("Icon5").src= rain;document.getElementById("Icon5").width=45;}
			else if(icon5 == "Snow"){document.getElementById("Icon5").src= snow;document.getElementById("Icon5").width=45;}
			else if(icon5 == "Atmosphere"){document.getElementById("Icon5").src= atm;document.getElementById("Icon5").width=45;}
			else if(icon5 == "Clear"){document.getElementById("Icon5").src= clear;document.getElementById("Icon5").width=45;}
			else if(icon5 == "Clouds"){document.getElementById("Icon5").src= clouds;document.getElementById("Icon5").width=45;}
			else {document.getElementById("Icon5").src= adit;document.getElementById("Icon5").width=45;}
						
			if(icon6 == "Thunderstorm"){document.getElementById("Icon6").src= thun;document.getElementById("Icon6").width=45;}
			else if(icon6 == "Drizzle"){document.getElementById("Icon6").src= driz;document.getElementById("Icon6").width=45;}
			else if(icon6 == "Rain"){document.getElementById("Icon6").src= rain;document.getElementById("Icon6").width=45;}
			else if(icon6 == "Snow"){document.getElementById("Icon6").src= snow;document.getElementById("Icon6").width=45;}
			else if(icon6 == "Atmosphere"){document.getElementById("Icon6").src= atm;document.getElementById("Icon6").width=45;}
			else if(icon6 == "Clear"){document.getElementById("Icon6").src= clear;document.getElementById("Icon6").width=45;}
			else if(icon6 == "Clouds"){document.getElementById("Icon6").src= clouds;document.getElementById("Icon6").width=45;}
			else {document.getElementById("Icon6").src= adit;document.getElementById("Icon6").width=45;}
						
			if(icon7 == "Thunderstorm"){document.getElementById("Icon7").src= thun;document.getElementById("Icon7").width=45;}
			else if(icon7 == "Drizzle"){document.getElementById("Icon7").src= driz;document.getElementById("Icon7").width=45;}
			else if(icon7 == "Rain"){document.getElementById("Icon7").src= rain;document.getElementById("Icon7").width=45;}
			else if(icon7 == "Snow"){document.getElementById("Icon7").src= snow;document.getElementById("Icon7").width=45;}
			else if(icon7 == "Atmosphere"){document.getElementById("Icon7").src= atm;document.getElementById("Icon7").width=45;}
			else if(icon7 == "Clear"){document.getElementById("Icon7").src= clear;document.getElementById("Icon7").width=45;}
			else if(icon7 == "Clouds"){document.getElementById("Icon7").src= clouds;document.getElementById("Icon7").width=45;}
			else {document.getElementById("Icon7").src= adit;document.getElementById("Icon7").width=45;}

			document.getElementById("Dow2").innerHTML = day(n+1);
			document.getElementById("Dow3").innerHTML = day(n+2);
			document.getElementById("Dow4").innerHTML = day(n+3);
			document.getElementById("Dow5").innerHTML = day(n+4);
			document.getElementById("Dow6").innerHTML = day(n+5);
			document.getElementById("Dow7").innerHTML = day(n+6);
						
			if(cf == 1)
			{
				document.getElementById("day2").innerHTML = Math.round(jsonObj2.list[1].temp.max - 273.15) + " &#8451/ " + Math.round(jsonObj2.list[1].temp.min - 273.15) + " &#8451";
				document.getElementById("day3").innerHTML = Math.round(jsonObj2.list[2].temp.max - 273.15) + " &#8451/ " + Math.round(jsonObj2.list[2].temp.min - 273.15) + " &#8451";
				document.getElementById("day4").innerHTML = Math.round(jsonObj2.list[3].temp.max - 273.15) + " &#8451/ " + Math.round(jsonObj2.list[3].temp.min - 273.15) + " &#8451";
				document.getElementById("day5").innerHTML = Math.round(jsonObj2.list[4].temp.max - 273.15) + " &#8451/ " + Math.round(jsonObj2.list[4].temp.min - 273.15) + " &#8451";
				document.getElementById("day6").innerHTML = Math.round(jsonObj2.list[5].temp.max - 273.15) + " &#8451/ " + Math.round(jsonObj2.list[5].temp.min - 273.15) + " &#8451";
				document.getElementById("day7").innerHTML = Math.round(jsonObj2.list[6].temp.max - 273.15) + " &#8451/ " + Math.round(jsonObj2.list[6].temp.min - 273.15) + " &#8451";
			}
			else if(cf == 2)
			{
				document.getElementById("day2").innerHTML = Math.round(jsonObj2.list[1].temp.max * (9/5) - 459.67) + " &#8457/ " + Math.round(jsonObj2.list[1].temp.min * (9/5) - 459.67) + " &#8457";
				document.getElementById("day3").innerHTML = Math.round(jsonObj2.list[2].temp.max * (9/5) - 459.67) + " &#8457/ " + Math.round(jsonObj2.list[2].temp.min * (9/5) - 459.67) + " &#8457";
				document.getElementById("day4").innerHTML = Math.round(jsonObj2.list[3].temp.max * (9/5) - 459.67) + " &#8457/ " + Math.round(jsonObj2.list[3].temp.min * (9/5) - 459.67) + " &#8457";
				document.getElementById("day5").innerHTML = Math.round(jsonObj2.list[4].temp.max * (9/5) - 459.67) + " &#8457/ " + Math.round(jsonObj2.list[4].temp.min * (9/5) - 459.67) + " &#8457";
				document.getElementById("day6").innerHTML = Math.round(jsonObj2.list[5].temp.max * (9/5) - 459.67) + " &#8457/ " + Math.round(jsonObj2.list[5].temp.min * (9/5) - 459.67) + " &#8457";
				document.getElementById("day7").innerHTML = Math.round(jsonObj2.list[6].temp.max * (9/5) - 459.67) + " &#8457/ " + Math.round(jsonObj2.list[6].temp.min * (9/5) - 459.67) + " &#8457";
			}						
		}
	}
	http_request2.open("GET", weather_7_day, true);
	http_request2.send();
				
	http_request3.onreadystatechange = function()
	{
		if (http_request3.readyState == 4  )
		{
			var jsonObj3 = JSON.parse(http_request3.responseText);
						
			var icon8 = jsonObj3.list[0].weather[0].main;
			var icon9 = jsonObj3.list[1].weather[0].main;
			var icon10 = jsonObj3.list[2].weather[0].main;
			var icon11 = jsonObj3.list[3].weather[0].main;
			var icon12 = jsonObj3.list[4].weather[0].main;
			var icon13 = jsonObj3.list[5].weather[0].main;
			var icon14 = jsonObj3.list[6].weather[0].main;
			var icon15 = jsonObj3.list[7].weather[0].main;
			var icon16 = jsonObj3.list[8].weather[0].main;
						
			if(icon8 == "Thunderstorm"){document.getElementById("Icon8").src= thun;document.getElementById("Icon8").width= 45;}
			else if(icon8 == "Drizzle"){document.getElementById("Icon8").src= driz;document.getElementById("Icon8").width= 45;}
			else if(icon8 == "Rain"){document.getElementById("Icon8").src= rain;document.getElementById("Icon8").width= 45;}
			else if(icon8 == "Snow"){document.getElementById("Icon8").src= snow;document.getElementById("Icon8").width= 45;}
			else if(icon8 == "Atmosphere"){document.getElementById("Icon8").src= atm;document.getElementById("Icon8").width= 45;}
			else if(icon8 == "Clear"){document.getElementById("Icon8").src= clear;document.getElementById("Icon8").width= 45;}
			else if(icon8 == "Clouds"){document.getElementById("Icon8").src= clouds;document.getElementById("Icon8").width= 45;}
			else {document.getElementById("Icon8").src= adit;document.getElementById("Icon8").width= 45;}
						
			if(icon9 == "Thunderstorm"){document.getElementById("Icon9").src= thun;document.getElementById("Icon9").width= 45;}
			else if(icon9 == "Drizzle"){document.getElementById("Icon9").src= driz;document.getElementById("Icon9").width= 45;}
			else if(icon9 == "Rain"){document.getElementById("Icon9").src= rain;document.getElementById("Icon9").width= 45;}
			else if(icon9 == "Snow"){document.getElementById("Icon9").src= snow;document.getElementById("Icon9").width= 45;}
			else if(icon9 == "Atmosphere"){document.getElementById("Icon9").src= atm;document.getElementById("Icon9").width= 45;}
			else if(icon9 == "Clear"){document.getElementById("Icon9").src= clear;document.getElementById("Icon9").width= 45;}
			else if(icon9 == "Clouds"){document.getElementById("Icon9").src= clouds;document.getElementById("Icon9").width= 45;}
			else {document.getElementById("Icon9").src= adit;document.getElementById("Icon9").width= 45;}
						
			if(icon10 == "Thunderstorm"){document.getElementById("Icon10").src= thun;document.getElementById("Icon10").width= 45;}
			else if(icon10 == "Drizzle"){document.getElementById("Icon10").src= driz;document.getElementById("Icon10").width= 45;}
			else if(icon10 == "Rain"){document.getElementById("Icon10").src= rain;document.getElementById("Icon10").width= 45;}
			else if(icon10 == "Snow"){document.getElementById("Icon10").src= snow;document.getElementById("Icon10").width= 45;}
			else if(icon10 == "Atmosphere"){document.getElementById("Icon10").src= atm;document.getElementById("Icon10").width= 45;}
			else if(icon10 == "Clear"){document.getElementById("Icon10").src= clear;document.getElementById("Icon10").width= 45;}
			else if(icon10 == "Clouds"){document.getElementById("Icon10").src= clouds;document.getElementById("Icon10").width= 45;}
			else {document.getElementById("Icon10").src= adit;document.getElementById("Icon10").width= 45;}
						
			if(icon11 == "Thunderstorm"){document.getElementById("Icon11").src= thun;document.getElementById("Icon11").width= 45;}
			else if(icon11 == "Drizzle"){document.getElementById("Icon11").src= driz;document.getElementById("Icon11").width= 45;}
			else if(icon11 == "Rain"){document.getElementById("Icon11").src= rain;document.getElementById("Icon11").width= 45;}
			else if(icon11 == "Snow"){document.getElementById("Icon11").src= snow;document.getElementById("Icon11").width= 45;}
			else if(icon11 == "Atmosphere"){document.getElementById("Icon11").src= atm;document.getElementById("Icon11").width= 45;}
			else if(icon11 == "Clear"){document.getElementById("Icon11").src= clear;document.getElementById("Icon11").width= 45;}
			else if(icon11 == "Clouds"){document.getElementById("Icon11").src= clouds;document.getElementById("Icon11").width= 45;}
			else {document.getElementById("Icon11").src= adit;document.getElementById("Icon11").width= 45;}
						
			if(icon12 == "Thunderstorm"){document.getElementById("Icon12").src= thun;document.getElementById("Icon12").width= 45;}
			else if(icon12 == "Drizzle"){document.getElementById("Icon12").src= driz;document.getElementById("Icon12").width= 45;}
			else if(icon12 == "Rain"){document.getElementById("Icon12").src= rain;document.getElementById("Icon12").width= 45;}
			else if(icon12 == "Snow"){document.getElementById("Icon12").src= snow;document.getElementById("Icon12").width= 45;}
			else if(icon12 == "Atmosphere"){document.getElementById("Icon12").src= atm;document.getElementById("Icon12").width= 45;}
			else if(icon12 == "Clear"){document.getElementById("Icon12").src= clear;document.getElementById("Icon12").width= 45;}
			else if(icon12 == "Clouds"){document.getElementById("Icon12").src= clouds;document.getElementById("Icon12").width= 45;}
			else {document.getElementById("Icon12").src= adit;document.getElementById("Icon12").width= 45;}
						
			if(icon13 == "Thunderstorm"){document.getElementById("Icon13").src= thun;document.getElementById("Icon13").width= 45;}
			else if(icon13 == "Drizzle"){document.getElementById("Icon13").src= driz;document.getElementById("Icon13").width= 45;}
			else if(icon13 == "Rain"){document.getElementById("Icon13").src= rain;document.getElementById("Icon13").width= 45;}
			else if(icon13 == "Snow"){document.getElementById("Icon13").src= snow;document.getElementById("Icon13").width= 45;}
			else if(icon13 == "Atmosphere"){document.getElementById("Icon13").src= atm;document.getElementById("Icon13").width= 45;}
			else if(icon13 == "Clear"){document.getElementById("Icon13").src= clear;document.getElementById("Icon13").width= 45;}
			else if(icon13 == "Clouds"){document.getElementById("Icon13").src= clouds;document.getElementById("Icon13").width= 45;}
			else {document.getElementById("Icon13").src= adit;document.getElementById("Icon13").width= 45;}
						
			if(icon14 == "Thunderstorm"){document.getElementById("Icon14").src= thun;document.getElementById("Icon14").width= 45;}
			else if(icon14 == "Drizzle"){document.getElementById("Icon14").src= driz;document.getElementById("Icon14").width= 45;}
			else if(icon14 == "Rain"){document.getElementById("Icon14").src= rain;document.getElementById("Icon14").width= 45;}
			else if(icon14 == "Snow"){document.getElementById("Icon14").src= snow;document.getElementById("Icon14").width= 45;}
			else if(icon14 == "Atmosphere"){document.getElementById("Icon14").src= atm;document.getElementById("Icon14").width= 45;}
			else if(icon14 == "Clear"){document.getElementById("Icon14").src= clear;document.getElementById("Icon14").width= 45;}
			else if(icon14 == "Clouds"){document.getElementById("Icon14").src= clouds;document.getElementById("Icon14").width= 45;}
			else {document.getElementById("Icon14").src= adit;document.getElementById("Icon14").width= 45;}
						
			if(icon15 == "Thunderstorm"){document.getElementById("Icon15").src= thun;document.getElementById("Icon15").width= 45;}
			else if(icon15 == "Drizzle"){document.getElementById("Icon15").src= driz;document.getElementById("Icon15").width= 45;}
			else if(icon15 == "Rain"){document.getElementById("Icon15").src= rain;document.getElementById("Icon15").width= 45;}
			else if(icon15 == "Snow"){document.getElementById("Icon15").src= snow;document.getElementById("Icon15").width= 45;}
			else if(icon15 == "Atmosphere"){document.getElementById("Icon15").src= atm;document.getElementById("Icon15").width= 45;}
			else if(icon15 == "Clear"){document.getElementById("Icon15").src= clear;document.getElementById("Icon15").width= 45;}
			else if(icon15 == "Clouds"){document.getElementById("Icon15").src= clouds;document.getElementById("Icon15").width= 45;}
			else {document.getElementById("Icon15").src= adit;document.getElementById("Icon15").width= 45;}
						
			if(icon16 == "Thunderstorm"){document.getElementById("Icon16").src= thun;document.getElementById("Icon16").width= 45;}
			else if(icon16 == "Drizzle"){document.getElementById("Icon16").src= driz;document.getElementById("Icon16").width= 45;}
			else if(icon16 == "Rain"){document.getElementById("Icon16").src= rain;document.getElementById("Icon16").width= 45;}
			else if(icon16 == "Snow"){document.getElementById("Icon16").src= snow;document.getElementById("Icon16").width= 45;}
			else if(icon16 == "Atmosphere"){document.getElementById("Icon16").src= atm;document.getElementById("Icon16").width= 45;}
			else if(icon16 == "Clear"){document.getElementById("Icon16").src= clear;document.getElementById("Icon16").width= 45;}
			else if(icon16 == "Clouds"){document.getElementById("Icon16").src= clouds;document.getElementById("Icon16").width= 45;}
			else {document.getElementById("Icon16").src= adit;document.getElementById("Icon16").width= 45;}
						
			document.getElementById("Dow8").innerHTML = jsonObj3.list[0].dt_txt;
			document.getElementById("Dow9").innerHTML = jsonObj3.list[1].dt_txt;
			document.getElementById("Dow10").innerHTML = jsonObj3.list[2].dt_txt;
			document.getElementById("Dow11").innerHTML = jsonObj3.list[3].dt_txt;
			document.getElementById("Dow12").innerHTML = jsonObj3.list[4].dt_txt;
			document.getElementById("Dow13").innerHTML = jsonObj3.list[5].dt_txt;
			document.getElementById("Dow14").innerHTML = jsonObj3.list[6].dt_txt;
			document.getElementById("Dow15").innerHTML = jsonObj3.list[7].dt_txt;
			document.getElementById("Dow16").innerHTML = jsonObj3.list[8].dt_txt;
						
			if(cf == 1)
			{
				document.getElementById("day8").innerHTML = Math.round(jsonObj3.list[0].main.temp - 273.15) + " &#8451";
				document.getElementById("day9").innerHTML = Math.round(jsonObj3.list[1].main.temp - 273.15) + " &#8451";
				document.getElementById("day10").innerHTML = Math.round(jsonObj3.list[2].main.temp - 273.15) + " &#8451";
				document.getElementById("day11").innerHTML = Math.round(jsonObj3.list[3].main.temp - 273.15) + " &#8451";
				document.getElementById("day12").innerHTML = Math.round(jsonObj3.list[4].main.temp - 273.15) + " &#8451";
				document.getElementById("day13").innerHTML = Math.round(jsonObj3.list[5].main.temp - 273.15) + " &#8451";
				document.getElementById("day14").innerHTML = Math.round(jsonObj3.list[6].main.temp - 273.15) + " &#8451";
				document.getElementById("day15").innerHTML = Math.round(jsonObj3.list[7].main.temp - 273.15) + " &#8451";
				document.getElementById("day16").innerHTML = Math.round(jsonObj3.list[8].main.temp - 273.15) + " &#8451";
			}
			else if(cf == 2)
			{
				document.getElementById("day8").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day9").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day10").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day11").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day12").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day13").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day14").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day15").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
				document.getElementById("day16").innerHTML = Math.round(jsonObj3.list[1].main.temp * (9/5) - 459.67) + " &#8457";
			}
		}
	}
	http_request3.open("GET", hourly_3 , true);
	http_request3.send();
}
			
function day(day_count)
{
	if(day_count == 1 || day_count == 8) return "Monday";
	else if(day_count == 2 || day_count == 9) return "Tuesday";
	else if(day_count == 3 || day_count == 10) return "Wednesday";
	else if(day_count == 4 || day_count == 11) return "Thursday";
	else if(day_count == 5 || day_count == 12) return "Friday";
	else if(day_count == 6) return "Saturday";
	else if(day_count == 7) return "Sunday";
}
			
function background_func()
{
	var date = new Date();
	var hours = date.getHours();
	//var hours = 20;
				
	document.getElementById("bodyID").className = "dawn";
	if(hours >= 6 && hours <= 18){document.getElementById("bodyID").className = "dawn";}
	else{document.getElementById("bodyID").className = "dusk";}
}
			
function openTab(evt, cityName)
{
	var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
	{
    	tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++)
	{
    	tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
