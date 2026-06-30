
import css from "./RegistrationForm.module.css"


const RegistrationForm = () => {
	return (
		<form className={css.form}>
			<h2>Registration</h2>
			<p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>

			<div className={css.inputs_container}>
				<input className={css.input} placeholder="Name" />
				<input className={css.input} placeholder="Email" />
				<div className={css.password_container}>
					<input className={css.input} placeholder="Password" />
					<svg className={css.icon}>
						<use href="/icons.svg#icon-eye-off"></use>
					</svg>
				</div>
			</div>

			<button className={css.button}>Sign Up</button>
		</form>
	)
};

export default RegistrationForm;