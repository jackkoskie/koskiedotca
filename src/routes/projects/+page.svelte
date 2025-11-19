<script lang="ts">
	import type { PageProps } from './$types';
	import Project from './Project.svelte';
	import eportfolioImg from '$lib/assets/projects/eportfolio/image.png';

	let { data }: PageProps = $props();
</script>

<section class="min-h-[calc(100vh-4.0001rem)]">
	<div class="container mx-auto text-center md:text-left">
		<h1 class="text-5xl font-extrabold">My <span class="text-primary">Projects</span></h1>
		<p>Here's a little tour of some of the work I've done...</p>

		<div class="mt-7 flex flex-row gap-5">
			<Project
				name="My ePortfolio"
				img={eportfolioImg}
				alt="Jack Koskie sitting on a bench in a farm"
				description="The website you're on right now!"
				slug="eportfolio"
			/>
		</div>
	</div>
</section>
