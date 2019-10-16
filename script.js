var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button= document.querySelector("button");

function setColorsAndText(){
	body.style.background=
	"linear-gradient(to right,"
	+color1.value+","+color2.value+")";

	css.textContent=body.style.background+";"

}
function getRandomColor(){
	var letters = "0123456789ABCDEF".split("");
	var color = "#";
	for(var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
 
}

function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setColorsAndText();
}
setColorsAndText();
// body.addEventListener("onload",setColorsAndText());
color1.addEventListener("input",setColorsAndText);
color2.addEventListener("input",setColorsAndText);
button.addEventListener("click",setRandomColors);

