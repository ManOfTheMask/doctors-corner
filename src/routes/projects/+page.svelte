<script lang="ts">
	// Add your real projects here whenever you're ready
	const projects = [
		{
			name: "The Doctor's Corner",
			description:
				'This very site. A personal blog and portfolio built with SvelteKit, TailwindCSS, and DaisyUI. The goal is to document my journey as a dev while practicing web development.',
			tags: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'DaisyUI'],
			repo: 'https://github.com/ManOfTheMask/doctors-corner',
			live: '/',
			status: 'active'
		},
		{
			name: 'KeepQuiet',
			description:
				'KeepQuiet is a self-hostable, end-to-end encrypted messaging application. All encryption and decryption happens entirely in the browser using OpenPGP.js. The server never sees plaintext messages or private keys — it only stores ciphertext and public keys.',
			tags: ['End-to-End Encryption', 'OpenPGP.js', 'Self-Hostable', 'Messaging'],
			repo: 'https://github.com/ManOfTheMask/KeepQuiet',
			live: 'https://keepquiet.chat',
			status: 'active'
		}
	];
</script>

<svelte:head>
	<title>Projects — The Doctor's Corner</title>
	<meta name="description" content="Projects I've built or am currently working on." />
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-16">
	<div class="mb-10">
		<h1 class="text-4xl font-extrabold mb-3">Projects</h1>
		<p class="text-base-content/60">Things I've built, am building, or want to build.</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<div class="card bg-base-200 border border-base-300 flex flex-col">
				<div class="card-body flex-1 gap-3">
					<div class="flex items-start justify-between gap-2">
						<h2 class="card-title text-base leading-snug">{project.name}</h2>
						<span class="badge badge-sm shrink-0
							{project.status === 'active' ? 'badge-success' :
							 project.status === 'planned' ? 'badge-ghost' : 'badge-warning'}">
							{project.status}
						</span>
					</div>
					<p class="text-sm text-base-content/60 flex-1">{project.description}</p>
					<div class="flex flex-wrap gap-1 mt-1">
						{#each project.tags as tag}
							<span class="badge badge-sm badge-ghost">{tag}</span>
						{/each}
					</div>
				</div>
				{#if project.repo || project.live}
					<div class="card-actions px-6 pb-5 gap-2">
						{#if project.live}
							<a href={project.live} class="btn btn-primary btn-sm">Live</a>
						{/if}
						{#if project.repo}
							<a href={project.repo} target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">GitHub →</a>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
