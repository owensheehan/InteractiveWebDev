//r00038222
var elColor = document.getElementById('color');
var mugPic = document.getElementById('pic');
var elcalculate = document.getElementById('calculate');
var finalBill = document.getElementById('Order');
var form1 = document.getElementById('form1');
var total=0.00;
var check=false;
function mugcolor(){
	var col=document.getElementById('color').value;
	if (col=='Blue'){ 
		mugPic.src="images/blue.jpg"
	}else if (col=='Red'){
		mugPic.src="images/red.jpg"
	}else if (col=='Green'){
		mugPic.src="images/green.jpg"
	}else if (col=='Yellow'){
		mugPic.src="images/yellow.jpg"
	}else if (col=='Purple'){
		mugPic.src="images/purple.jpg"
	}else{}
	
	
}
function calculateTotal(){
	
	
	var s1=document.getElementById('mug_size').value;
	var u1=document.getElementById('u1');
	var u2=document.getElementById('u2');
	var u3=document.getElementById('u3');
	var u4=document.getElementById('u4');
	var a1=document.getElementById('a1');
	var a2=document.getElementById('a2');
	var a3=document.getElementById('a3');
	var e1=document.getElementById('e1');
	var e2=document.getElementById('e2');
	var e3=document.getElementById('e3');
	if (check==true){
		total=0.00;
	}
	//Add mug price
	if (s1=='Small'){total=total+9.99;}
		else if(s1=='Medium'){total=total+12.99;}
		else if(s1=='Large'){total=total+14.99;}
		else if(s1=='Xtra_Large'){total=total+15.99;}
		else{}
	//add upgrades
	if (u1.checked){total = total+3.00;}else{};
	if (u2.checked){total = total+7.00;}else{};
	if (u3.checked){total = total+6.00;}else{}
	if (u4.checked){total = total+2.00;}else{};
	//add add-ons
	if (a1.checked){total = total+15.00;}else{};
	if (a2.checked){total = total+3.00;}else{};
	if (a3.checked){total = total+6.00;}else{};
	if (e1.checked){total = total+15.00;}else{};
	if (e2.checked){total = total+3.00;}else{};
	if (e3.checked){total = total+6.00;}else{};
	var tot=p;
	check=true;
	
	return tot.innerHTML="Total Cost is &euro;"+total.toFixed(2);	
	
}
function submitForm(){
	if (check==false){
		alert("You must First Calculate the Total");
	}else{ 
		document.getElementById('form1').submit();	
	};

	
}
function submitNow(){
	
	alert("Your order has been Submitted")
}

elcalculate.addEventListener('click', calculateTotal , false);
elColor.addEventListener('change', mugcolor , false);
finalBill.addEventListener('click',submitForm,false);