<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Hey there!</h1>
			<p class="py-6">My name is Jack, I'm a web developer, musician, and student.</p>
		</div>
	</div>
</div>

<style>
	.hero {
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('$lib/hero.jpg');
		background-size: cover;
		background-position: center;
		position: relative;
	}
</style>
