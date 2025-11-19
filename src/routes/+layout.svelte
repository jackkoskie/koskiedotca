<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jack Koskie</title>
</svelte:head>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<g transform="translate(24,0) scale(-1,1)">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</g>
				</svg>
			</div>
			<ul
				tabindex="-1"
				class="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
			>
				<li><a href="/#about">About Me</a></li>
				<li><a href="/projects">My Projects</a></li>
			</ul>
		</div>
		<a href="/#hero" class="btn text-2xl font-extrabold uppercase btn-ghost">Jack Koskie</a>
	</div>
	<div class="navbar-end hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/#about">About Me</a></li>
			<li><a href="/projects">My Projects</a></li>
		</ul>
	</div>
</div>

{@render children()}

<footer id="footer" class="flex min-h-[3rem] flex-row items-center justify-center bg-base-200">
	&copy; 2025 Jack&nbsp;Koskie
</footer>
