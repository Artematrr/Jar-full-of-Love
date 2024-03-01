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
