const MainPage = () => {
	return (
		<main className='main'>
			<section className='hero container'>
				<div className='hero__info'>
					<h2 className='hero__title'>
						Оригинальный подарок для самого любимого, дорогого человека
					</h2>
					<h3 className='hero__title-red'>101 валентинка</h3>
					<h4 className='hero__subtitle'>
						Скажи все что хочешь сказать, о чем думаешь
					</h4>
					<ul className='hero__list'>
						<li className='hero__list-item'>Ручная работа с любовью</li>
						<li className='hero__list-item'>Безопасно и экологично</li>
						<li className='hero__list-item'>Подарок к любому празднику</li>
					</ul>
					<div className='hero__buttons-container'>
						<a href='#form' className='hero__button button button-fill'>
							Заказать уже готовую
						</a>
						<button className='hero__button button button-outline'>
							Собери свою банку
						</button>
					</div>
				</div>
				<div className='hero__image'>
					<img src='img/hero-image.png' alt='Банка полная любви' />
				</div>
			</section>

			<div className='overlay'>
				<a className='overlay__cart overlay__button'>
					<div className='overlay__cart-image'>
						<img src='img/icons/cart.svg' alt='Корзина' />
					</div>

					<span className='overlay__cart-count'>10</span>
				</a>
				<a
					href='#'
					className='overlay__scroll-top overlay__button'
					id='scroll-top'
				>
					<img src='img/icons/triangle-red-up.svg' alt='Наверх' />
				</a>
			</div>

			<section className='catalog container' id='catalog'>
				<h2 className='catalog__title'>Каталог</h2>
				<div className='catalog__list'>
					<div className='catalog__item'>
						<div className='catalog__item-image'>
							<img
								src='img/catalog-1.png'
								alt='101 Валентинка для неё'
								loading='lazy'
							/>
						</div>
						<div className='catalog__item-info'>
							<h3 className='catalog__item-title'>101 Валентинка для неё</h3>
							<div className='catalog__item-bottom'>
								<div className='catalog__item-price'>
									<div className='price-old'>
										1000 <span>₽</span>
									</div>
									<div className='price-new'>
										1000 <span>₽</span>
									</div>
								</div>
								<button className='catalog__item-button button button-fill'>
									Заказать
								</button>
							</div>
						</div>
					</div>
					<div className='catalog__item'>
						<div className='catalog__item-image'>
							<img
								src='img/catalog-2.png'
								alt='101 Валентинка для Подруги'
								loading='lazy'
							/>
						</div>
						<div className='catalog__item-info'>
							<h3 className='catalog__item-title'>
								101 Валентинка для Подруги
							</h3>
							<div className='catalog__item-bottom'>
								<div className='catalog__item-price'>
									<div className='price-old'>
										1000 <span>₽</span>
									</div>
									<div className='price-new'>
										1000 <span>₽</span>
									</div>
								</div>
								<button className='catalog__item-button button button-fill'>
									Заказать
								</button>
							</div>
						</div>
					</div>
					<div className='catalog__item'>
						<div className='catalog__item-image'>
							<img
								src='img/catalog-3.png'
								alt='101 Валентинка для него'
								loading='lazy'
							/>
						</div>
						<div className='catalog__item-info'>
							<h3 className='catalog__item-title'>101 Валентинка для него</h3>
							<div className='catalog__item-bottom'>
								<div className='catalog__item-price'>
									<div className='price-old'>
										1000 <span>₽</span>
									</div>
									<div className='price-new'>
										1000 <span>₽</span>
									</div>
								</div>
								<button className='catalog__item-button button button-fill'>
									Заказать
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='form' id='form'>
				<div className='form__left'>
					<h2 className='form__title'>
						Собери свою <br />
						<span className='form__title-accent'>Банку любви</span>
					</h2>
					<h3 className='form__subtitle'>
						соберем для вас индивидуально с вашим участием
					</h3>
				</div>
				<form action='POST' className='form__right'>
					<div className='form__group'>
						<label className='form__label form__label-fixed-width'>
							Для кого
						</label>
						<input
							type='hidden'
							name='person-selected-value'
							id='person-selected-value'
						/>
						<div className='form__dropdown'>
							<button
								type='button'
								className='form__dropdown-selected-item form__input'
								id='person-selected-item'
							>
								Для любимой
							</button>
							<ul className='form__dropdown-list' id='person-list'>
								<li data-value='Для любимой'>Для любимой</li>
								<li data-value='Для подруги'>Для подруги</li>
								<li data-value='Для любимого'>Для любимого</li>
							</ul>
						</div>
					</div>
					<div className='form__group'>
						<label className='form__label form__label-fixed-width'>
							На какой праздник
						</label>

						<input
							type='hidden'
							name='holiday-selected-value'
							id='holiday-selected-value'
						/>
						<div className='form__dropdown'>
							<button
								type='button'
								className='form__dropdown-selected-item form__input'
								id='holiday-selected-item'
							>
								День влюбленных
							</button>
							<ul className='form__dropdown-list' id='holiday-list'>
								<li data-value='День влюбленных'>День влюбленных</li>
								<li data-value='Восьмое марта'>Восьмое марта</li>
							</ul>
						</div>
					</div>
					<div className='form__group form__group-checkboxes'>
						<div className='form__group'>
							<input
								type='checkbox'
								name='my-choice'
								id='my-choice'
								className='form__checkbox'
							/>
							<label htmlFor='my-choice' className='form__label'>
								Валентинки напишу сам
							</label>
						</div>
						<div className='form__group'>
							<input
								type='checkbox'
								name='your-choice'
								id='your-choice'
								className='form__checkbox'
							/>
							<label htmlFor='your-choice' className='form__label'>
								Прислать мне валентинки на выбор
							</label>
						</div>
					</div>
					<div className='form__group'>
						<label
							htmlFor='name'
							className='form__label form__label-fixed-width'
						>
							Имя
						</label>
						<input type='text' name='name' className='form__input' required />
					</div>

					<div className='form__group form__group-contacts'>
						<div className='form__group'>
							<label
								htmlFor='tel'
								className='form__label form__label-fixed-width'
							>
								Телефон
							</label>
							<input
								type='text'
								name='tel'
								className='form__input'
								placeholder='+7 (000) 000 00 00'
								required
							/>
						</div>
						<div className='form__group'>
							<label htmlFor='email' className='form__label form__label-email'>
								Email
							</label>
							<input
								type='email'
								name='email'
								className='form__input'
								placeholder='Email@site.ru'
								required
							/>
						</div>
					</div>
					<div className='form__group form__group-submit'>
						<div className='form__group form__group-privacy'>
							<input
								type='checkbox'
								name='privacy'
								id='privacy'
								className='form__checkbox'
								required
								defaultChecked
							/>
							<label htmlFor='privacy' className='form__label'>
								Нажимая на кнопку даю согласие на обработку Персональных данных
							</label>
						</div>
						<button type='submit' className='form__button button button-fill'>
							Заказать
						</button>
					</div>
				</form>
			</section>

			<section className='advantages container' id='advantages'>
				<div className='advantages__image'>
					<img src='img/advantages-image.png' alt='Почему мы?' loading='lazy' />
				</div>
				<div className='advantages__info'>
					<h2 className='advantages__title'>Почему мы?</h2>
					<ul className='advantages__list'>
						<li className='advantages__item'>
							<h3 className='advantages__item-title'>Производство</h3>
							<p className='advantages__item-description'>
								У нас собственное производство. Каждая баночка собирается в
								ручную с любовью
							</p>
						</li>
						<li className='advantages__item'>
							<h3 className='advantages__item-title'>Качество</h3>
							<p className='advantages__item-description'>
								Высокий контроль качества на каждом этапе
							</p>
						</li>
						<li className='advantages__item'>
							<h3 className='advantages__item-title'>Безопасность</h3>
							<p className='advantages__item-description'>
								Используем качественные и безопасные материалы
							</p>
						</li>
					</ul>
					<p className='advantages__description'>
						Благодарим вас за покупку, наша команда с искренней любовью,
						аккуратностью, внимательностью собирает ваш заказ.
					</p>
				</div>
			</section>

			<section className='cards container'>
				<a href='#' className='cards__item'>
					<img src='img/cards-delivery.png' alt='Доставка' loading='lazy' />
				</a>
				<a href='#' className='cards__item'>
					<img src='img/cards-pay.png' alt='Оплата' loading='lazy' />
				</a>
				<a href='#' className='cards__item'>
					<img src='img/cards-discount.png' alt='Акции' loading='lazy' />
				</a>
				<a href='#' className='cards__item'>
					<img
						src='img/cards-promotion.png'
						alt='Выгодные скидки'
						loading='lazy'
					/>
				</a>
			</section>

			<section className='reviews container' id='reviews'>
				<h2 className='reviews__title'>Отзывы</h2>
				<div className='reviews__items'>
					<div className='reviews__item'>
						<div className='reviews__item-left'>
							<div className='reviews__item-stars'></div>
							<div className='reviews__item-author'></div>
							<div className='reviews__item-comment'></div>
						</div>
						<div className='reviews__item-right'>
							<div className='reviews__item-name'></div>
							<div className='reviews__item-swiper'></div>
						</div>
					</div>
				</div>
			</section>

			<section className='delivery container' id='delivery'>
				<h2 className='delivery__title'>Мы продаем на</h2>
				<div className='delivery__items'>
					<div className='delivery__item'>
						<img src='img/ozon.png' alt='Ozon' />
					</div>
					<div className='delivery__item'>
						<img src='img/wildberries.png' alt='Wildberries' />
					</div>
					<div className='delivery__item'>
						<img src='img/yandex-market.png' alt='Yandex-market' />
					</div>
				</div>
			</section>
		</main>
	)
}

export default MainPage
