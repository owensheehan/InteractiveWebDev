var children =Math.round(Math.random()*4);
			var partner = ['Susan','Mary','Tiny','Egit'];
			var geoLocation = ['Cork','Dublin','Galway','Belfast'];
			var jobTitle = ['Programer','Warehouse Operator','Movie Star','Writer'];








function tellFortune(){
				var el = document.getElementById('fortune');
				return el.innerHTML='<p>You wil be a '+jobTitle[Math.floor(Math.random()*4)]+' in '+geoLocation[Math.floor(Math.random()*4)]+', and Married to '+partner[Math.floor(Math.random()*4)]+' with '+children+' kids. </p>'
				
			}