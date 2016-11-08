var title = document.getElementById('name');
var wasButtonTitlePushed = false;

title.addEventListener('click', function(){
	toggleTitle();
});

function toggleTitle(){
	if (!wasButtonTitlePushed){
		title.innerHTML = 'YAY!';
		console.log(wasButtonTitlePushed);
		wasButtonTitlePushed = true;
	} else {
		title.innerHTML = 'Back to the original';
		console.log(wasButtonTitlePushed);
		wasButtonTitlePushed = false;
	}
}



function Person(name, age){
	this.name = name;
	this.age = age; 
}

var Cecilia = new Person('Cecilia', 11);

Cecilia.punch = function(){console.log('This is a punch');}