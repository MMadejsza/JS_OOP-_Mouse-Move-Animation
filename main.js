document.addEventListener('DOMContentLoaded', function () {
	const animationBg = new AnimationBg('.anim-bg');
	// arrow function to bind .this of animationBg:
	document.addEventListener('mousemove', (event) => animationBg.listenToCursorMove(event));
});
