import { getAllPosts } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const posts = getAllPosts().slice(0, 3);
	return { posts };
};
