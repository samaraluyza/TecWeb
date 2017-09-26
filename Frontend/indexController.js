const urlBase = "http://tecweb-hivesys-com-br.umbler.net/";
const imageNotFound = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX/////AAD/2tr/19f/+Pj/0dH/dXX/39//vr7/W1v/XV3/7+//9fX/UVH/WVn/d3f/ycn/ZGT/QUH/rq7/fn7/qKj/kZH/MjL/Hh7/6ur/hob/IyP/Kyv/ior/oKD/sLD/Dw//mJj/bGz/SEj/t7f/Fxf/xMT/Ly//S0uOteQNAAALRUlEQVR4nNVdaUOrOhAFS4vd9+3aWqq1+v9/4btAeXY7k0mYTLjnqwock9knkyjyjn7rPD/uO93ZbpNlcRxn2WY363b2x/m51ff/ep9I0tNquo5prKerU5qE/lQHpIfFzMDtGrPFIQ39yRZIl70vC3YVvnrLf4Fl8jrOHNhVyMavjd6xg8OoBrsKo8MgNJHnSE4S9C4kT81byXZHjF6JTjs0pWsky29hfjm+l01ZyO3CA70Si21ocn/R6nnjl6PXCsyvPfTKL8cwpEAq8AvKMe2q8MvRDeHsDKTNA42Ouhfwrsovx7sqv/ZOnWAc7/TEUXmD/kJrq54C8ctxUuCXTAMSjOOpd09uEpRfjolfgv5cUD4WHvltTWklHay9+eOvtb5r8zmafozH407nozec1Ul1xPGrH4J7x8/p/llO0kc93385vy9+HJ+598AvcfGyp+9tU853Ozm6ZD+G4jp1u7H8hGxqkQFN59ZR5kZYGNt2r/9eWQeuSXtv6QqKOnFWOuZt5RrrvKzebF4kqG+WFq+tmSOzytkthfhFK/Yr3yTeOefv1pXA6yILKzGScqgmbL0jYjX+MF82lcyKvXww3/qn/ruYBKfSmZSUybE2Rd4WnfnIaqY8h6fmRmUpmc1ZhtIDJiydU0vdsMzEUYrQE7ASXjUUOMfQj/yWFvqclIKz6ee4agdJOk/B+Tc7ehlb85OHGt0iA4Z1dNpIiTmaEPOaDJgbv2TjEkwZ48GdXjHBnD4Z2j/UaAin8kQgXsxJD2uzaJRvnzbiHi9GfrG1QjVqGc9ZyxuwCNpqG9O+16zntXgE47XNQw3u9lqzpZBL0MoJN6TuZ5pdIHyCFqKT0M/59EnoHkwZvID7r6ddwR+vjO5gR5Brwej6oOoK2mzRAqz64oB8xMw3qWtYE4xjTpWYTOetm6pkKnTMj6VDJk0zYSmDF5gDKTJxoGno3QjGO9NzybSBpqvmskULGPpuSDWj6Ww7EzQpmzHxl5rhUg2C8Zh6cEr84U5RjRplMKNCA0pbUN2GilrGrGReqPCui59MWQqtnEzE2aIvdO4GWwwiNeOQB/FKMIqIDBz8WGoJ9Uy9mWBZJKHUPlpEYgn9J34rmGWwqgIRqSSwiMQ/b9RAgmSU97wWRmxstWMPTBks0ce/1Xv2cEL/qjkzVgRJF/PZmuC2w40SP7aS+R84THjSwEgkZ3wVQO9hI4MlCO3/6IHhYqhWWG9PMIpwIfzRQ8Gnz5ROHlnKYAnsSH/f/ypeb6WQwolgFOGOjXurj7MzOh63tZK5AC/iXcYG6xmdJXSRwRJ4EW91Dc6RqkihO0HiT29zp7BNV8Vfc5TBEtAVu/l07KdrJJ9qESTKSNcJmwP6pTff7CJ3JVMBOjbXARHcpAqRfQ0ZLAGj/attijWpX3I5ahOMIviXv9oUxpKMKkBN1JPBEtCW/zYvwCyp9zONEgSxP/abOUXdKt71TF0lcwHq8M+qX4Cej1CjOISADBaAXbCVxwkDJ88uqRRB/KDKFCCv4CEAkYWIDJZAJrFK16CRR343qSBB2IT3Vf4YiqFXp1tIyZSA2rSUM+SyZV6YXSAmgwWgy1I6bijJ5jMylCWIVUmZckNz1Txm8iVlsADyTYssGlxhf7ZCnCDWJQn1Qx/cCogqmQuoZUIJDG9iKC2DBVD8l6cykMvja1qKF4LRETwrt+moRuUprpCXwQIol5HvRNTV4Kfq64kgrJzlrdHoTbLMLvChZEpgGqjMSLRsuMOPDBZAJfo+/K8KHD99gEeC0DNrRWfwEw9ZNl8yWADVg8/Q35FPBXslCFdqHh3BT8R9Nn9KpgCSgCMMHqXHavmUwRxIY+5hslGIWAXfBKG56KB2ROH+C78yWACkRLsoOpQ9VqFAEBGZoTSVaN3Qs5IpAUz+LgKnfSVjJ/8ymAMkMjZo+34IvPMCHYKooJ8hhmQ7uBU0ZDAHMAoZUrJiDLUIYrPnmaGKkimASoTYUIpASQZzQIZADmUYKhJEDKGmEdGlajKYA+pSYA+fthFbQpUgyqhtkE8jcL5CT8kUABnTHXbn6kJTBnN8IiIgtsjqvlCbIBK3rq/4UFcGc4DXdGCMXy8hrE8QNR/uo6OPL1BWMjlQCe0Ic211jiCoy2CECxdzmIWrUXoKQRA2BZ3hhnKfmq0vgznQwJkWzMI5m/wwBOEB37547SmAkilA0ED1Q7cTeUFkMMIJ4bx+iGrAToWLUARhV1SeUUN1fJdDh4FkMMKlp7yOj3oxHDKm4QjCnZj3Ysj104RSMjnQG/MSmlhPVDAZjAw9UbCvbW73kpAEYX9lGeaiCrhdIiOgDEZYDEvPDB4JshlmEpYgPG1Q9lfCPWzRFRVSyVCvv+gS1OfNHwkaVAYjbNMvfd6wwdY4VKpCaILwmHalSuB5C6boBJZBQs6Wpl/gHUcITtB8ZqbeuafASiaH8dxTrbNrwWWQdXatxvnDBhDknD90P0MaXgYj1hlSfA7Y4Js2giA0BdfxH3TcaJPYACUTYT1zcyTG7Tx+E2SQex4fb1MiwGgGQe44CDwXAwpSI2SQ+ozbuRhYm6KCfkMIEiPN7oI/2/k0zVAyFvNpiBlDTxexITJILeGDP4bnRD1ZxMYQxFvp8Zg2nvX1OIS9KTKIs2jPTlMQ89ru17s5BFHxM36aZMIz9+4cm6YomQj2X8TPy5/E3MSbenBjZBAfOoxB5YyYfXnVmNEggsSaPHfFiN035fzSBVoySPhr8L9MzKCtYskmEYQBES7RU3OEB0yCaluUms+Ksy/EIhYbu0Ey6Di4mlrEecMIUlczEgk0aib7ljEpXY8gNR+fOuBL/d3aePeZIsGEuoaDLO1SdyOYoLhFyeuM6IMU9DU6jSF4pD7EcDaUdbVpaILknWLGlkPLK9wrKMogqS0YJUHO9aphCVKmnlVqsbm+vYLmFk3Imws5Z30clI0mQSKsz8E6gk7fuxaaIDhWcQHr3jXT3XkP0JRBYgh7Du7ZXsP9hyEJ0ivI7wAy3GF5A1UlQ8ugTUus4R7SQAT7hvtfrQbOGO9QDkCQNPSx5V2ynFvHc2jKoFF0LBvTOXe2qxI8mj7G8k5nxr3ccaZJ0GjBrO/lZtytvla7QShKjfGAywGYBKfMK1h2ETuDysmU2Dhd7MfQNj3pSUTP0DfuJucLqTiBlLV8W4NI/P4P5wmIHIU69Xvn3JZI3Uv8m80CEPsbkpnjyPmAWqPlYOfmNXa+rvk4m5VdXHsot9ks5vjxMZG3ZfCzL3AwhLdgOuEf0hxTZpQqMN+RG2d8SLo4LW4ULjLAkrdR/6InJY8TjgItUHuLlmCpmwI7CS9nCdspHyA2+Z9lNC7o1Js/3LZJZgpOIGXFUhXeVq4Sma74yxcL+1OWmfDdvm3tCrdWuPHsKYSHVW9ZxvcavTnfgKSHqbE6eYeNeOyWMDz8B4yOE9OH9NvvlvnZAkMf96CzrcYdfhbv55dH/3yQTpZ/qLI6BSErcQ8rffOAbDbsfXQ64/H4Yzr6tN70N/AWs225SUa/8Jo+wQ2MenCfusKCTcLfD7zfyJi4aD45TH3o0HtY1xcFwawP1sXApRAugY5Gaq9E27FjoxZ23u8qvIFz340zfCa8nkJ5qypu0F+kri6XPbo6V2c/ou3ijdtjqCuA6hyD8svRIg4xCKCn2qwDsPXnrC70SpQ0kqVlAoKF76WGh8aGVY6Mg5o5Ox9ITuw8rhGjU6OW7xeDgwTJ0SGEdWcjeR3bZs2ukY1fG7p6N0iXPTSYicJXbxnKdXFBeljwyn8lZovDv8SuQpKeVlNT8mo9XZ3Sf2FnEui3zvPjvtOd7TZZLqNZttnNup39cX5u+W1zKPAfTqmVRCsBtmUAAAAASUVORK5CYII=";
const textToSpeak = "{0}, Level:{1}, evolução:{2}";
const textToSpeakNotFound = "Pokémon não encontrado!"

var pokemons = [];
$(document).ready ( function(){
  loadPokemons(); 
})
	
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
String.prototype.format = function() {
        var formatted = this;
        for (var i = 0; i < arguments.length; i++) {
            var regexp = new RegExp('\\{'+i+'\\}', 'gi');
            formatted = formatted.replace(regexp, arguments[i]);
        }

        return formatted;
    }
 
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
   
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send();
}
function loadPokemons(){
	httpGetAsync(urlBase + "pokemons",function(res){
		
		pokemons = res;		
		$("#txtPesquisar").autocomplete({

	      source: jsonParser(res)
	    
		});
	});
}
function pesquisar(){
	var txt = getByID("txtPesquisar");
	if (txt.value!="") {
		httpGetAsync((urlBase +"pokemon/" + txt.value), function(res) {
			if (res != "[]") {
			
				var o = jsonParser(res);		
				reloadImagePokemon(o[0].Image);
				reloadStatusPokemon(o[0]);
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak(textToSpeak.format(o[0].Name,o[0].Lvl,o[0].Evolution),"Brazilian Portuguese Female",{volume: 2});				
				}
			}else{
				reloadImagePokemon(imageNotFound);
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak(textToSpeakNotFound);				
				}
				
			}
			
		});

		clearFieldsAndFocus();
	}
}
function clearFieldsAndFocus(){
	var txt = getByID("txtPesquisar");
	txt.value = "";
	txt.focus();
	var lblNome = getByID("lblNome");
	var lblLevel = getByID("lblLevel");
	var lblEvolucao = getByID("lblEvolucao");
	lblNome.innerText = "";
	lblLevel.innerText = "";
	lblEvolucao.innerText = "";
}
function jsonParser(object){
	return JSON.parse( object );
}
function reloadImagePokemon(path){
	var imgPokemon = getByID("imgPokemon");
	imgPokemon.src = path;
}
function reloadStatusPokemon(object){
	
	var lblNome = getByID("lblNome");
	var lblLevel = getByID("lblLevel");
	var lblEvolucao = getByID("lblEvolucao");
	lblNome.innerText = object.Name;
	lblLevel.innerText = object.Lvl;
	lblEvolucao.innerText = object.Evolution;
}
function getByID(id){
	return document.getElementById(id);
}