"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(null);

export function useAuth() {
	return useContext(AuthContext);
}

type Props = {
	children: ReactNode
}

export function AuthProvider({ children }: Props) {
	const [currentUser, setCurrentUser] = useState(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	async function initializeUser(user) {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}
		setLoading(false);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		userLoggedIn,
		loading
	};

	return (
		<AuthContext value={{value}}>
			{children}
		</AuthContext>
	)
}