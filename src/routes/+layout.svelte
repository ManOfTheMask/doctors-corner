<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' }
	];

	const themes = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'cupcake', label: 'Cupcake' },
		{ value: 'bumblebee', label: 'Bumblebee' },
		{ value: 'emerald', label: 'Emerald' },
		{ value: 'corporate', label: 'Corporate' },
		{ value: 'synthwave', label: 'Synthwave' },
		{ value: 'retro', label: 'Retro' },
		{ value: 'cyberpunk', label: 'Cyberpunk' },
		{ value: 'valentine', label: 'Valentine' },
		{ value: 'halloween', label: 'Halloween' },
		{ value: 'garden', label: 'Garden' },
		{ value: 'forest', label: 'Forest' },
		{ value: 'aqua', label: 'Aqua' },
		{ value: 'lofi', label: 'Lo-Fi' },
		{ value: 'pastel', label: 'Pastel' },
		{ value: 'fantasy', label: 'Fantasy' },
		{ value: 'wireframe', label: 'Wireframe' },
		{ value: 'black', label: 'Black' },
		{ value: 'luxury', label: 'Luxury' },
		{ value: 'dracula', label: 'Dracula' },
		{ value: 'cmyk', label: 'CMYK' },
		{ value: 'autumn', label: 'Autumn' },
		{ value: 'business', label: 'Business' },
		{ value: 'acid', label: 'Acid' },
		{ value: 'lemonade', label: 'Lemonade' },
		{ value: 'night', label: 'Night' },
		{ value: 'coffee', label: 'Coffee' },
		{ value: 'winter', label: 'Winter' },
		{ value: 'dim', label: 'Dim' },
		{ value: 'nord', label: 'Nord' },
		{ value: 'sunset', label: 'Sunset' },
	];

	let currentTheme = $state('dark');

	$effect(() => {
		const saved = localStorage.getItem('theme');
		if (saved && themes.some((t) => t.value === saved)) {
			currentTheme = saved;
		}
	});

	function setTheme(value: string) {
		currentTheme = value;
		localStorage.setItem('theme', value);
		// close dropdown by blurring the active element
		(document.activeElement as HTMLElement)?.blur();
	}
</script>

<div data-theme={currentTheme} class="min-h-screen flex flex-col">
	<!-- Navbar -->
	<nav class="navbar bg-base-200 border-b border-base-300 px-4 lg:px-8 sticky top-0 z-50 shadow-sm">
		<div class="navbar-start">
			<a href="/" class="flex items-center gap-2 font-bold text-lg tracking-tight text-primary hover:opacity-80 transition-opacity">
				<img src="/image.png" alt="logo" class="h-8 w-8 object-contain" />
				The Doctor's Corner
			</a>
		</div>

		<!-- Desktop nav -->
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal gap-1">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="rounded-lg font-medium transition-colors {page.url.pathname === link.href || (page.url.pathname.startsWith(link.href) && link.href !== '/') ? 'bg-primary text-primary-content' : 'hover:bg-base-300'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="navbar-end gap-2">
			<!-- Theme picker -->
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-sm btn-ghost gap-1" aria-label="Change theme">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
					</svg>
					<span class="hidden sm:inline text-xs">Theme</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
				<ul class="dropdown-content bg-base-200 border border-base-300 rounded-box z-[99] w-48 p-2 shadow-xl mt-1 flex flex-col gap-0.5 max-h-80 overflow-y-auto">
					{#each themes as theme}
						<li>
							<button
								class="btn btn-sm btn-block justify-start font-normal {currentTheme === theme.value ? 'btn-primary' : 'btn-ghost'}"
								onclick={() => setTheme(theme.value)}
							>
								{theme.label}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Mobile hamburger -->
			<div class="dropdown dropdown-end lg:hidden">
				<div tabindex="0" role="button" class="btn btn-sm btn-ghost" aria-label="Open menu">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</div>
				<ul class="dropdown-content menu bg-base-200 border border-base-300 rounded-box z-[99] w-40 p-2 shadow-xl mt-1">
					{#each navLinks as link}
						<li><a href={link.href} class="font-medium">{link.label}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>

	<!-- Page content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-base-200 border-t border-base-300 mt-16">
		<div class="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
			<div class="flex items-center gap-2 font-semibold text-primary">
				<img src="/image.png" alt="logo" class="h-6 w-6 object-contain" /> The Doctor's Corner
			</div>
			<p class="text-sm text-base-content/60">Built with SvelteKit &amp; DaisyUI · Since 2025</p>
			<div class="flex gap-4 text-sm">
				{#each navLinks.slice(1) as link}
					<a href={link.href} class="text-base-content/60 hover:text-primary transition-colors">{link.label}</a>
				{/each}
			</div>
		</div>
	</footer>
</div>