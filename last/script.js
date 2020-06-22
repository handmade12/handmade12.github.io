document.addEventListener('DOMContentLoaded', (event) => {
	const colorSelectorElement = document.querySelector('#colorSelector');
	console.log(colorSelectorElement.value);
	colorSelectorElement.onchange = () => {
		const divElement = document.querySelector('div');
		divElement.style.backgroundColor = colorSelectorElement.value;
	};
})
