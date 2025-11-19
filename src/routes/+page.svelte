<section id="hero">
	<div
		class="container mx-auto flex min-h-[calc(100vh-4.0001rem)] flex-col gap-5 py-5 lg:justify-center"
	>
		<h1 class="text-8xl font-extrabold">
			Hey there,<br />I'm <span class="text-primary">Jack</span>!
		</h1>
		<h2 class="text-3xl italic">
			Let's do something <span class="font-bold text-accent">amazing</span>...
		</h2>
		<div class="flex flex-row gap-3">
			<a href="/#about" class="btn bg-base-100 btn-lg">About Me</a>
			<a href="/projects" class="btn bg-base-100 btn-lg">My Projects</a>
		</div>
	</div>
</section>

<section class="bg-accent text-accent-content" id="reflection">
	<div class="container mx-auto flex flex-row items-center justify-center py-3">
		<a class="text-lg font-bold hover:link" href="/apsc169">Read my reflection on APSC169</a>
	</div>
</section>

<section id="about" class="min-h-screen">
	<div class="container mx-auto flex flex-col py-15 lg:flex-row-reverse">
		<h1 class="min-w-[30rem] text-6xl font-extrabold max-lg:mx-5 lg:ms-auto lg:text-right">
			Here's a little bit <span class="text-primary">about me</span>
		</h1>
		<p class="text-justify text-xl font-light max-lg:mx-5 lg:mt-20">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum odio doloremque quas dolorem,
			harum quos similique fugit deserunt impedit autem? Placeat, iusto voluptas necessitatibus
			provident culpa id dolores tempore sunt.
		</p>
	</div>
	<div class="container mx-auto flex items-center justify-center">
		<a href="/projects" class="btn mx-auto btn-accent">See My Projects</a>
	</div>
</section>

<style>
	#hero {
		background-image:
			linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('$lib/assets/hero.jpg');
		background-size: cover;
		background-position: center;
		position: relative;
	}
</style>
