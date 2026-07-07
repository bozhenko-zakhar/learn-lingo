"use client"
import Image from "next/image";
import css from "./BookForm.module.css"



const BookForm = () => {
	return (
		<form className={css.form}>
			<h2>Book trial lesson</h2>
			<p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>

			<div className={css.teachers_info}>
				<Image
					className={css.teachers_image}
					src="/mac-smiling.jpg"
					alt="Smiling girl hiding behind laptop"
					width={33}
					height={33}
					loading="eager"
				/>

				<div className={css.teachers_names}>
					<p>Your teacher</p>
					<h4>Jane Smith</h4>
				</div>
			</div>

			<fieldset className={css.fieldset}>
				<legend>What is your main reason for learning English?</legend>

				<label>
					<input type="radio" name="reason" className={css.active} />
					<span>Career and business</span>
				</label>
				
				<label>
					<input type="radio" name="reason" />
					<span>Lesson for kids</span>
				</label>
				
				<label>
					<input type="radio" name="reason" />
					<span>Living abroad</span>
				</label>
				
				<label>
					<input type="radio" name="reason" />
					<span>Exams and coursework</span>
				</label>

				<label>
					<input type="radio" name="reason" />
					<span>Culture, travel or hobby</span>
				</label>
			</fieldset>

			<div className={css.inputs_container}>
				<input className={css.input} placeholder="Full Name" />
				<input className={css.input} placeholder="Email"/>
				<input className={css.input} placeholder="Phone number"/>
			</div>

			<button className={css.button}>Book</button>
		</form>
	);
};

export default BookForm;