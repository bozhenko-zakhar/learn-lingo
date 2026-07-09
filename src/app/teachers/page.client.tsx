"use client"

import FilterBlock from "@/components/FilterBlock/FilterBlock";
import TeacherCard from "@/components/TeacherCard/TeacherCard";

import css from "./page.client.module.css"
import { useQuery } from "@tanstack/react-query";
import { fetchTeachers } from "@/firebase/auth";
import { Teacher } from "@/firebase/types";
import { useState } from "react";

const TeachersClientPage = () => {
	const { data: teachers = [] } = useQuery({
		queryKey: ["teachers"],
		queryFn: () => fetchTeachers()
	});

	const TEACHERS_PER_PAGE = 4;

	const [page, setPage] = useState(1);
	const endIndex = page * TEACHERS_PER_PAGE;
	const visibleTeachers = teachers.slice(0, endIndex);
	const hasMore = endIndex < teachers.length;

	const handleLoadMore = () => {
		setPage(prev => prev + 1);
};

	return (
		<main className={css.main}>
			<FilterBlock />
			
			{
				visibleTeachers?.map((teacher: Teacher) => {
					return (
						<TeacherCard
							key={teacher.id}
							id={teacher.id}
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

			{hasMore && (
				<button className={css.lead_more} onClick={handleLoadMore}>
					Load more
				</button>
			)}
		</main>
	);
};

export default TeachersClientPage;