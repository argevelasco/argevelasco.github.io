$(function(){


	var p = {
		speed : 10,
		duration : 4,
		startCallback : function() {
			console.log('start');
		},
		slowDownCallback : function() {
			console.log('slowDown');
		},
		stopCallback : function($stopElm) {
			console.log('stop');
		}
	}
	var rouletter = $('div.roulette');
	rouletter.roulette(p);	
	$('.stop').click(function(){
		rouletter.roulette('stop');	
	});


	$('.start').click(function(){
		rouletter.roulette('start');	
	});

});

