<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="navbar bg-base-300">
	<div class="flex-1">
	<a href="/" class="btn btn-ghost text-xl">The Doctor's Corner</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<!--Can insert buttons here outside the menu-->
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