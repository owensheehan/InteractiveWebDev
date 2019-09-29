var children =Math.round(Math.random()*4);
var partner = ['Susan','Mary','Tiny','Egit'];
var geoLocation = ['Cork','Dublin','Galway','Belfast'];
var jobTitle = ['Programer','Warehouse Operator','Movie Star','Writer'];



function tellFortune(children,partner,geoLocation,jobTitle){
	
	this.children=function(){
		children;
	}
	this.partner=function(){
		partner[Math.floor(Math.random()*4)];
	}
	this.geoLocation=function(){
		geoLocation[Math.floor(Math.random()*4)];
	}
	this.jobTitle=function(){
		title[Math.floor(Math.random()*4)];
	}
}
var myPrediction = new tellFortune(children,partner,geoLocation,jobTitle);

var el=document.getElementById('fortune');

el.textContent=tellFortune.partner+' Hello';