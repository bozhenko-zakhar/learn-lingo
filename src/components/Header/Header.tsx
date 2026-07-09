"use client"

import Link from "next/link"
import css from "./Header.module.css"
import { use, useState } from "react";
import clsx from "clsx";
import { ModalContext } from "../ModalViewProvider/ModalViewProvider";
import { useAuth } from "../AuthProvider/AuthProvider";


const Header = () => {
	const [isOpened, setOpen] = useState(false);
	const context = use(ModalContext);
	const { currentUser } = useAuth();

	return (
		<header className={css.header}>
			<div className={css.header_navigation}>
				<Link className={css.favicon_link} href="/" aria-label="Home">
					<svg className={css.favicon_logo}>
						<use href="/icons.svg#icon-logo"></use>
					</svg>

					LearnLingo
				</Link>

				<nav className={css.nav}>
					<ul className={css.nav_list}>
						<li className={css.nav_item}><Link href="/">Home</Link></li>
						<li className={css.nav_item}><Link href="/teachers">Teachers</Link></li>
					</ul>
				</nav>
			</div>

			<div className={css.auth_actions}>
				{currentUser && <div>
					<p className={css.displayEmail}>{currentUser.email}</p>
					<p className={css.displayName}>{currentUser.displayName}</p>
				</div>}

				<button onClick={() => {
					context?.setIsOpen(true);
					context?.setModalForm(!currentUser ? "login" : "logout");
				}} className={css.login_button}>
					<svg className={css.login_logo}>
						<use href="/icons.svg#icon-auth"></use>
					</svg>

					{ !currentUser ? "Log in" : "Log out"}
				</button>

				{ !currentUser && <button onClick={() => {
					context?.setIsOpen(true);
					context?.setModalForm("register");
				}} className={css.registration_button}>Registration</button>
				}
			</div>

			<button onClick={() => setOpen(!isOpened)} className={clsx(css.burger_menu, isOpened && css.active)}>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<div className={clsx(css.header_modal_overlay, isOpened && css.active)}>
				<div className={css.modal_container}>
					<nav className={css.modal_nav}>
						<ul className={css.modal_nav_list}>
							<li
								onClick={() => setOpen(!isOpened)}
								className={css.modal_nav_item}
							>
								<Link href="/">Home</Link>
							</li>
							<li
								onClick={() => setOpen(!isOpened)}
								className={css.modal_nav_item}
							>
								<Link href="/teachers">Teachers</Link>
							</li>
						</ul>
					</nav>

					{currentUser && <div>
						<p className={css.displayEmail}>{currentUser.email}</p>
						<p className={css.displayName}>{currentUser.displayName}</p>
					</div>}

					<button onClick={() => {
						context?.setIsOpen(true);
						context?.setModalForm(!currentUser ? "login" : "logout");
					}} className={css.login_button}>
						<svg className={css.login_logo}>
							<use href="/icons.svg#icon-auth"></use>
						</svg>

						{ !currentUser ? "Log in" : "Log out"}
					</button>

					{ !currentUser && <button onClick={() => {
						context?.setIsOpen(true);
						context?.setModalForm("register");
					}} className={css.registration_button}>Registration</button>
					}
				</div>
			</div>
		</header>
	);
};

export default Header;