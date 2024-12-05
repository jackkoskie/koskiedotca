<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let images = ['cg-sunset.jpg', 'maple-lake.jpg', 'ropes-course.jpg'];

	let image = `/src/lib/images/${images[Math.floor(Math.random() * images.length)]}`;
</script>

<div style="--url:{image}"></div>
<div
	class="hero relative min-h-[calc(100vh-4.22rem)] bg-base-200 bg-cover bg-center"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('{image}');"
>
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Need to Chat?</h1>
			<p class="py-6">
				I'd be happy to answer any questions you may have. I can best be reached via email at <a
					href="mailto:jack@koskie.ca"
					class="text-primary hover:link">jack@koskie.ca</a
				>. I do my best to respond to everything I get within 24-48 hours.
			</p>
		</div>
	</div>
</div>

<!-- <style>
	.hero {
		
		background-size: cover;
		background-position: center;
		position: relative;
	}
</style> -->
