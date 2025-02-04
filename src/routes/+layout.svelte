<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-zinc-800 text-white p-4">
	<div class="container mr-1 w-fit flex justify-between items-center">
	<ul class="flex space-x-4 justify-self-end">
	    <li><a href="/" class="hover:underline">Home</a></li>
	    <li><a href="/about" class="hover:underline">About</a></li>
	</ul>
	</div>
</nav>

{@render children()}

<footer class="bg-zinc-800 text-white p-4 fixed w-full bottom-0 flex justify-center">
	<div class="container mr-1 w-fit ">
		<p class="text-center">The Doctor's Corner</p>
	</div>
</footer>