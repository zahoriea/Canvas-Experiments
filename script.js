(function() {

	var canvas = document.querySelector('canvas');

	var resizeCanvas = function() {
		$(canvas).attr({
			width: $(window).width(),
			height: $(window).height()
		})
	};
	resizeCanvas();

	var ctx = canvas.getContext("2d");

	var drawCircle = function(x, y) {
		ctx.fillStyle = "rgb(200,0,0)";  
		ctx.beginPath();  
		ctx.arc(x, y, 50, 0, Math.PI*2, true);
		ctx.fill(); 
	};

	var animate = function() {
		requestAnimationFrame( animate );
		canvas.width = canvas.width;

		circleX += (mouseX - circleX) * .05;
		circleY += (mouseY - circleY) * .05;
		
		drawCircle(circleX, circleY);
	};

	var mouseX = 100;
	var mouseY = 100;
	var circleX = 100;
	var circleY = 100;

	$(window).on('mousemove', function(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	});

	animate();
})();
