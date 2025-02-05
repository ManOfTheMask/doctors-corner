<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="navbar bg-base-300">
	<div class="flex-1">
	<a href="/" class="btn btn-ghost text-xl">The Doctor's Corner</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-3">
			<!--Can insert buttons here outside the menu-->
			<div class="dropdown mb-3">
				<div tabindex="0" role="button" class="btn m-1">
				  Theme
				  <svg
					width="12px"
					height="12px"
					class="inline-block h-2 w-2 fill-current opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048">
					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
				  </svg>
				</div>
				<ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
				  <li>
					<input
					  type="radio"
					  name="theme-dropdown"
					  class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					  aria-label="Default"
					  value="default" />
				  </li>
				  <li>
					<input
					  type="radio"
					  name="theme-dropdown"
					  class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					  aria-label="Retro"
					  value="retro" />
				  </li>
				  <li>
					<input
					  type="radio"
					  name="theme-dropdown"
					  class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					  aria-label="Cyberpunk"
					  value="cyberpunk" />
				  </li>
				  <li>
					<input
					  type="radio"
					  name="theme-dropdown"
					  class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					  aria-label="Valentine"
					  value="valentine" />
				  </li>
				  <li>
					<input
					  type="radio"
					  name="theme-dropdown"
					  class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					  aria-label="Aqua"
					  value="aqua" />
				  </li>
				</ul>
			  </div>
			<li>
				<details>
					<summary>Menu</summary>
						<ul class="bg-base-300 rounded-t-none p-2">
							<li><a href="/about">About</a></li>
							<li><a>Blog</a></li>
						</ul>
				</details>
			</li>
		</ul>
	</div>
</div>

{@render children()}

<footer class="bg-base-300 p-4 fixed w-full bottom-0 flex justify-center">
	<div class="container mr-1 w-fit ">
		<p class="text-center">The Doctor's Corner since 2025</p>
	</div>
</footer>