const boxContainer = document.querySelector('.box-container');
const BOX_LENGTH = 805;

const colors = ['100720', 'EAE509', '100F0F', '7DCE13', 'EF5B0C', '00D7FF'];
let colorChoice = undefined;

for (let i = 0; i < BOX_LENGTH; i++) {
	const box = document.createElement('div');

	box.classList.add('box');

	boxContainer.appendChild(box);
	box.addEventListener('mouseover', () => setColor(box));
	box.addEventListener('mouseleave', () => removeColor(box));
}

const setColor = (element) => {
	let color = getRandomColor();
	// element.style.background = `#${color}`;
	element.style.background = `#${color}`;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
const removeColor = (element) => {
	element.style.background = '#fff';
	element.style.boxShadow = `0 0 2px #fff, 0 0 10px #fff`;
};

const getRandomColor = (color) => {
	return colors[Math.floor(Math.random() * colors.length)];
};

const colorBox = document.querySelectorAll('.color');


//OPTIONAL
// colorBox.forEach((box, index) => {
// 	box.addEventListener('click', function () {
// 		getRandomColor(this.classList[1]);
// 		colorChoice = this.classList[1]
// 	});
// });
