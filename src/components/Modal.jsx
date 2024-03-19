function Modal() {
	return (
		<>
			<div
				className='modal fade'
				id='callbackModal'
				tabIndex='-1'
				aria-labelledby='callbackModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered modal-lg'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<form className='callback-form' action='POST'>
								<h1 className='modal-title' id='callbackModalLabel'>
									Оставьте свои данные
								</h1>
								<h2 className='modal-subtitle'>
									и мы перезвоним вам в ближайшее время
								</h2>
								<div className='form__group'>
									<label
										htmlFor='callback-name'
										className='form__label form__label-fixed-width'
									>
										Ваше имя
									</label>
									<input
										type='text'
										id='callback-name'
										name='callback-name'
										className='form__input'
										placeholder='Ваше имя'
										required
									/>
								</div>
								<div className='form__group'>
									<label
										htmlFor='callback-tel'
										className='form__label form__label-fixed-width'
									>
										Телефон
									</label>
									<input
										type='tel'
										id='callback-tel'
										name='callback-tel'
										className='form__input'
										placeholder='+7 (000) 000 00 00'
										required
									/>
								</div>
								<p className='modal-text'>
									Нажимая на кнопку даю согласие на обработку
									<br />
									<span className='text-accent'> Персональных Данных</span>
								</p>
								<div className='form__group'>
									<button type='submit' className='button button-fill'>
										Перезвоните мне
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div
				className='modal fade'
				id='catalogModal'
				tabIndex='-1'
				aria-labelledby='catalogModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered modal-xl'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<div className='modal-left'>
								<div className='catalog__swiper-preview'>
									<div className='swiper-wrapper'>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
									</div>
									<div className='swiper-button-prev catalog__swiper-preview-button-prev'></div>
									<div className='swiper-button-next catalog__swiper-preview-button-next'></div>
								</div>

								<div className='catalog__swiper'>
									<div className='swiper-wrapper'>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
										<div className='swiper-slide'>
											<img src='/img/jar.png' alt='101 Валентинка - Для неё' />
										</div>
									</div>

									<div className='swiper-button-prev catalog__swiper-button-prev'></div>
									<div className='swiper-button-next catalog__swiper-button-next'></div>
								</div>
							</div>
							<div className='modal-right'>
								<h1 className='modal-title' id='catalogModalLabel'>
									101 Валентинка - Для неё
								</h1>
								<div className='catalog__item-price'>
									<div className='price-new'>
										1000 <span>₽</span>
									</div>
									<div className='price-old'>
										1000 <span>₽</span>
									</div>
								</div>
								<h2 className='modal-subtitle'>Состав:</h2>
								<ul className='list-custom'>
									<li>
										<span className='text-accent'>5</span> жвачек Love is…
									</li>
									<li>
										<span className='text-accent'>3</span> шоколадные монеты
									</li>
									<li>
										<span className='text-accent'>101</span> валентинка
									</li>
									<li>
										<span className='text-accent'>5</span> поролоновых сердечек
									</li>
									<li>бумажная стружка</li>
									<li>открытка</li>
								</ul>
								<form action='POST'>
									<div className='form__group'>
										<div className='catalog__counter counter'>
											<input
												type='hidden'
												name='catalog-counter-dlya_nee'
												id='catalog__counter-dlya_nee'
												value='1'
												className='counter-input'
											/>
											<button
												type='button'
												className='button counter-plus'
											></button>
											<span className='counter-value'>1</span>
											<button
												type='button'
												className='button counter-minus'
											></button>
										</div>
										<button type='submit' className='button button-fill'>
											Заказать
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className='modal-footer'>
							<p className='modal-text'>
								Сложно сказать, почему некоторые особенности внутренней политики
								представляют собой не что иное, как квинтэссенцию победы
								маркетинга над разумом и должны быть заблокированы в рамках
								своих собственных рациональных ограничений. В своём стремлении
								улучшить пользовательский опыт мы упускаем, что сторонники
								тоталитаризма в науке представляют собой не что иное, как
								квинтэссенцию победы маркетинга над разумом и должны быть
								представлены в исключительно положительном свете. В рамках
								спецификации современных стандартов, независимые.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className='modal fade'
				id='cartModal'
				tabIndex='-1'
				aria-labelledby='cartModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered modal-xl'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<form action='POST' className='modal-body'>
							<h1 className='modal-title' id='cartModalLabel'>
								Оформление заказа
							</h1>
							<div className='cart__list'>
								<div className='cart__item'>
									<div className='cart__item-info'>
										<div className='cart__item-group'>
											<div className='cart__item-img'>
												<img
													src='/img/jar.png'
													alt='101 Валентинка для Подруги'
												/>
											</div>
											<div className='cart__item-title-price'>
												<div className='cart__item-title'>
													101 Валентинка для Подруги
												</div>
											</div>
										</div>
										<div className='cart__item-price'>
											<div className='catalog__item-price'>
												<div className='price-new'>
													1000 <span>₽</span>
												</div>
												<div className='price-old'>
													1000 <span>₽</span>
												</div>
											</div>
										</div>
									</div>
									<div className='cart__item-control'>
										<div className='cart__item-counter counter'>
											<input
												type='hidden'
												name='counter-dlya_podrugi'
												id='counter-dlya_podrugi'
												className='counter-input'
											/>
											<button
												type='button'
												className='button counter-plus'
											></button>
											<div className='counter-value'>1</div>
											<button
												type='button'
												className='button counter-minus'
											></button>
										</div>
										<button
											type='button'
											className='button cart__item-remove'
										></button>
										<div className='cart__item-price-total'>
											1000 <span>₽</span>
										</div>
									</div>
								</div>
								<div className='cart__item'>
									<div className='cart__item-info'>
										<div className='cart__item-group'>
											<div className='cart__item-img'>
												<img src='/img/jar.png' alt='101 Валентинка для Неё' />
											</div>
											<div className='cart__item-title-price'>
												<div className='cart__item-title'>
													101 Валентинка для Неё
												</div>
											</div>
										</div>
										<div className='cart__item-price'>
											<div className='catalog__item-price'>
												<div className='price-new'>
													1000 <span>₽</span>
												</div>
												<div className='price-old'>
													1000 <span>₽</span>
												</div>
											</div>
										</div>
									</div>
									<div className='cart__item-control'>
										<div className='cart__item-counter counter'>
											<input
												type='hidden'
												name='counter-dlya_nee'
												id='counter-dlya_nee'
												className='counter-input'
											/>
											<button
												type='button'
												className='button counter-plus'
											></button>
											<div className='counter-value'>1</div>
											<button
												type='button'
												className='button counter-minus'
											></button>
										</div>
										<button
											type='button'
											className='button cart__item-remove'
										></button>
										<div className='cart__item-price-total'>
											1000 <span>₽</span>
										</div>
									</div>
								</div>
							</div>
							<div className='cart__total'>
								<form action='POST' className='cart__total-promotion'>
									<label htmlFor='promotion' className='form__label'>
										Промокод
									</label>
									<input
										type='text'
										name='promotion'
										id='promotion'
										required
										placeholder='Промокод'
										className='cart__total-promotion-input form__input'
									/>
									<button
										type='submit'
										className='cart__total-promotion-button button button-fill'
									>
										Применить
									</button>
								</form>

								<div className='cart__total-group'>
									<div className='cart__total-title'>Итоговая сумма:</div>
									<div className='cart__total-price'>
										10 000 <span>₽</span>
									</div>
									<div className='cart__total-discount'>
										Скидка по промокоду - 100 ₽
									</div>
								</div>
							</div>

							<div className='cart__form'>
								<h2 className='cart__form-title'>Оставьте свои данные</h2>
								<h3 className='cart__form-subtitle'>
									и мы перезвоним вам в ближайшее время
								</h3>
								<div className='cart__form-group'>
									<div className='cart__form-contacts'>
										<div className='form__group'>
											<label className='form__label' htmlFor='cart-name'>
												Ваше имя
											</label>
											<input
												type='text'
												name='cart-name'
												className='form__input'
												required
											/>
										</div>
										<div className='form__group'>
											<label htmlFor='cart-tel' className='form__label'>
												Телефон
											</label>
											<input
												type='text'
												name='cart-tel'
												className='form__input'
												placeholder='+7 (000) 000 00 00'
												required
											/>
										</div>
									</div>
									<div className='cart__form-address'>
										<label className='form__label'>Адрес доставки</label>
										<div className='form__group'>
											<input type='hidden' name='city-value' id='city-value' />
											<div className='form__dropdown'>
												<button
													type='button'
													className='form__dropdown-selected form__input'
													id='city-selected'
												>
													Город
												</button>
												<ul className='form__dropdown-list' id='city-list'>
													<li data-value='Москва'>Москва</li>
													<li data-value='Санкт-Петербург'>Санкт-Петербург</li>
													<li data-value='Самара'>Самара</li>
												</ul>
											</div>
										</div>
										<div className='form__group'>
											<input
												type='hidden'
												name='street-value'
												id='street-value'
											/>
											<div className='form__dropdown'>
												<button
													type='button'
													className='form__dropdown-selected form__input'
													id='street-selected'
												>
													Улица
												</button>
												<ul className='form__dropdown-list' id='street-list'>
													<li data-value='Улица'>Улица</li>
													<li data-value='Ленина'>Ленина</li>
													<li data-value='Пушкина'>Пушкина</li>
													<li data-value='Тверская'>Тверская</li>
												</ul>
											</div>
										</div>
										<div className='form__group-three'>
											<div className='form__group'>
												<input
													type='hidden'
													name='house-value'
													id='house-value'
												/>
												<div className='form__dropdown'>
													<button
														type='button'
														className='form__dropdown-selected form__input'
														id='house-selected'
													>
														Дом/офис
													</button>
													<ul className='form__dropdown-list' id='house-list'>
														<li data-value='Дом/офис'>Дом/офис</li>
														<li data-value='1'>1</li>
														<li data-value='2'>2</li>
														<li data-value='3'>3</li>
													</ul>
												</div>
											</div>
											<div className='form__group'>
												<input
													type='hidden'
													name='apartment-value'
													id='apartment-value'
												/>
												<div className='form__dropdown'>
													<button
														type='button'
														className='form__dropdown-selected form__input'
														id='apartment-selected'
													>
														Квартира
													</button>
													<ul
														className='form__dropdown-list'
														id='apartment-list'
													>
														<li data-value='Квартира'>Квартира</li>
														<li data-value='1'>1</li>
														<li data-value='2'>2</li>
														<li data-value='3'>3</li>
													</ul>
												</div>
											</div>
											<input
												type='text'
												name='doorphone'
												className='form__input'
												placeholder='Домофон'
											/>
										</div>
									</div>
								</div>
								<div className='cart__form-group'>
									<textarea
										name='extra-info'
										id='extra-info'
										className='form__input form__textarea'
										placeholder='Дополнительная информация'
										cols='20'
										rows='3'
									></textarea>
									<div className='form__group form__group-privacy'>
										<label className='form__label'>
											Нажимая на кнопку даю согласие на обработку{' '}
											<span className='text-accent'>Персональных данных</span>
										</label>
										<button type='submit' className='button button-fill'>
											Заказать
										</button>
									</div>
								</div>
							</div>

							<div className='cart__add'>
								<h2 className='cart__add-title'>Добавить к заказу:</h2>
								<div className='cart__list'>
									<div className='cart__item'>
										<div className='cart__item-info'>
											<div className='cart__item-group'>
												<input
													type='checkbox'
													name='item-add-dlya_podrugi'
													id='item-add-dlya_podrugi'
													checked
												/>
												<label
													htmlFor='item-add-dlya_podrugi'
													className='form__label'
												/>

												<div className='cart__item-img'>
													<img
														src='/img/jar.png'
														alt='101 Валентинка для Подруги'
													/>
												</div>
												<div className='cart__item-title-price'>
													<div className='cart__item-title'>
														101 Валентинка для Подруги
													</div>
												</div>
											</div>
											<div className='cart__item-price'>
												<div className='catalog__item-price'>
													<div className='price-new'>
														1000 <span>₽</span>
													</div>
													<div className='price-old'>
														1000 <span>₽</span>
													</div>
												</div>
											</div>
										</div>
										<div className='cart__item-control'>
											<div className='cart__item-counter counter'>
												<input
													type='hidden'
													name='counter-dlya_podrugi'
													id='counter-dlya_podrugi'
													value='1'
													className='counter-input'
												/>

												<button
													type='button'
													className='button counter-plus'
												></button>
												<div className='counter-value'>1</div>
												<button
													type='button'
													className='button counter-minus'
												></button>
											</div>
											<div className='cart__item-price-total'>
												1000 <span>₽</span>
											</div>
											<button
												type='button'
												className='cart__item-delete button button-outline button-outline-red button-outline-small'
											>
												Удалить
											</button>
										</div>
									</div>
									<div className='cart__item'>
										<div className='cart__item-info'>
											<div className='cart__item-group'>
												<input
													type='checkbox'
													name='item-add-dlya_nee'
													id='item-add-dlya_nee'
													checked=''
												/>
												<label
													htmlFor='item-add-dlya_nee'
													className='form__label'
												/>

												<div className='cart__item-img'>
													<img
														src='/img/jar.png'
														alt='101 Валентинка для Него'
													/>
												</div>
												<div className='cart__item-title-price'>
													<div className='cart__item-title'>
														101 Валентинка для Него
													</div>
												</div>
											</div>
											<div className='cart__item-price'>
												<div className='catalog__item-price'>
													<div className='price-new'>
														1000 <span>₽</span>
													</div>
													<div className='price-old'>
														1000 <span>₽</span>
													</div>
												</div>
											</div>
										</div>
										<div className='cart__item-control'>
											<div className='cart__item-counter counter'>
												<input
													type='hidden'
													name='counter-dlya_nego'
													id='counter-dlya_nego'
													value='1'
													className='counter-input'
												/>
												<button
													type='button'
													className='button counter-plus'
												></button>
												<div className='counter-value'>1</div>
												<button
													type='button'
													className='button counter-minus'
												></button>
											</div>
											<div className='cart__item-price-total'>
												1000 <span>₽</span>
											</div>
											<button
												type='button'
												className='cart__item-add button button-outline button-outline-small'
											>
												Добавить к заказу
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
