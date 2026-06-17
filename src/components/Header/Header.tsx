import Link from "next/link"
import css from "./Header.module.css"


const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.header_navigation}>
				<Link className={css.favicon_link} href="/" aria-label="Home">
					<svg className={css.favicon_logo}>
						<use href="/icons.svg#icon-logo"></use>
					</svg>

					LearnLingo
				</Link>

				<nav>
					<ul className={css.nav_list}>
						<li className={css.nav_item}><Link href="/">Home</Link></li>
						<li className={css.nav_item}><Link href="/teachers">Teachers</Link></li>
					</ul>
				</nav>
			</div>

			<div className={css.auth_actions}>
				<button className={css.login_button}>
					<svg className={css.login_logo}>
						<use href="/icons.svg#icon-auth"></use>
					</svg>

					Log in
				</button>

				<button className={css.registration_button}>Registration</button>
			</div>
		</header>
	);
};

export default Header;