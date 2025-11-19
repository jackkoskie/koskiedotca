<script lang="ts">
	import { page } from '$app/state';
</script>

<section
	class="flex min-h-[calc(100vh-4.0001rem)] w-full flex-col items-center justify-center gap-5"
>
	<h1 class="text-8xl font-extrabold text-primary">{page.status}</h1>
	<p class="text-2xl font-bold">{page.error?.message}</p>
	<a href="/" class="btn btn-secondary">Go Home</a>
</section>
