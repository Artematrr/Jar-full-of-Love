function initializeDropdown(selectedId, listId, inputId) {
	const selected = document.getElementById(selectedId)
	const list = document.getElementById(listId)
	const input = document.getElementById(inputId)

	selected.addEventListener('click', function () {
		list.style.display = list.style.display === 'none' ? 'block' : 'none'
		selected.classList.toggle('active')
	})

	list.addEventListener('click', function (e) {
		if (e.target.tagName === 'LI') {
			const selectedValue = e.target.getAttribute('data-value')
			selected.textContent = selectedValue
			input.value = selectedValue
			list.style.display = 'none'
			selected.classList.remove('active')
		}
	})

	document.addEventListener('click', function (e) {
		if (!selected.contains(e.target)) {
			list.style.display = 'none'
			selected.classList.remove('active')
		}
	})
}

window.onload = function () {
	initializeDropdown(
		'person-selected-item',
		'person-list',
		'person-selected-value'
	)
	initializeDropdown(
		'holiday-selected-item',
		'holiday-list',
		'holiday-selected-value'
	)
}
