const custom = document.getElementById('custom');
const hover2 = document.querySelector('.hover1');

const CursorPosition = (event)=> {
	custom.style.top = `${event.clientY}px`;
	custom.style.left = `${event.clientX}px`;
}

window.addEventListener('mousemove', (event) => {
	CursorPosition(event)
 
	if (hover2.matches(':hover')) {
		custom.classList.add('zoom')
	} else {
		custom.classList.remove('zoom')
	}
})
