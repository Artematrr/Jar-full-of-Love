import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

function initializeDropdown(selectedId, listId, inputId) {
	const selected = document.getElementById(selectedId)
	const list = document.getElementById(listId)
	const input = document.getElementById(inputId)

	function toggleDropdown(eventType) {
		selected.classList.toggle('active')
		const handleClick = e => {
			if (!selected.contains(e.target)) {
				selected.classList.remove('active')
				document.removeEventListener(eventType, handleClick)
			}
		}
		document.addEventListener(eventType, handleClick)
	}

	const handleListItemClick = e => {
		const delay = 250
		if (e.target.tagName === 'LI') {
			const selectedValue = e.target.getAttribute('data-value')
			input.value = selectedValue
			selected.textContent = selectedValue
			setTimeout(() => {
				selected.classList.remove('active')
			}, delay)
		}
	}

	selected.addEventListener('click', () => toggleDropdown('click'))
	selected.addEventListener('touchmove', () => toggleDropdown('touchstart'))
	list.addEventListener('click', handleListItemClick)
	list.addEventListener('touchstart', handleListItemClick)
}

function initializeCounters() {
	const counters = document.querySelectorAll('.counter')

	counters.forEach(counter => {
		const input = counter.querySelector('.counter-input')
		const minusBtn = counter.querySelector('.counter-minus')
		const plusBtn = counter.querySelector('.counter-plus')
		const valueDisplay = counter.querySelector('.counter-value')

		let count = parseInt(valueDisplay.textContent)

		minusBtn.addEventListener('click', () => {
			if (count > 1) {
				count--
				valueDisplay.textContent = count
				input.value = count
			}
		})

		plusBtn.addEventListener('click', () => {
			count++
			valueDisplay.textContent = count
			input.value = count
		})
	})
}

function movePriceElement() {
	const screenWidth = window.innerWidth
	const cartItemInfos = document.querySelectorAll('.cart__item-info')

	cartItemInfos.forEach(cartItemInfo => {
		const catalogItemPrice = cartItemInfo.querySelector(
			'.cart__item-info .catalog__item-price'
		)
		const cartItemTitlePrice = cartItemInfo.querySelector(
			'.cart__item-title-price'
		)
		const cartItemPrice = cartItemInfo.querySelector('.cart__item-price')

		if (screenWidth < 768) {
			cartItemTitlePrice.appendChild(catalogItemPrice)
		} else {
			cartItemPrice.appendChild(catalogItemPrice)
		}
	})
}

window.onload = function () {
	// Form dropdown

	initializeDropdown('person-selected', 'person-list', 'person-value')
	initializeDropdown('holiday-selected', 'holiday-list', 'holiday-value')

	initializeDropdown('city-selected', 'city-list', 'city-value')
	initializeDropdown('house-selected', 'house-list', 'house-value')
	initializeDropdown('street-selected', 'street-list', 'street-value')
	initializeDropdown('apartment-selected', 'apartment-list', 'apartment-value')

	// Modal counters

	initializeCounters()

	// Cart modal

	movePriceElement()
	window.addEventListener('resize', movePriceElement)

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
		spaceBetween: -20,

		slidesPerView: 1,
		breakpoints: {
			480: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
		},

		mousewheel: {
			forceToAxis: true,
		},

		navigation: {
			prevEl: '.reviews__swiper-button-prev',
			nextEl: '.reviews__swiper-button-next',
		},
	})

	new Swiper('.reviews__item-swiper', {
		slidesPerView: 1,

		navigation: {
			prevEl: '.reviews__item-swiper-button-prev',
			nextEl: '.reviews__item-swiper-button-next',
		},
	})

	// Catalog modal swiper

	let catalogSwiper = new Swiper('.catalog__swiper', {
		slidesPerView: 4,

		breakpoints: {
			320: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
			},

			1200: {
				slidesPerView: 4,
			},
		},

		spaceBetween: 10,

		mousewheel: {
			forceToAxis: true,
		},

		navigation: {
			prevEl: '.catalog__swiper-button-prev',
			nextEl: '.catalog__swiper-button-next',
		},
	})

	new Swiper('.catalog__swiper-preview', {
		slidesPerView: 1,

		thumbs: {
			swiper: catalogSwiper,
		},

		spaceBetween: 25,

		navigation: {
			prevEl: '.catalog__swiper-preview-button-prev',
			nextEl: '.catalog__swiper-preview-button-next',
		},
	})
}
