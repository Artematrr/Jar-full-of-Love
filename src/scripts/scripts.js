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
	// Form Dropdown

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
	// Header burger button

	const headerBurgerCheckbox = document.getElementById(
		'header__burger-checkbox'
	)
	const headerBurgerImage = document.getElementById('header__burger-image')

	headerBurgerCheckbox.addEventListener('change', function () {
		if (headerBurgerCheckbox.checked) {
			headerBurgerImage.src = 'img/icons/close.svg'
		} else {
			headerBurgerImage.src = 'img/icons/menu.svg'
		}
	})

	// Scroll to top button

	const scrollTop = document.getElementById('scroll-top')

	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			scrollTop.style.opacity = '1'
			scrollTop.style.pointerEvents = 'auto'
		} else {
			scrollTop.style.opacity = '0'
			scrollTop.style.pointerEvents = 'none'
		}
	})
}
