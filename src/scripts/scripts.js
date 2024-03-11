import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

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

	// Fix touchscreen
	selected.addEventListener('touchstart', function () {
		list.style.display = list.style.display === 'none' ? 'block' : 'none'
		selected.classList.toggle('active')
	})

	list.addEventListener('touchstart', function (e) {
		if (e.target.tagName === 'LI') {
			const selectedValue = e.target.getAttribute('data-value')
			selected.textContent = selectedValue
			input.value = selectedValue
			list.style.display = 'none'
			selected.classList.remove('active')
		}
	})

	document.addEventListener('touchstart', function (e) {
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

	// Scroll top button

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

	// Rewiews swiper

	new Swiper('.reviews__swiper', {
		loop: false,
		spaceBetween: -20,

		mousewheel: {
			forceToAxis: true,
		},

		slidesPerView: 1,
		breakpoints: {
			480: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
		},

		navigation: {
			nextEl: '.reviews__swiper-button-next',
			prevEl: '.reviews__swiper-button-prev',
		},
	})

	new Swiper('.reviews__item-swiper', {
		loop: false,
		spaceBetween: 10,
		slidesPerView: 1,

		navigation: {
			nextEl: '.reviews__item-swiper-button-next',
			prevEl: '.reviews__item-swiper-button-prev',
		},
	})
}
