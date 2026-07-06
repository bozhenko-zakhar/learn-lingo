"use client"

import FilterBlock from "@/components/FilterBlock/FilterBlock";
import TeacherCard from "@/components/TeacherCard/TeacherCard";

import css from "./page.client.module.css"

const TeachersClientPage = () => {
	return (
		<main className={css.main}>
			<FilterBlock />
			<TeacherCard />
		</main>
	);
};

export default TeachersClientPage;