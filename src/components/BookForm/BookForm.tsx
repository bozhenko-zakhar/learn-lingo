"use client"
import Image from "next/image";
import css from "./BookForm.module.css"
import clsx from "clsx";
import toast from "react-hot-toast";
import { Teacher } from "@/types/teacher"
import { useForm } from "react-hook-form";
import { BookInterface } from "@/types/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema } from "@/validations/bookSchema";
import { useState } from "react";


type Props = {
	teacher: Teacher | null;
}

const BookForm = ({ teacher }: Props) => {
	const [learningReason, setLearningReason] = useState(-1);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<BookInterface>({
		resolver: yupResolver(bookSchema)
	});

	const submitForm = (data: BookInterface) => {
		toast.success(`Your data was successfuly sent:
			\nReason to learn: ${data.learning_reason}
			\nFullname: ${data.full_name}
			\nEmail: ${data.email}
			\nPhone number: ${data.phone_number}`);
		setLearningReason(-1);
		reset();
	}

	return (
		<form onSubmit={handleSubmit(submitForm)} className={css.form}>
			<h2>Book trial lesson</h2>
			<p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>

			<div className={css.teachers_info}>
				<Image
					className={css.teachers_image}
					src={teacher?.avatar_url || "/default_image.jpg"}
					alt={`${teacher?.name} ${teacher?.surname}'s face`}
					width={33}
					height={33}
					loading="eager"
				/>

				<div className={css.teachers_names}>
					<p>Your teacher</p>
					<h4>{`${teacher?.name} ${teacher?.surname}` || null}</h4>
				</div>
			</div>

			<fieldset className={css.fieldset}>
				<legend>What is your main reason for learning English?</legend>

				<label>
					<input
						{...register("learning_reason")}
						type="radio" className={clsx(learningReason === 0 && css.active)}
						onClick={() => setLearningReason(0)} />
					<span>Career and business</span>
				</label>
				
				<label>
					<input {...register("learning_reason")}
						type="radio" className={clsx(learningReason === 1 && css.active)}
						onClick={() => setLearningReason(1)} name="Lesson for kids" />
					<span>Lesson for kids</span>
				</label>
				
				<label>
					<input {...register("learning_reason")}
						type="radio" className={clsx(learningReason === 2 && css.active)}
						onClick={() => setLearningReason(2)} name="Living abroad" />
					<span>Living abroad</span>
				</label>
				
				<label>
					<input {...register("learning_reason")}
						type="radio" className={clsx(learningReason === 3 && css.active)}
						onClick={() => setLearningReason(3)} name="Exams and coursework" />
					<span>Exams and coursework</span>
				</label>

				<label>
					<input {...register("learning_reason")}
						type="radio" className={clsx(learningReason === 4 && css.active)}
						onClick={() => setLearningReason(4)} name="Culture, travel or hobby"/>
					<span>Culture, travel or hobby</span>
				</label>

				<p className={css.errors}>{errors.learning_reason?.message}</p>
			</fieldset>

			<div className={css.inputs_container}>
				<input {...register("full_name")} type="text" className={css.input} placeholder="Full Name" />
				<p className={css.errors}>{errors.full_name?.message}</p>

				<input {...register("email")} type="email" className={css.input} placeholder="Email" />
				<p className={css.errors}>{errors.email?.message}</p>

				<input {...register("phone_number")} type="tel" className={css.input} placeholder="Phone number" />
				<p className={css.errors}>{errors.phone_number?.message}</p>
			</div>

			<button className={css.button}>Book</button>
		</form>
	);
};

export default BookForm;