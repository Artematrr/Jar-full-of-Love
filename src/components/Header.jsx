const Header = () => {
	return (
		<header className='header'>
			<div className='header__inner'>
				<div className='header-icon header__burger'>
					<input
						className='header__burger-checkbox'
						type='checkbox'
						name='header__burger-checkbox'
						id='header__burger-checkbox'
					/>
					<img id='header__burger-image' src='img/icons/menu.svg' alt='Мобильое меню' />
				</div>
				<a href='#' className='header__logo'>
					<div className='header__logo-image'>
						<img src='img/logo.svg' alt='Банка полная любви' />
					</div>
					<h1 className='header__logo-title'>Банка полная любви</h1>
				</a>

				<nav className='header__nav'>
					<ul>
						<li>
							<a href='#catalog' className='header__nav-link'>
								Каталог
							</a>
						</li>

						<li>
							<a href='#form' className='header__nav-link'>
								На заказ
							</a>
						</li>
						<li>
							<a href='#advantages' className='header__nav-link'>
								Почему мы?
							</a>
						</li>
						<li>
							<a href='#delivery' className='header__nav-link'>
								Доставка и оплата
							</a>
						</li>
						<li>
							<a href='#reviews' className='header__nav-link'>
								Отзывы
							</a>
						</li>
					</ul>
				</nav>

				<div className='header__social'>
					<div className='header__tel'>
						<a
							href='tel:+70000000000'
							className='header__tel-link header__social-link header-icon'
						>
							<img src='img/icons/call.svg' alt='Обратный звонок' />
						</a>
						<div className='header__tel-number'>
							<a href='tel:+70000000000'>+7 (000) 000-00-00</a>
						</div>
						<p className='header__tel-subtitle'>Обратный звонок</p>
					</div>

					<a href='#' className='header__social-link header-icon'>
						<img src='img/icons/telegram.svg' alt='Телеграм' />
					</a>
					<a href='#' className='header__social-link header-icon'>
						<img src='img/icons/whatsapp.svg' alt='Вотсап' />
					</a>
				</div>
			</div>
			<div className='header__mobile'>
				<div className='header__inner'>
					<nav className='header__nav'>
						<ul>
							<li>
								<a href='#' className='header__nav-link'>
									Каталог
								</a>
							</li>

							<li>
								<a href='#' className='header__nav-link'>
									На заказ
								</a>
							</li>
							<li>
								<a href='#' className='header__nav-link'>
									Почему мы?
								</a>
							</li>
							<li>
								<a href='#' className='header__nav-link'>
									Доставка и оплата
								</a>
							</li>
							<li>
								<a href='#' className='header__nav-link'>
									Отзывы
								</a>
							</li>
						</ul>
					</nav>

					<div className='header__social'>
						<div className='header__tel'>
							<a
								href='tel:+70000000000'
								className='header__tel-link header__social-link header-icon'
							>
								<img src='img/icons/call.svg' alt='Обратный звонок' />
							</a>
							<div className='header__tel-number'>
								<a href='tel:+70000000000'>+7 (000) 000-00-00</a>
							</div>
							<p className='header__tel-subtitle'>Обратный звонок</p>
						</div>

						<a href='#' className='header__social-link header-icon'>
							<img src='img/icons/telegram.svg' alt='Телеграм' />
						</a>
						<a href='#' className='header__social-link header-icon'>
							<img src='img/icons/whatsapp.svg' alt='Вотсап' />
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
