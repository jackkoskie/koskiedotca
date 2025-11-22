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
		<a class="text-lg font-bold hover:link" href="/apsc169">Read my reflection on APSC 169</a>
	</div>
</section>

<section id="about" class="min-h-screen">
	<div class="container mx-auto flex flex-col py-15 xl:flex-row-reverse">
		<h1 class="mb-6 min-w-[30rem] text-6xl font-extrabold max-xl:mx-5 xl:text-right 2xl:ms-auto">
			Here's a little bit <span class="text-primary">about me</span>
		</h1>
		<div class="flex flex-col gap-3 text-justify text-xl font-light max-xl:mx-5 xl:mt-20">
			<p>
				Hey there! My name is Jack, I'm from Ottawa, Ontario, and am a 1st year engineering student
				at UBC Okanagan who loves to build things and solve problems. I chose to study engineering
				as it gives me a way to exercise my creativity outside of traditional art forms, while also
				allowing me to make a tangible impact on the world around me.
			</p>
			<p>
				Much of my free time is spent programming, specifically in web development. Coding as a
				skill has opened many doors for me as a new outlet for me to make things while requiring
				very little resources therefore allowing me to make things unrestricted. I've also had the
				opportunity this year to join the <a
					href="https://ubcoaerospace.ca"
					class="link transition-colors hover:text-primary">UBCO Aerospace</a
				>
				<a href="https://ubcoaerospace.ca/uav/" class="link transition-colors hover:text-primary"
					>UAV Team</a
				>
				where write software for our drone to autonomously perform various tasks to compete at the
				<a
					href="https://www.aerialevolution.ca/annual-student-competition/"
					class="link transition-colors hover:text-primary"
					>Aerial Evolution Association of Canada's National Student Unmanned Aircraft Competition</a
				> in May of 2026.
			</p>
			<p>
				My experiences have helped me develop strong skill in Python, JavaScript and Typescript,
				along with communication, teamwork and group coordination. Iam working on growing my skills
				in CAD and ideation as I move through my degree. I am especially interested in software and
				hardware design, along with robotics and large scale computing like datacenters leading me
				to likely specialize in Computer Engineering at the end of this academic year.
			</p>
			<p>
				Outside of engineering I stay active through running, climbing, and sailing. Canoe camping
				and skiing are other activities I love to do when I get the chance.
			</p>
			<p>
				Want to explore some of my work? Check out my <a
					href="/projects"
					class="link transition-colors hover:text-primary">projects page</a
				>. Want to connect? Send my an email at
				<a href="mailto:jack@koskie.ca" class="link transition-colors hover:text-primary"
					>jack@koskie.ca</a
				>
			</p>
		</div>
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
