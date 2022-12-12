document.addEventListener('DOMContentLoaded', function () {
	const animationBg = new AnimationBg('.anim-bg');
	document.addEventListener('mousemove', (event) => animationBg.listenToCursorMove(event));
});
