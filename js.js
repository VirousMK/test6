var s = document.createElement('script');
s.onload = function () {
	VanillaTilt.init(
		document.querySelectAll('[data-main]'), {
		max: 10,
		speed: 200,
		glare: true,
		'max-glare': .5
	});
}
document.body.prepend(s);
s.src = 'https://raw.githubusercontent.com/micku7zu/vanilla-tilt.js/master/dist/vanilla-tilt.min.js';