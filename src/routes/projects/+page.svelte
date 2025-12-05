<script lang="ts">
	import type { PageProps } from './$types';
	import Project from './Project.svelte';
	import placeholderImg from '$lib/assets/projects/placeholder.jpg';

	import eportfolioImg from '$lib/assets/projects/eportfolio/image.png';
	import plumbumPipingImg from '$lib/assets/projects/plumbum-piping/image.jpg';

	let { data }: PageProps = $props();
</script>

<section class="min-h-[calc(100vh-4.0001rem)]">
	<div class="container mx-auto text-center lg:text-left">
		<h1 class="text-5xl font-extrabold">My <span class="text-primary">Projects</span></h1>
		<p>Here's a little tour of some of the work I've done...</p>

		<div class="mt-7 flex flex-col flex-wrap gap-5 max-md:items-center md:flex-row">
			<Project
				name="My ePortfolio"
				img={eportfolioImg}
				alt="Jack Koskie sitting on a bench in a farm"
				description="The website you're on right now!"
				slug="eportfolio"
			/>

			<Project
				name="Plumbum Piping"
				description="A pipe relining solution for lead pipes"
				slug="plumbum-piping"
				img={plumbumPipingImg}
				alt="Image Placeholder"
			/>
		</div>
	</div>
</section>
