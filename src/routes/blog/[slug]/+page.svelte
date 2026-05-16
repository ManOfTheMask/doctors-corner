<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { post } = data;
</script>

<svelte:head>
	<title>{post.title} — The Doctor's Corner</title>
	<meta name="description" content={post.description} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-16">
	<!-- Back link -->
	<a href="/blog" class="link link-hover text-sm text-base-content/50 inline-flex items-center gap-1 mb-10">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg>
		All posts
	</a>

	<!-- Post header -->
	<header class="mb-10">
		<div class="flex flex-wrap gap-1 mb-4">
			{#each post.tags as tag}
				<span class="badge badge-primary badge-outline badge-sm">{tag}</span>
			{/each}
		</div>
		<h1 class="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">{post.title}</h1>
		<p class="text-base-content/60 text-lg mb-4">{post.description}</p>
		<div class="divider my-0"></div>
		<time class="text-sm text-base-content/40">
			{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
		</time>
	</header>

	<!-- Post body -->
	<div class="prose prose-base max-w-none
		prose-headings:font-bold
		prose-a:text-primary prose-a:no-underline hover:prose-a:underline
		prose-code:bg-base-300 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
		prose-pre:bg-base-300 prose-pre:rounded-xl
		prose-blockquote:border-primary prose-blockquote:bg-base-200 prose-blockquote:rounded-r-lg
		prose-img:rounded-xl prose-img:shadow-md">
		{@html post.content}
	</div>

	<!-- Footer nav -->
	<div class="divider mt-16 mb-8"></div>
	<div class="flex justify-between items-center">
		<a href="/blog" class="btn btn-ghost btn-sm">← All Posts</a>
		<a href="/" class="btn btn-ghost btn-sm">Home →</a>
	</div>
</article>
