"use client";

import { use } from "react";
import { ModalContext } from "../ModalViewProvider/ModalViewProvider";
import css from "./UnauthorisedForm.module.css"

const UnauthorisedForm = () => {
	const context = use(ModalContext);

	return (
		<form className={css.form}>
			<p>You don&apos;t have a permission to use that function without authorization</p>

			<div className={css.buttons}>
				<button onClick={() => {
					context?.setModalForm("login")
				}}>Log in</button>
				<button onClick={() => {
					context?.setModalForm("register")
				}}>Register</button>
			</div>
		</form>
	)
};

export default UnauthorisedForm;