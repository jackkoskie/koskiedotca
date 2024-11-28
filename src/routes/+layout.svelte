<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="navbar bg-base-300">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Jack Koskie</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li><a href="https://github.com/jackkoskie">GitHub</a></li>
			<li><a href="/contact">Contact Me</a></li>
		</ul>
	</div>
</div>

{@render children()}
