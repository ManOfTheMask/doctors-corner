<svelte:head>
	<title>About — The Doctor's Corner</title>
	<meta name="description" content="A bit about the developer behind The Doctor's Corner." />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-16">
	<!-- Header -->
	<div class="mb-12 text-center">
		<div class="avatar mb-4">
			<div class="rounded-full w-20 overflow-hidden">
				<img src="/image.png" alt="logo" class="h-20 w-20 object-cover" />
			</div>
		</div>
		<h1 class="text-4xl font-extrabold mb-3">About Me</h1>
		<p class="text-base-content/60 text-lg max-w-md mx-auto">
			Developer. Learner. Blogger. Building things and writing about it.
		</p>
	</div>

	<!-- Cards -->
	<div class="space-y-6">
		<div class="card bg-base-200 border border-base-300">
			<div class="card-body">
				<h2 class="card-title text-lg">🤔 What is this site?</h2>
				<p class="text-base-content/70">
					The Doctor's Corner is my personal website, blog, and portfolio all in one. I use it to document my
					journey as a developer, share what I'm learning, and practice my web dev skills. The site itself
					<em>is</em> the project.
				</p>
			</div>
		</div>

		<div class="card bg-base-200 border border-base-300">
			<div class="card-body">
				<h2 class="card-title text-lg">🔧 What is this site built with?</h2>
				<p class="text-base-content/70 mb-4">A deliberately minimal stack — just enough to do the job well.</p>
				<div class="flex flex-wrap gap-2">
					{#each ['SvelteKit', 'TypeScript', 'TailwindCSS', 'DaisyUI', 'Vite'] as tech}
						<span class="badge badge-primary badge-outline">{tech}</span>
					{/each}
				</div>
			</div>
		</div>

		<div class="card bg-base-200 border border-base-300">
			<div class="card-body">
				<h2 class="card-title text-lg">💻 Languages I Know</h2>
				<p class="text-base-content/70 mb-4">In order from most to least comfortable:</p>
				<ol class="space-y-2">
					{#each [
						{ lang: 'Python', note: 'My first love. Scripting, automation, backend.' },
						{ lang: 'JavaScript / TypeScript', note: 'Svelte, React, Express.js.' },
						{ lang: 'Java', note: 'OOP fundamentals and backend work. — a little rusty.' },
						{ lang: 'Go', note: 'Fast and simple — still learning.' },
						{ lang: 'Bash', note: 'Scripting and automation — scratching the surface.' }
					] as item, i}
						<li class="flex gap-3 items-start">
							<span class="badge badge-sm badge-ghost font-mono shrink-0 mt-0.5">{i + 1}</span>
							<div>
								<span class="font-semibold">{item.lang}</span>
								<span class="text-base-content/50 text-sm ml-2">{item.note}</span>
							</div>
						</li>
					{/each}
				</ol>
			</div>
		</div>

		<div class="card bg-base-200 border border-base-300">
			<div class="card-body">
				<h2 class="card-title text-lg">📖 What I Write About</h2>
				<p class="text-base-content/70">
					Projects I'm working on, tools I'm trying, mistakes I made (and how I fixed them), and the occasional
					opinion on tech. Not always polished — that's the point.
				</p>
				<div class="card-actions mt-2">
					<a href="/blog" class="btn btn-primary btn-sm">Read the Blog</a>
				</div>
			</div>
		</div>
	</div>
</div>