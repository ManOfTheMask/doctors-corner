import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	description: string;
	tags: string[];
}

export interface Post extends PostMeta {
	content: string;
}

// Vite glob import of all markdown files in src/posts/
const rawPosts = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default', eager: true });

function slugFromPath(path: string): string {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

export function getAllPosts(): PostMeta[] {
	return Object.entries(rawPosts)
		.map(([path, raw]) => {
			const { data } = matter(raw as string);
			return {
				slug: slugFromPath(path),
				title: data.title ?? 'Untitled',
				date: data.date ?? '',
				description: data.description ?? '',
				tags: data.tags ?? []
			};
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
	const entry = Object.entries(rawPosts).find(([path]) => slugFromPath(path) === slug);
	if (!entry) return null;
	const [path, raw] = entry;
	const { data, content } = matter(raw as string);
	return {
		slug: slugFromPath(path),
		title: data.title ?? 'Untitled',
		date: data.date ?? '',
		description: data.description ?? '',
		tags: data.tags ?? [],
		content: marked(content) as string
	};
}
