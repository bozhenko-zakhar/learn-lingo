"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";

type AuthContextType = {
	currentUser: User | null;
	userLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within AuthProvider");
	}

	return context;
}

type Props = {
	children: ReactNode
}

export function AuthProvider({ children }: Props) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	function initializeUser(user: User | null) {
    setCurrentUser(user);
		setUserLoggedIn(!!user);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	return (
		<AuthContext value={{currentUser, userLoggedIn}}>
    	{children}
		</AuthContext>
	)
}