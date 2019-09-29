//r00038222
var elTopping = document.getElementsByClassName('topping');
var elBase = document.getElementsByClassName('base');

var total=0.00;
var check=false;
function changePrice(){
	var toppings = 0;
	var doubleTop = 0;
	var price=0.00;
	var stuffed=0;
	var sizeCost=0;
	var total =document.getElementById('price')
	
	if (document.getElementById('stuffed').checked){
		stuffed+=2.5;
	}else{};
	if (document.getElementById('personal').checked){
		sizeCost+=4.5;
	}else{};
	if (document.getElementById('small').checked){
		sizeCost+=7.5;
	}else{};
	if (document.getElementById('medium').checked){
		sizeCost+=11.5;
	}else{};
	if (document.getElementById('large').checked){
		sizeCost+=14.5;
	}else{};
	if (document.getElementById('XtraLarge').checked){
		sizeCost+=22.5;
	}else{};
	if (document.getElementById('Ham').checked){
		toppings+=1;
		if (document.getElementById('twoHam').classList.contains('hidden')){
			document.getElementById('twoHam').classList.remove('hidden');
			document.getElementById('hamFiller').classList.add('hidden');
			document.getElementById('hamLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoHam').classList.add('hidden');
		document.getElementById('hamFiller').classList.remove('hidden');
		document.getElementById('hamLayer').classList.add('hidden');
		};
	if (document.getElementById('Cheese').checked){
		toppings+=1;
		if (document.getElementById('twoCheese').classList.contains('hidden')){
			document.getElementById('twoCheese').classList.remove('hidden');
			document.getElementById('cheeseFiller').classList.add('hidden');
			document.getElementById('cheeseLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoCheese').classList.add('hidden');
		document.getElementById('cheeseFiller').classList.remove('hidden');
		document.getElementById('cheeseLayer').classList.add('hidden');};
	if (document.getElementById('Chicken').checked){
		toppings+=1;
		if (document.getElementById('twoChicken').classList.contains('hidden')){
			document.getElementById('twoChicken').classList.remove('hidden');
			document.getElementById('chickenFiller').classList.add('hidden');
			document.getElementById('chickenLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoChicken').classList.add('hidden');
		document.getElementById('chickenFiller').classList.remove('hidden');
		document.getElementById('chickenLayer').classList.add('hidden');};
		
	if (document.getElementById('Mushroom').checked){
		toppings+=1;
		if (document.getElementById('twoMushroom').classList.contains('hidden')){
			document.getElementById('twoMushroom').classList.remove('hidden');
			document.getElementById('mushroomFiller').classList.add('hidden');
			document.getElementById('mushroomLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoMushroom').classList.add('hidden');
		document.getElementById('mushroomFiller').classList.remove('hidden');
		document.getElementById('mushroomLayer').classList.add('hidden');};
	if (document.getElementById('Onion').checked){
		toppings+=1;
		if (document.getElementById('twoOnion').classList.contains('hidden')){
			document.getElementById('twoOnion').classList.remove('hidden');
			document.getElementById('onionFiller').classList.add('hidden');
			document.getElementById('onionLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoOnion').classList.add('hidden');
		document.getElementById('onionFiller').classList.remove('hidden');
		document.getElementById('onionLayer').classList.add('hidden');};
	if (document.getElementById('Bacon').checked){
		toppings+=1;
		if (document.getElementById('twoBacon').classList.contains('hidden')){
			document.getElementById('twoBacon').classList.remove('hidden');
			document.getElementById('baconFiller').classList.add('hidden');
			document.getElementById('baconLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoBacon').classList.add('hidden');
		document.getElementById('baconFiller').classList.remove('hidden');
		document.getElementById('baconLayer').classList.add('hidden');};
	if (document.getElementById('Pepperoni').checked){
		toppings+=1;
		if (document.getElementById('twoPepperoni').classList.contains('hidden')){
			document.getElementById('twoPepperoni').classList.remove('hidden');
			document.getElementById('pepperoniFiller').classList.add('hidden');
			document.getElementById('pepperoniLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoPepperoni').classList.add('hidden');
		document.getElementById('pepperoniFiller').classList.remove('hidden');
		document.getElementById('pepperoniLayer').classList.add('hidden');};
	if (document.getElementById('Jalepenos').checked){
		toppings+=1;
		if (document.getElementById('twoJalepenos').classList.contains('hidden')){
			document.getElementById('twoJalepenos').classList.remove('hidden');
			document.getElementById('jalepenosFiller').classList.add('hidden');
			document.getElementById('jalepenosLayer').classList.remove('hidden');
		}
	}else{
		document.getElementById('twoJalepenos').classList.add('hidden');
		document.getElementById('jalepenosFiller').classList.remove('hidden');
		document.getElementById('jalepenosLayer').classList.add('hidden');};
	
	if (document.getElementById('DoubleHam').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleCheese').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleChicken').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleMushroom').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleOnion').checked){
		doubleTop+=1;
	}else{};
	
	if (document.getElementById('DoubleBacon').checked){
		doubleTop+=1;
	}else{};

	if (document.getElementById('DoublePepperoni').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleJalepenos').checked){
		doubleTop+=1;
	}else{};
	
	price = (1.50*toppings)+(0.60*doubleTop)+stuffed+sizeCost;
	
	return total.innerHTML="Your price is "+price.toFixed(2);
	
	

}

addEventListener('change', changePrice , false);
