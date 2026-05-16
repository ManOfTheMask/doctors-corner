<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>The Doctor's Corner</title>
	<meta name="description" content="A developer's blog — code, projects, and everything in between." />
</svelte:head>

<!-- Hero -->
<section class="bg-base-200 border-b border-base-300">
	<div class="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-6">
		<div class="badge badge-primary badge-outline font-mono text-xs tracking-widest">DEV BLOG</div>
		<h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
			The Doctor's Corner
		</h1>
		<p class="text-base-content/70 text-lg max-w-xl">
			A developer's journal — writing about code, tools, projects, and whatever else I'm learning.
		</p>
		<div class="flex gap-3 flex-wrap justify-center">
			<a href="/blog" class="btn btn-primary">Read the Blog</a>
			<a href="/about" class="btn btn-ghost">About Me</a>
		</div>
	</div>
</section>

<!-- Recent Posts -->
<section class="max-w-5xl mx-auto px-4 py-16">
	<div class="flex items-center justify-between mb-8">
		<h2 class="text-2xl font-bold">Recent Posts</h2>
		<a href="/blog" class="link link-primary text-sm font-medium">All posts →</a>
	</div>

	{#if data.posts.length === 0}
		<div class="text-center py-12 text-base-content/50">No posts yet — check back soon!</div>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<a
					href="/blog/{post.slug}"
					class="card bg-base-200 border border-base-300 hover:border-primary hover:shadow-lg transition-all group"
				>
					<div class="card-body gap-3">
						<div class="flex flex-wrap gap-1">
							{#each post.tags as tag}
								<span class="badge badge-sm badge-ghost">{tag}</span>
							{/each}
						</div>
						<h3 class="card-title text-base group-hover:text-primary transition-colors leading-snug">
							{post.title}
						</h3>
						<p class="text-sm text-base-content/60 line-clamp-2">{post.description}</p>
						<p class="text-xs text-base-content/40 mt-auto">
							{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</section>

<!-- Stack callout -->
<section class="bg-base-200 border-t border-base-300">
	<div class="max-w-5xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
		<div class="text-4xl">🔧</div>
		<div>
			<h2 class="text-xl font-bold mb-1">Built in public</h2>
			<p class="text-base-content/60 text-sm max-w-lg">
				This site is built with SvelteKit, TailwindCSS, and DaisyUI. The source is on GitHub and the process is documented right here on the blog.
			</p>
		</div>
		<a href="/projects" class="btn btn-outline btn-sm sm:ml-auto shrink-0">See Projects</a>
	</div>
</section>