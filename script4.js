

function tellFortune(children,partner,geoLocation,jobTitle){
	var el=document.getElementById('fortune');
	return el.innerHTML='You will be a '+jobTitle[Math.floor(Math.random()*4)]+' in '+geoLocation[Math.floor(Math.random()*4)]+', and married to '+partner[Math.floor(Math.random()*4)]+' with '+children+' kids.'
}
function calculateAge(){
	var b= document.getElementById('birthYear').value;
	var today = new Date();
	var a = 2016;
	var age = a-b;
	var el1=document.getElementById('ages');
	return el1.innerHTML="Your age is "+(age-1)+" or "+age;
	
}
function calculateCircumference(){
	var radius=document.getElementById('radius').value;
	//var Circumference=((radius*2)Math.pi);
	var el2=document.getElementById('resultCirc');
	return el2.innerHTML="The Circumference of this circle is: "+resultCirc;
}
function calculateArea(){
	var radius=document.getElementById('radius').value;
	//var Circumference=((radius*radius)Math.pi);
	var el3=document.getElementById('resultArea');
	return el3.innerHTML="The Area of this circle is: "+resultArea;
	
}
	