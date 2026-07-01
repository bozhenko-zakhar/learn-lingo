"use client"

import Select from "react-select";
import clsx from "clsx";
import css from "./page.client.module.css"

const options = [
	{value: "french", label: "French"},
	{value: "english", label: "English"},
	{value: "german", label: "German"},
	{value: "ukrainian", label: "Ukrainian"},
	{value: "polish", label: "Polish"}
]

const TeachersClientPage = () => {
	return (
		<main className={css.main}>
			<Select options={options} unstyled classNames={{
				container: () => css.container,
				control: () => css.control,
				placeholder: () => css.placeholder,
				menuList: () => css.menuList,
				option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
				noOptionsMessage: () => css.noOptionsMessage,
				multiValueRemove: () => css.multiValueRemove
			}} placeholder="Language" />
		</main>
	);
};

export default TeachersClientPage;