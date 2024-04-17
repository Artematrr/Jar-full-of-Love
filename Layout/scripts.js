/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Выпадающие списки
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

// Изменение положения цены в товаре
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

// Инициализация свайперов
function initSwipers() {
	// Инициализация свайперов в отзывах
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

	// Инициализация свайперов в каталоге
	new Swiper('.reviews__item-swiper', {
		slidesPerView: 1,

		navigation: {
			prevEl: '.reviews__item-swiper-button-prev',
			nextEl: '.reviews__item-swiper-button-next',
		},
	})

	const SwiperIds = ['dlya_nee', 'dlya_podrugi', 'dlya_nego']

	SwiperIds.forEach(id => {
		new Swiper(`.catalog__swiper-${id}`, {
			slidesPerView: 4,
			spaceBetween: 10,
			watchSlidesProgress: true,
			breakpoints: {
				320: { slidesPerView: 3 },
				480: { slidesPerView: 4 },
				768: { slidesPerView: 3 },
				1200: { slidesPerView: 4 },
			},
			mousewheel: { forceToAxis: true },
			navigation: {
				prevEl: `.catalog__swiper-${id} .swiper-button-prev`,
				nextEl: `.catalog__swiper-${id} .swiper-button-next`,
			},
		})

		new Swiper(`.catalog__swiper-preview-${id}`, {
			slidesPerView: 1,
			thumbs: { swiper: `.catalog__swiper-${id}` },
			navigation: {
				prevEl: `.catalog__swiper-preview-${id} .swiper-button-prev`,
				nextEl: `.catalog__swiper-preview-${id} .swiper-button-next`,
			},
		})
	})
}

// Функцонал корзины

// Функция для инициализации каунтеров
function initCounters() {
	const counters = document.querySelectorAll('.counter:not(.initialized)')

	counters.forEach(counter => {
		const counterName = counter.dataset.counter
		const counterValueInput = counter.querySelector('.counter-value')
		const counterInput = counter.querySelector('.counter-input')

		// Если в корзине нет этого товара, значение каунтера очищается из localStorage
		let itemInCart = getCart().find(item => item.id === counterName)
		if (!itemInCart) {
			localStorage.removeItem(counterName)
		}
		const counterValue = localStorage.getItem(counterName) || 1

		counterValueInput.textContent = counterValue
		counterInput.value = counterValue

		// Функция для обновления значения каунтера
		function updateCounter(value) {
			const isCartAddCounter = counter.closest('.cart__add-list') !== null
			itemInCart = getCart().find(item => item.id === counterName)

			counterValueInput.textContent = value
			counterInput.value = value
			localStorage.setItem(counterName, value)

			// Обновляем значения всех каунтеров с тем же data-counter
			const sameCounters = document.querySelectorAll(
				`.counter[data-counter='${counterName}']`
			)
			sameCounters.forEach(c => {
				const cValue = c.querySelector('.counter-value')
				const cInput = c.querySelector('.counter-input')
				cValue.textContent = value
				cInput.value = value
				localStorage.setItem(c.dataset.counter, value)
			})

			// Если изменяем rоличество в блоке Добавить к заказу, и товар уже в корзине
			if (isCartAddCounter && itemInCart) {
				const image = itemInCart.image
				const name = itemInCart.name
				const price = itemInCart.price
				const priceOld = itemInCart.priceOld
				const quantity = value
				addToCart(counterName, image, name, price, priceOld, quantity)
				renderCart()
			}
		}

		function handleButtonClick() {
			const newValue =
				parseInt(counterValueInput.textContent) +
				(this.classList.contains('counter-plus') ? 1 : -1)
			if (newValue >= 1) {
				updateCounter(newValue)
			}
		}

		const plusButton = counter.querySelector('.counter-plus')
		plusButton.addEventListener('click', handleButtonClick)
		plusButton.addEventListener('touched', handleButtonClick)

		const minusButton = counter.querySelector('.counter-minus')
		minusButton.addEventListener('click', handleButtonClick)
		minusButton.addEventListener('touched', handleButtonClick)

		counter.classList.add('initialized')
	})
}
// Функция для инициализации кнопок корзины
function initCartButtons() {
	// Обработчик для кнопок Добавить в корзину
	const addToCartButtons = document.querySelectorAll(
		'.add-to-cart:not(.initialized)'
	)
	addToCartButtons.forEach(button => {
		function addToCartHandler() {
			const id = this.dataset.id
			const cartItem = document.querySelector(
				`.cart__item[data-catalog='${id}']`
			)
			if (cartItem) {
				const image = cartItem
					.querySelector('.cart__item-img img')
					.getAttribute('src')
				const name = cartItem
					.querySelector('.cart__item-title')
					.textContent.trim()
				const price = parseFloat(
					cartItem.querySelector('.price-new').textContent
				)
				const priceOld = parseFloat(
					cartItem.querySelector('.price-old').textContent
				)
				const quantity = parseInt(
					cartItem.querySelector('.counter-value').textContent
				)
				addToCart(id, image, name, price, priceOld, quantity)
				renderCart()
			}
		}

		button.addEventListener('click', addToCartHandler)
		button.addEventListener('touched', addToCartHandler)
		button.classList.add('initialized')
	})

	// Обработчик для кнопок Удалить
	const removeFromCartButtons = document.querySelectorAll(
		'.remove-from-cart:not(.initialized)'
	)
	removeFromCartButtons.forEach(button => {
		function removeFromCartHandler() {
			const id = this.dataset.id
			removeFromCart(id)
		}

		button.addEventListener('click', removeFromCartHandler)
		button.addEventListener('touched', removeFromCartHandler)
		button.classList.add('initialized')
	})
}

// Функцию для обновления состояния кнопок в Добавить к заказу
function updateCartButton(id, isInCart) {
	const cartItem = document.querySelector(`.cart__item[data-catalog="${id}"]`)
	const buttonAdd = cartItem.querySelector('.cart__item-add')
	const buttonDelete = cartItem.querySelector('.cart__item-delete')
	const checkbox = cartItem.querySelector('input[type="checkbox"]')

	if (isInCart) {
		buttonAdd.style.display = 'none'
		buttonDelete.style.display = 'inline-block'
		checkbox.checked = true
	} else {
		buttonAdd.style.display = 'inline-block'
		buttonDelete.style.display = 'none'
		checkbox.checked = false
	}
}

// Получение товаров из localStorage
function getCart() {
	return JSON.parse(localStorage.getItem('cart')) || []
}

// Сохранение корзины в localStorage
function setCart(cart) {
	localStorage.setItem('cart', JSON.stringify(cart))
}

// Функция для добавления товара в корзину
function addToCart(id, image, name, price, priceOld = null, quantity = 1) {
	const cart = getCart()
	const existingItemIndex = cart.findIndex(item => item.id === id)

	if (existingItemIndex !== -1) {
		cart[existingItemIndex].quantity = quantity
		cart[existingItemIndex].priceTotal =
			cart[existingItemIndex].quantity * price
	} else {
		cart.push({
			id: id,
			image: image,
			name: name,
			price: price,
			priceOld: priceOld,
			quantity: quantity,
			priceTotal: price * quantity,
		})
	}
	setCart(cart)
	updateCartButton(id, true)
}

// Функция для удаления товара из корзины
function removeFromCart(id) {
	let cart = getCart()
	const itemIndex = cart.findIndex(item => item.id === id)
	if (itemIndex !== -1) {
		cart.splice(itemIndex, 1)
		setCart(cart)
		renderCart()
		updateCartButton(id, false)
	}
}

// Функция для отображения корзины на странице
function renderCart() {
	const cart = getCart()
	const cartList = document.querySelector('.cart__list')
	const cartTotalPrice = document.querySelector('.cart__total-price')
	const cartCount = document.querySelector('.overlay__cart-count')

	let totalPrice = 0
	let totalCount = 0

	// Очищаем текущее содержимое корзины
	cartList.innerHTML = ''

	if (cart.length === 0) {
		cartList.innerHTML = '<p>Корзина пуста</p>'
		cartTotalPrice.innerHTML = '0 <span>₽</span>'
	}

	// Перебираем товары в корзине и добавляем их в список
	for (const item of cart) {
		const itemHTML = `
					<div class='cart__item' data-item='${item.id}'>
							<div class='cart__item-info'>
									<div class='cart__item-group'>
											<div class='cart__item-img'>
													<img src='${item.image}' alt='${item.name}' />
											</div>
											<div class='cart__item-title-price'>
													<div class='cart__item-title'>
															${item.name}
													</div>
											</div>
									</div>
									<div class='cart__item-price'>
											<div class='catalog__item-price'>
													<div class='price-new'>
															${item.price} <span>₽</span>
													</div>
													<div class='price-old'>
															${item.priceOld} <span>₽</span>
													</div>
											</div>
									</div>
							</div>
							<div class='cart__item-control'>
									<div class='cart__item-counter counter' data-counter='${item.id}'>
											<input type='hidden' name='counter-${item.id}' id='counter-${item.id}' class='counter-input' value='${item.quantity}' />
											<button type='button' class='button counter-plus add-to-cart' data-id=${item.id}></button>
											<div class='counter-value'>${item.quantity}</div>
											<button type='button' class='button counter-minus add-to-cart' data-id=${item.id}></button>
									</div>
									<button type='button' class='button cart__item-remove remove-from-cart' data-id="${item.id}"></button>
									<div class='cart__item-price-total'> ${item.priceTotal} <span>₽</span></div>
							</div>
					</div>
			`

		totalPrice += item.priceTotal
		totalCount += item.quantity
		cartList.insertAdjacentHTML('beforeend', itemHTML)
		updateCartButton(item.id, true)

		// Обновляем итоговые цены в Добавить в корзину
		const priceTotalAdd = document.querySelector(
			`.cart__item[data-catalog='${item.id}'] .cart__item-price-total`
		)
		priceTotalAdd.innerHTML = `${item.priceTotal} <span>₽</span>`
	}

	// Обновляем суммарное количество товаров и итоговую цену
	cartCount.textContent = totalCount
	cartTotalPrice.innerHTML = `${totalPrice} <span>₽</span>`

	// Инициализируем только что добавленные элементы
	initCounters()
	initCartButtons()
}

document.addEventListener(
	'DOMContentLoaded',
	function () {
		// Выпадающие списки в формах
		initializeDropdown('person-selected', 'person-list', 'person-value')
		initializeDropdown('holiday-selected', 'holiday-list', 'holiday-value')

		initializeDropdown('city-selected', 'city-list', 'city-value')
		initializeDropdown('house-selected', 'house-list', 'house-value')
		initializeDropdown('street-selected', 'street-list', 'street-value')
		initializeDropdown(
			'apartment-selected',
			'apartment-list',
			'apartment-value'
		)

		// Изменение положения цены в товаре
		movePriceElement()
		window.addEventListener('resize', movePriceElement)

		// Кнопка бургер-меню
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

		// Кнопка пргокрутки вверх
		const scrollTop = document.getElementById('scroll-top')
		window.addEventListener('scroll', function () {
			if (window.scrollY > 300) {
				scrollTop.style.opacity = '1'
				scrollTop.style.pointerEvents = 'auto'
			} else {
				scrollTop.style.opacity = '0'
				scrollTop.style.pointerEvents = 'none'
			}
		})

		initSwipers()

		renderCart()
	},
	false
)
