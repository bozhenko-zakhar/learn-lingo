"use client"

import FilterBlock from "@/components/FilterBlock/FilterBlock";
import TeacherCard from "@/components/TeacherCard/TeacherCard";

import css from "./page.client.module.css"
import { useQuery } from "@tanstack/react-query";
import { fetchTeachers } from "@/firebase/auth";
import { Teacher } from "@/firebase/types";

const TeachersClientPage = () => {
	const { data } = useQuery({
		queryKey: ["teachers"],
		queryFn: () => fetchTeachers()
	});

	return (
		<main className={css.main}>
			<FilterBlock />
			
			{
				data?.map((teacher: Teacher, index: number) => {
					return (
						<TeacherCard
							key={index}
							avatar_url={teacher.avatar_url}
							name={teacher.name}
							surname={teacher.surname}
							conditions={teacher.conditions}
							lessons_done={teacher.lessons_done}
							languages={teacher.languages}
							levels={teacher.levels}
							lesson_info={teacher.lesson_info}
							price_per_hour={teacher.price_per_hour}
							rating={teacher.rating}
							experience={teacher.experience}
							reviews={teacher.reviews}
						/>
					)
				})
			}
		</main>
	);
};

export default TeachersClientPage;