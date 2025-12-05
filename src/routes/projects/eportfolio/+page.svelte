<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="bg-base-200">
	<div class="container mx-auto min-h-[calc(100vh-4.0001rem)] pt-5">
		<div class="flex flex-row items-baseline gap-3">
			<h1 class="text-4xl font-extrabold">ePortfolio</h1>
			<a href="https://koskie.ca" target="_blank" class="link transition-colors hover:text-primary"
				>koskie.ca</a
			>
		</div>
		<div class="divider mt-0"></div>
		<p>
			Unfortunately, I haven't had the time to document this project properly yet. You can check out
			my other projects <a href="/projects" class="link transition-colors hover:text-primary"
				>here</a
			>!
		</p>
	</div>
</section>
