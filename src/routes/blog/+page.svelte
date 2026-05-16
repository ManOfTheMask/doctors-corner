<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let search = $state('');
	let activeTag = $state('');

	const allTags = $derived(
		[...new Set(data.posts.flatMap((p) => p.tags))].sort()
	);

	const filtered = $derived(
		data.posts.filter((p) => {
			const matchesSearch =
				!search ||
				p.title.toLowerCase().includes(search.toLowerCase()) ||
				p.description.toLowerCase().includes(search.toLowerCase());
			const matchesTag = !activeTag || p.tags.includes(activeTag);
			return matchesSearch && matchesTag;
		})
	);
</script>

<svelte:head>
	<title>Blog — The Doctor's Corner</title>
	<meta name="description" content="Dev blog posts about code, tools, and projects." />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
	<!-- Header -->
	<div class="mb-10">
		<h1 class="text-4xl font-extrabold mb-3">Blog</h1>
		<p class="text-base-content/60">Thoughts on code, tools, and whatever I'm building.</p>
	</div>

	<!-- Search + filter row -->
	<div class="flex flex-col sm:flex-row gap-3 mb-8">
		<label class="input input-bordered flex items-center gap-2 flex-1">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input type="text" placeholder="Search posts…" bind:value={search} class="grow bg-transparent outline-none" />
		</label>

		{#if allTags.length > 0}
			<div class="flex flex-wrap gap-2 items-center">
				<button
					class="badge badge-lg cursor-pointer transition-colors {!activeTag ? 'badge-primary' : 'badge-ghost hover:badge-primary'}"
					onclick={() => (activeTag = '')}
				>all</button>
				{#each allTags as tag}
					<button
						class="badge badge-lg cursor-pointer transition-colors {activeTag === tag ? 'badge-primary' : 'badge-ghost hover:badge-primary'}"
						onclick={() => (activeTag = activeTag === tag ? '' : tag)}
					>{tag}</button>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Post list -->
	{#if filtered.length === 0}
		<div class="text-center py-20 text-base-content/40">
			<p class="text-lg">No posts found.</p>
			<button class="btn btn-ghost btn-sm mt-4" onclick={() => { search = ''; activeTag = ''; }}>Clear filters</button>
		</div>
	{:else}
		<div class="space-y-4">
			{#each filtered as post}
				<a
					href="/blog/{post.slug}"
					class="card bg-base-200 border border-base-300 hover:border-primary hover:shadow-md transition-all group block"
				>
					<div class="card-body flex-col sm:flex-row sm:items-start gap-4 py-5">
						<div class="flex-1 min-w-0">
							<div class="flex flex-wrap gap-1 mb-2">
								{#each post.tags as tag}
									<span class="badge badge-sm badge-ghost">{tag}</span>
								{/each}
							</div>
							<h2 class="text-lg font-bold leading-snug group-hover:text-primary transition-colors mb-1">
								{post.title}
							</h2>
							<p class="text-sm text-base-content/60 line-clamp-2">{post.description}</p>
						</div>
						<div class="text-xs text-base-content/40 shrink-0 sm:text-right">
							{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
