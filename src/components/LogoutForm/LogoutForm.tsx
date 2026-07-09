"use client";

import { useState } from "react";
import css from "./LogoutForm.module.css"
import { logout } from "@/firebase/auth";

type Props = {
	closeMenu: () => void;
}

const LogoutForm = ({ closeMenu }: Props) => {
	const [isLoading, setLoading] = useState(false);

	function logoutHandler() {
		setLoading(true);
		logout();
		setLoading(false);
		closeMenu();
	}

	return (
		<form className={css.form}>
			<p>Are you sure you want to logout?</p>

			<div className={css.buttons}>
				<button onClick={closeMenu}>Cancel</button>
				<button onClick={logoutHandler}>{ !isLoading ? "Log out" : "Logging out"}</button>
			</div>
		</form>
	)
};

export default LogoutForm;