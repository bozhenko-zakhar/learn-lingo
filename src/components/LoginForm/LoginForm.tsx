"use client"
import { useState } from "react";
import css from "./LoginForm.module.css"
import { loginUser } from "@/firebase/auth";
import { useForm } from "react-hook-form";
import { LoginInterface } from "@/types/forms";
import { loginSchema } from "@/validations/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

type Props = {
	closeMenu: () => void;
}

const LoginForm = ({ closeMenu }: Props) => {
	const [isLoading, setLoading] = useState(false);
	const [isHidden, setHidden] = useState(true);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<LoginInterface>({
		resolver: yupResolver(loginSchema)
	});


	const submitForm = async (data: LoginInterface) => {
		setLoading(true);
		try {
			await loginUser({ email: data.email, password: data.password });
			
			toast.success(`You were successfuly entered!`);
			reset();
			closeMenu();
		} catch (error) {
			toast.error(`There was an error: ${error}`)
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit(submitForm)} className={css.form}>
			<h2>Log In</h2>
			<p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
				
			<div className={css.inputs_container}>
				<input {...register("email")} type="email" className={css.input} placeholder="Email" />
				<p className={css.errors}>{errors.email?.message}</p>
				<div className={css.password_container}>
					<input {...register("password")} type={isHidden ? "password" : "text"} className={css.input} placeholder="Password" />
					<svg onClick={() => setHidden(!isHidden)} className={css.icon}>
						<use href="/icons.svg#icon-eye-off"></use>
					</svg>
				</div>
				<p className={css.errors}>{errors.password?.message}</p>
			</div>

			<button className={css.button}>{ !isLoading ? "Log In" : "Signing in..." }</button>
		</form>
	)
};

export default LoginForm;