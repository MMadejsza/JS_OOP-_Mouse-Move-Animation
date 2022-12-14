class AnimationBg {
	constructor(selector) {
		// selector to let it be universal in usage
		this.elements = document.querySelectorAll(selector);
	}
	listenToCursorMove(event) {
		// reads and centers cursor position
		const {clientX, clientY} = event;
		// viewport center:
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		// initialize move from center
		const moveX = clientX - centerX;
		const moveY = clientY - centerY;
		this.elements.forEach((el) => {
			this.moveElement(el, moveX, moveY);
		});
	}
	moveElement(el, moveX, moveY) {
		// negative value to reverse move
		const ratioX = -el.getAttribute('ratioX');
		const ratioY = -el.getAttribute('ratioY');
		el.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
	}
}
