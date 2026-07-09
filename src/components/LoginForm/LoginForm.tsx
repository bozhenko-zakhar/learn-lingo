"use client"
import { useState } from "react";
import css from "./LoginForm.module.css"
import { login } from "@/firebase/auth";


const LoginForm = () => {
	const [isLoading, setLoading] = useState(false);


	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setLoading(true);
		
		try {
			const user = await login({ email: "qwerty@gmail.com", password: "qwertyqwerty" });
			console.log(user);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	}

	return (
		<form onSubmit={onSubmit} className={css.form}>
			<h2>Log In</h2>
			<p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
				
			<div className={css.inputs_container}>
				<input className={css.input} placeholder="Email" />
				<div className={css.password_container}>
					<input className={css.input} placeholder="Password" />
					<svg className={css.icon}>
						<use href="/icons.svg#icon-eye-off"></use>
					</svg>
				</div>
			</div>

			<button className={css.button}>{ !isLoading ? "Log In" : "Signing in..." }</button>
		</form>
	)
};

export default LoginForm;