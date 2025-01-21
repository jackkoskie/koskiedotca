<script lang="ts">
	import type { PageData } from './$types';
	import clock from '$lib/images/utilities/clock.png';
	import groups from '$lib/images/utilities/groups.png';
	import SEO from '$lib/components/SEO.svelte';

	let { data }: { data: PageData } = $props();
</script>

<SEO
	siteName="Jack Koskie"
	description="Here are some of the utilities I have made. Check them out!"
	url="https://koskie.ca/utilities"
	pageName="Utilities"
/>

<div class="container mx-auto min-h-[calc(100vh-4.22rem)]">
	<div class="w-full items-center pt-5">
		<h1 class="text-3xl font-semibold">My Utilities</h1>
	</div>
	<div class="divider"></div>
	<p>
		Sometimes, I'll be looking for a tool I need but can't seem to find anything that fits what I'm
		looking for. Or, I'll come accross something that is what I'm looking for but it's either full
		of ads or just not 100% what I want. This is a collection of tools I've made to replace those
		annoyances. Everything here is open sourced and the individual github links can be found within
		each utility.
	</p>
	<p>Enjoy!</p>
	<div class="mt-14 flex flex-wrap gap-5">
		<a href="https://clock.koskie.ca"
			><div class="card card-compact w-96 bg-base-300 shadow-xl">
				<figure>
					<img src={clock} alt="clock.koskie.ca Screenshot" class="w-[92.5%] rounded-3xl py-3" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Clock</h2>
					<p>A simple clock with a number of customisations</p>
				</div>
			</div></a
		>
		<a href="https://groups.koskie.ca"
			><div class="card card-compact w-96 bg-base-300 shadow-xl">
				<figure>
					<img src={groups} alt="groups.koskie.ca Screenshot" class="w-[92.5%] rounded-3xl py-3" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Groups</h2>
					<p>A utility for making random groups and selecting random individuals</p>
				</div>
			</div></a
		>
	</div>
</div>
