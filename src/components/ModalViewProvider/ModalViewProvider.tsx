"use client";

import { useState, useEffect, ReactNode, createContext } from "react"
import { createPortal } from "react-dom"
import css from "./ModalViewProvider.module.css"
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

interface ModalContextValue {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	setModalForm: React.Dispatch<React.SetStateAction<"login" | "register" | null>>
}

export const ModalContext = createContext<ModalContextValue | null>(null);

type Props = {
	children: ReactNode;
}

const ModalViewProvider = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [modalForm, setModalForm] = useState<"login" | "register" | null>(null);

	function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
		if (event.target === event.currentTarget) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, []);
	
	return (
		<ModalContext value={{setIsOpen, setModalForm}}>
			{children}
			{ isOpen &&
				createPortal(
					<div onClick={handleOverlayClick} className={css.modal_overlay}>
						<div className={css.modal_container}>
							<div onClick={() => setIsOpen(false)} className={css.icon_container}>
								<svg className={css.icon}>
									<use href="/icons.svg#icon-close"></use>
								</svg>
							</div>
							{
								modalForm === "login" ? <LoginForm /> :
								modalForm === "register" ? <RegistrationForm /> :
								null
							}
						</div>
					</div>,

					document.body
				)
			}
		</ModalContext>
	)
};

export default ModalViewProvider;