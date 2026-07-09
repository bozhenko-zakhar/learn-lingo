import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import FavoritesClientPage from "./page.client";
import { fetchTeachers } from "@/firebase/auth";

const FavoritesPage = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["teachers"],
		queryFn: () => fetchTeachers()
	});
	
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<FavoritesClientPage />
		</HydrationBoundary>
	);
};

export default FavoritesPage;