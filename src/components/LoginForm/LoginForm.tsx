"use client"
import css from "./LoginForm.module.css"


const LoginForm = () => {
	return (
		<form className={css.form}>
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

			<button className={css.button}>Log In</button>
		</form>
	)
};

export default LoginForm;