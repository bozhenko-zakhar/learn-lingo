"use client"

import Select from "react-select";
import clsx from "clsx";
import css from "./FilterBlock.module.css"

const langOptions = [
	{value: "french", label: "French"},
	{value: "english", label: "English"},
	{value: "german", label: "German"},
	{value: "ukrainian", label: "Ukrainian"},
	{value: "polish", label: "Polish"}
]

const levelOptions = [
	{value: "a1", label: "A1 Beginner"},
	{value: "a2", label: "A2 Elementary"},
	{value: "b1", label: "B1 Intermediate"},
	{value: "b2", label: "B2 Upper-Intermediate"}
]

const priceOptions = [
	{value: 10, label: "10"},
	{value: 20, label: "20"},
	{value: 30, label: "30"},
	{value: 40, label: "40"}
]

const FilterBlock = () => {
	return (
		<ul className={css.filter_container}>
			<li>
				<p>Languages</p>
				<Select options={langOptions} unstyled classNames={{
					container: () => clsx(css.container, css.lang),
					control: () => css.control,
					placeholder: () => css.placeholder,
					menuList: () => css.menuList,
					option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
					noOptionsMessage: () => css.noOptionsMessage,
					multiValueRemove: () => css.multiValueRemove
				}} placeholder="Choose a language" />
			</li>
			<li>
				<p>Level of knowledge</p>
				<Select options={levelOptions} unstyled classNames={{
					container: () => clsx(css.container, css.level),
					control: () => css.control,
					placeholder: () => css.placeholder,
					menuList: () => css.menuList,
					option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
					noOptionsMessage: () => css.noOptionsMessage,
					multiValueRemove: () => css.multiValueRemove
				}} placeholder="Choose your level" />
			</li>
			<li>
				<p>Price</p>
				<Select options={priceOptions} unstyled classNames={{
					container: () => clsx(css.container, css.price),
					control: () => css.control,
					placeholder: () => css.placeholder,
					menuList: () => css.menuList,
					option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
					noOptionsMessage: () => css.noOptionsMessage,
					multiValueRemove: () => css.multiValueRemove
				}} placeholder="0 $" />
			</li>
		</ul>
	)
};

export default FilterBlock;