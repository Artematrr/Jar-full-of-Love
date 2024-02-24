const MainPage = () => {
	return (
		<main className='main'>
			<section className='banner container'>
				<h2 className='banner__title'>
					Оригинальный подарок для самого любимого, дорогого человека
				</h2>
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
