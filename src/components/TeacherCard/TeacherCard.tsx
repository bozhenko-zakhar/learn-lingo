"use client";

import Image from "next/image";
import css from "./TeacherCard.module.css";
import { use, useState } from "react";
import { ModalContext } from "../ModalViewProvider/ModalViewProvider";
import { Reviewer } from "@/types/teacher"
import { useAuth } from "../AuthProvider/AuthProvider";
import { toggleFavorites } from "@/firebase/auth";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
	id: string;
	is_favorited: boolean;
	avatar_url: string;
	name: string;
	surname: string;
	conditions: string[];
	lessons_done: number;
	languages: string[];
	levels: string[];
	lesson_info: string;
	price_per_hour: number;
	rating: number;
	experience: string;
	reviews: Reviewer[];
}

const TeacherCard = ({
	id,
	is_favorited,
	avatar_url,
	name,
	surname,
	conditions,
	lessons_done,
	languages,
	levels,
	lesson_info,
	price_per_hour,
	rating,
	experience,
	reviews
}: Props) => {
	const [isReadMore, setReadMore] = useState(false);
	const context = use(ModalContext);
	const { currentUser } = useAuth();

	const queryClient = useQueryClient();
	
	async function toggleFavoritesHandler(userId: string, teacherId: string) {
		await toggleFavorites(userId, teacherId);

		await queryClient.invalidateQueries({
				queryKey: ["favorites", userId],
		});
	}

	return (
		<div className={css.card_container}>
			<svg onClick={async () => {
				await toggleFavoritesHandler(currentUser!.uid, id);
			}} className={css.fav_icon}>
				<use href={is_favorited ? "/icons.svg#icon-favorite" : "/icons.svg#icon-favorite-uncoloured"}></use>
			</svg>

			<div className={css.image_container}>
				<Image
					className={css.teachers_image}
					src={avatar_url || "/default_image.jpg"}
					alt={`${name} ${surname}'s face`}
					width={96}
					height={96}
					loading="eager"
				/>
				<div className={css.teachers_icon}></div>
			</div>
			
			<div className={css.statistics}>
				<div className={css.teachers_stack}>
					<div className={css.teachers_spec}>
						<p>Languages</p>
						<h3>{name} {surname}</h3>
					</div>

					<div className={css.teachers_raiting}>
						<p>
							<svg className={css.icon}>
								<use href="/icons.svg#icon-book-open"></use>
							</svg>
							Lessons online
						</p>
						<p>Lessons done: {lessons_done}</p>
						<p>
							<svg className={css.icon}>
								<use href="/icons.svg#icon-star"></use>
							</svg>
							Rating: {rating}
						</p>
						<p>
							Price / 1 hour: <span>{price_per_hour}$</span>
						</p>
					</div>
				</div>

				<div className={css.teachers_skills}>
					<p>Speaks: <span>{languages?.join(", ")}</span></p>
					<p>Lesson Info: <span>{lesson_info}</span></p>
					<p>Conditions: <span>{conditions?.join(" ")}</span></p>
				</div>

				{
					isReadMore &&
					<p className={css.teachers_about_me}>{experience}</p>
				}
				

				{
					!isReadMore &&
					<button onClick={() => setReadMore(!isReadMore)}>Read more</button>
				}
				

				{
					isReadMore && 
					<ul className={css.comment_section}>
						{
							reviews?.map((reviewer, index) => {
								return (
									<li className={css.comment_user} key={index}>
										<div>
											<Image
												className={css.comment_image}
												src="/default_image.jpg"
												alt={"Default image"}
												width={44}
												height={44}
												loading="eager"
											/>
											
											<div className={css.comment_names}>
												<p>{reviewer.reviewer_name}</p>
												<p>
													<svg className={css.icon}>
														<use href="/icons.svg#icon-star"></use>
													</svg>
													{reviewer.reviewer_rating}
												</p>
											</div>
										</div>

										<p>{reviewer.comment}</p>
									</li>
								)
							})
						}
					</ul>
				}

				<ul className={css.teachers_levels}>
					{
						levels?.map((level, index) => {
							return <li key={index}><p>#{level}</p></li>
						})
					}
				</ul>

				{
					isReadMore &&
					<button  onClick={() => {
						context?.setIsOpen(true);
							context?.setModalForm("book");
							context?.setTeacher({
								id,
								avatar_url,
								name,
								surname,
								conditions,
								lessons_done,
								languages,
								levels,
								lesson_info,
								price_per_hour,
								rating,
								experience,
								reviews
							})
					}}>Book trial lesson</button>
				}
			</div>
		</div>
	);
};

export default TeacherCard;