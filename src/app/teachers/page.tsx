import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import TeachersClientPage from "./page.client";
import { fetchTeachers } from "@/firebase/auth";

const TeachersPage = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["teachers"],
		queryFn: () => fetchTeachers()
	});
	
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<TeachersClientPage />
		</HydrationBoundary>
	);
};

export default TeachersPage;