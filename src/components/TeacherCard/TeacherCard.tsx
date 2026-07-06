"use client";

import Image from "next/image";
import css from "./TeacherCard.module.css";
import { useState } from "react";

const TeacherCard = () => {
	const [isReadMore, setReadMore] = useState(false);

	return (
		<div className={css.card_container}>
			<Image
				className={css.teachers_image}
				src="/Jane Smith.jpg"
				alt="Jane Smith's face"
				width={96}
				height={96}
				loading="eager"
			/>
			
			<div className={css.statistics}>
				<div className={css.teachers_raiting}>
					<p>Languages</p>
					<p>
						<svg className={css.icon}>
							<use href="/icons.svg#icon-book-open"></use>
						</svg>
						Lessons online
					</p>
					<p>Lessons done: 1098</p>
					<p>
						<svg className={css.icon}>
							<use href="/icons.svg#icon-star"></use>
						</svg>
						Rating: 4.8
					</p>
					<p>
						Price / 1 hour: <span>30$</span>
					</p>
				</div>

				<h3>Jane Smith</h3>

				<div className={css.teachers_skills}>
					<p>Speaks: <span>German, French</span></p>
					<p>Lesson Info: <span>Lessons are structured to cover grammar, vocabulary, and practical usage of the language.</span></p>
					<p>Conditions: <span>Welcomes both adult learners and teenagers (13 years and above). Provides personalized study plans</span></p>
				</div>

				{
					isReadMore &&
					<p className={css.teachers_about_me}>Jane is an experienced and dedicated language teacher specializing in German and French. She holds a Bachelor&apos;s degree in German Studies and a Master&apos;s degree in French Literature. Her passion for languages and teaching has driven her to become a highly proficient and knowledgeable instructor. With over 10 years of teaching experience, Jane has helped numerous students of various backgrounds and proficiency levels achieve their language learning goals. She is skilled at adapting her teaching methods to suit the needs and learning styles of her students, ensuring that they feel supported and motivated throughout their language journey.</p>
				}
				

				{
					!isReadMore &&
					<button onClick={() => setReadMore(!isReadMore)}>Read more</button>
				}
				

				{
					isReadMore && 
					<ul className={css.comment_section}>
						<li className={css.comment_user}>
							<div>
								<Image
									className={css.comment_image}
									src="/Frank.jpg"
									alt="Jane Smith's face"
									width={44}
									height={44}
									loading="eager"
								/>
								
								<div className={css.comment_names}>
									<p>Frank</p>
									<p>
										<svg className={css.icon}>
											<use href="/icons.svg#icon-star"></use>
										</svg>
										4.0
									</p>
								</div>
							</div>

							<p>Jane&apos;s lessons were very helpful. I made good progress.</p>
						</li>
					</ul>
				}

				<ul className={css.teachers_levels}>
					<li><p>#A1 Beginner</p></li>
					<li><p>#A2 Elementary</p></li>
					<li><p>#B1 Intermediate</p></li>
					<li><p>#B2 Upper-Intermediate</p></li>
				</ul>

				{
					isReadMore &&
					<button>Book trial lesson</button>
				}
			</div>
		</div>
	);
};

export default TeacherCard;