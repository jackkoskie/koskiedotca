<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Need to Chat?</h1>
			<p class="py-6">
				I'd be happy to answer any questions you may have. I can best be reached via email at <a
					href="mailto:jack@koskie.ca"
					class="hover:link text-primary">jack@koskie.ca</a
				>. I do my best to respond to everything I get within 24-48 hours.
			</p>
		</div>
	</div>
</div>
