var s = document.createElement('script');
s.onload = function () {
	st = document.createElement('style');
	st.prepend('.js-tilt-glare {-webkit-mask-image: url(https://virousmk.github.io/yamanko/imgs/logo.png);-webkit-mask-position: center;-webkit-mask-size: auto calc(100% - 40px);-webkit-mask-repeat: no-repeat;}[data-logo-container] {transform-style: preserve-3d;transform: perspective(1000px);}[data-intro] {transform: translateY(-50%) translateZ(30px);}');
	document.body.append(st);
	VanillaTilt.init(
		document.querySelectorAll('[data-logo-container]')[0], {
		max: 10,
		speed: 200,
		glare: true,
		'max-glare': .5
	});
}
document.body.append(s);
s.src = 'https://rawcdn.githack.com/VirousMK/test6/f0eb7df815f6a4d93fe59f35160839eb3d4e6351/vanilla-tilt.min.js';