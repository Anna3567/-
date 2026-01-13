const big = document.querySelector(".cursor_big")
const small = document.querySelector(".cursor_small")

window.addEventListener("mousemove", function(e){
	const X = e.clientX;
	const Y = e.clientY;

	big.style.left = `${X}px`;
	big.style.top = `${Y}px`;

	small.animate({
		left: `${X}px`,
		top: `${Y}px`
	}, {
		duration: 500, 
		fill: "forwards"
	})
	document.addEventListener('mousedown', () => {
		big.style.width = '60px'; // Увеличиваем размер при нажатии
		big.style.height = '60px'; // Увеличиваем размер при нажатии
	  });
	  
	document.addEventListener('mouseup', () => {
		big.style.width = '40px'; // Возвращаем в исходный размер при отпускании
		big.style.height = '40px'; // Возвращаем в исходный размер при отпускании
})
	});