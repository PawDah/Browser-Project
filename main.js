const search = document.querySelector('.search');

const list = document.querySelectorAll('li');

const searching = (e) => {
	const text = e.target.value.toLowerCase();

	list.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	});
};

search.addEventListener('keyup', searching);
