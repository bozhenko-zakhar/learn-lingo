import { get, ref, remove, set } from "firebase/database";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { Teacher } from "@/types/teacher";

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

	return Object.entries(snapshot.val()).map(([id, teacher]) => ({
		...(teacher as Teacher),
		id,
	}));
}

export const loginUser = async ({ email, password }: LoginParams) => {
	return await signInWithEmailAndPassword(auth, email, password);
};

export const registerUser = async ({ name, email, password }: RegisterParams) => {
	const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
	);

	await updateProfile(credential.user, {
		displayName: name
	});

	await set(
		ref(db, `users/${credential.user.uid}`),
		{
			name,
			email,
		}
	);

	return credential;
};

export const logout = async () => {
	return await signOut(auth);
}

export const fetchFavorites = async (userId: string) => {
	const favoritesReference = ref(db, `users/${userId}/favorites`);
	const snapshot = await get(favoritesReference);

	if (!snapshot.exists()) {
		return [];
	}

	return Object.keys(snapshot.val());
}

export const toggleFavorites = async (userId: string, teacherId: string) => {
  const favoriteRef = ref(db, `users/${userId}/favorites/${teacherId}`);

  const snapshot = await get(favoriteRef);

  if (snapshot.exists()) {
    await remove(favoriteRef);
  } else {
    await set(favoriteRef, true);
  }
};