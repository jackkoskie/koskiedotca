<script>
	import Navbar from './Navbar.svelte';
</script>

<section id="hero">
	<div class="container">
		<div class="d-flex flex-column justify-content-center" id="hero-text">
			<h1 class="text-white">Hey, I'm Jack!</h1>
			<h3 class="text-white fw-lighter col-md-6">
				A highschool student, web developer, drone photographer, musician and more!
			</h3>
		</div>
	</div>
</section>

<style>
	#hero {
		background-image: linear-gradient(rgba(0, 0, 0, 0.473), rgba(0, 0, 0, 0.473)),
			url('$lib/assets/hero.jpg');
		background-size: cover;
		background-position: center;
		height: 100vh;
		width: 100%;
	}

	#hero-text {
		height: 100vh;
	}

	#hero-text h1 {
		font-size: 4rem;
	}
</style>
