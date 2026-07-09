"use client"

import FilterBlock from "@/components/FilterBlock/FilterBlock";
import TeacherCard from "@/components/TeacherCard/TeacherCard";

import css from "./page.client.module.css"
import { useQuery } from "@tanstack/react-query";
import { fetchTeachers } from "@/firebase/auth";
import { Teacher } from "@/firebase/types";
import { useEffect, useMemo, useState } from "react";
import { Filter } from "@/types/filter";

const TeachersClientPage = () => {
	const [filters, setFilters] = useState<Filter>({
		language: null,
    level: null,
    price: null,
	})

	console.log(filters)

	const { data: teachers = [] } = useQuery({
		queryKey: ["teachers"],
		queryFn: () => fetchTeachers()
	});

	console.log(teachers)

	function filterTeachers(teachers: Teacher[], filters: Filter) {
    return teachers.filter(teacher => {
			if (filters.language != null && !teacher.languages.includes(filters.language))
				return false;
			if (filters.level != null && !teacher.levels.includes(filters.level))
				return false;
			if (filters.price != null && teacher.price_per_hour < Number(filters.price))
				return false;
			
			return true;
    });
	}

	const filteredTeachers = useMemo(
    () => filterTeachers(teachers, filters),
    [teachers, filters]
	);

	const TEACHERS_PER_PAGE = 4;

	const [page, setPage] = useState(1);
	const endIndex = page * TEACHERS_PER_PAGE;
	const visibleTeachers = filteredTeachers.slice(0, endIndex);
	const hasMore = endIndex < filteredTeachers.length;
	const handleLoadMore = () => {
		setPage(prev => prev + 1);
	};

	useEffect(() => {
		// тут прибрав, бо цей виклик технічно не має викликати нескінченний ефект 
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setPage(1);
	}, [filters]);

	return (
		<main className={css.main}>
			<FilterBlock
				filters={filters}
				changeFilters={setFilters}
			/>
			
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