$(function(){


	var p = {
		speed : 10,
		duration : 4,
		stopImageNumber : 0,
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
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');	
	});


	$('.start').click(function(){
		rouletter.roulette('start');	
	});

});

