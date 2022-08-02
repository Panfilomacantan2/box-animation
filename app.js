const boxContainer = document.querySelector('.box-container');
const BOX_LENGTH = 204;

for (let i = 0; i < BOX_LENGTH; i++) {
	const box = document.createElement('div');

	box.className = 'box';

	boxContainer.appendChild(box);
}
