<script lang="ts">
	let {
		img,
		alt = '',
		name,
		description,
		slug
	}: {
		img: string;
		alt: string | null;
		name: string;
		description: string;
		slug: string;
	} = $props();
</script>

<a href="/projects/{slug}" class="hover-3d">
	<!-- content -->
	<div class="card w-96 bg-base-200 shadow-sm">
		<figure class="h-48">
			<img src={img} {alt} class="h-full w-full object-cover" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{name}</h2>
			<p>
				{description}
			</p>
			<!-- <div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div> -->
		</div>
	</div>
	<!-- 8 empty divs needed for the 3D effect -->
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</a>
