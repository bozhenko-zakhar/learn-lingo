"use client";

import css from "./RegistrationForm.module.css"
import { registerUser } from "@/firebase/auth";
import { RegisterInterface } from "@/types/forms";
import { registerSchema } from "@/validations/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
	closeMenu: () => void;
}

const RegistrationForm = ({ closeMenu }: Props) => {
	const [isLoading, setLoading] = useState(false);
	const [isHidden, setHidden] = useState(true);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<RegisterInterface>({
		resolver: yupResolver(registerSchema)
	});
	
	
	const submitForm = async (data: RegisterInterface) => {
		setLoading(true);

		try {
			await registerUser({ name: data.name, email: data.email, password: data.password });
			
			toast.success(`You were successfuly registered!`);
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
			<h2>Registration</h2>
			<p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>

			<div className={css.inputs_container}>
				<input {...register("name")} type="text" className={css.input} placeholder="Name" />
				<p className={css.errors}>{errors.name?.message}</p>
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

			<button className={css.button}>{ !isLoading ? "Sign Up" : "Signing Up..." }</button>
		</form>
	)
};

export default RegistrationForm;