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

			<section className='form container' id='form'>
				<h2 className='form__title'>Собери свою Банку любви</h2>
			</section>

			<section className='advantages container' id='advantages'>
				<h2 className='advantages__title'>Почему мы?</h2>
			</section>

			<section className='reviews container' id='reviews'>
				<h2 className='reviews__title'>Отзывы</h2>
			</section>

			<section className='delivery container' id='delivery'>
				<h2 className='delivery__title'>Мы продаем на</h2>
			</section>
		</main>
	)
}

export default MainPage
