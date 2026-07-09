import { useAuth } from "@/components/AuthProvider/AuthProvider";
import { fetchFavorites } from "@/firebase/auth";
import { useQuery } from "@tanstack/react-query";

export function useFavorites() {
	const { currentUser } = useAuth();

	return useQuery({
		queryKey: ["favorites", currentUser?.uid],
		queryFn: () => fetchFavorites(currentUser!.uid),
		enabled: !!currentUser,
	});
}