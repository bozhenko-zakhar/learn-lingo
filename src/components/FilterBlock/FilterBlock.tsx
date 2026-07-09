"use client"

import Select from "react-select";
import { Filter } from "@/types/filter";

import clsx from "clsx";
import css from "./FilterBlock.module.css"

const langOptions = [
	{value: "French", label: "French"},
	{value: "English", label: "English"},
	{value: "German", label: "German"},
	{value: "Ukrainian", label: "Ukrainian"},
	{value: "Polish", label: "Polish"},
	{value: "Spanish", label: "Spanish"},
	{value: "Mandarin Chinese", label: "Mandarin Chinese"},
	{value: "Italian", label: "Italian"},
	{value: "Korean", label: "Korean"},
	{value: "Vietnamese", label: "Vietnamese"},
];

const levelOptions = [
	{value: "A1 Beginner", label: "A1 Beginner"},
	{value: "A2 Elementary", label: "A2 Elementary"},
	{value: "B1 Intermediate", label: "B1 Intermediate"},
	{value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate"},
	{value: "C1 Advanced", label: "C1 Advanced"},
	{value: "C2 Proficient", label: "C2 Proficient"}
];

const priceOptions = [
	{value: "10", label: "10"},
	{value: "20", label: "20"},
	{value: "30", label: "30"},
	{value: "40", label: "40"}
];

type Props = {
	filters: Filter;
	changeFilters: (filters: Filter) => void;
}

const FilterBlock = ({ filters, changeFilters }: Props) => {
	return (
		<ul className={css.filter_container}>
			<li>
				<p>Languages</p>
				<Select onChange={(selectedOption) => changeFilters({...filters, language: selectedOption?.value ?? null})}
					classNames={{
						container: () => clsx(css.container, css.lang),
						control: () => css.control,
						placeholder: () => css.placeholder,
						menuList: () => css.menuList,
						option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
						noOptionsMessage: () => css.noOptionsMessage,
						multiValueRemove: () => css.multiValueRemove
				}} options={langOptions} unstyled placeholder="Choose a language" />
			</li>
			<li>
				<p>Level of knowledge</p>
				<Select  onChange={(selectedOption) => changeFilters({...filters, level: selectedOption?.value ?? null})}
					classNames={{
					container: () => clsx(css.container, css.level),
					control: () => css.control,
					placeholder: () => css.placeholder,
					menuList: () => css.menuList,
					option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
					noOptionsMessage: () => css.noOptionsMessage,
					multiValueRemove: () => css.multiValueRemove
				}} options={levelOptions} unstyled placeholder="Choose your level" />
			</li>
			<li>
				<p>Price</p>
				<Select  onChange={(selectedOption) => changeFilters({...filters, price: selectedOption?.value ?? null})}
					classNames={{
						container: () => clsx(css.container, css.price),
						control: () => css.control,
						placeholder: () => css.placeholder,
						menuList: () => css.menuList,
						option: (state) => clsx(css.option, state.isSelected && css.selectedOption),
						noOptionsMessage: () => css.noOptionsMessage,
						multiValueRemove: () => css.multiValueRemove
				}} options={priceOptions} unstyled placeholder="0 $" />
			</li>
		</ul>
	)
};

export default FilterBlock;