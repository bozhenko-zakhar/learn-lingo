export type Reviewer = {
	comment: string;
	reviewer_name: string;
	reviewer_rating: number;
}

export type Teacher = {
	id: string;
	avatar_url: string;
	name: string;
	surname: string;
	conditions: string[];
	lessons_done: number;
	languages: string[];
	levels: string[];
	lesson_info: string;
	price_per_hour: number;
	rating: number;
	experience: string;
	reviews: Reviewer[];
}