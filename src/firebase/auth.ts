import { get, ref } from "firebase/database";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Teacher } from "./types";

interface LoginParams {
	email: string;
	password: string;
}

interface RegisterParams {
	name: string;
	email: string;
	password: string;
}

export const fetchTeachers = async (): Promise<Teacher[]> => {
	const teachersReference = ref(db, "teachers");
	const snapshot = await get(teachersReference);

	if (!snapshot.exists()) {
		return [];
  }

  return snapshot.val();
}

export const login = async ({ email, password }: LoginParams) => {
	return await signInWithEmailAndPassword(auth, email, password);
};

export const register = async ({ email, password }: RegisterParams) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
	return await signOut(auth);
}