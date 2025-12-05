<script lang="ts">
	import ganttChart from '$lib/assets/projects/plumbum-piping/gantt.png';
	import prototype1a from '$lib/assets/projects/plumbum-piping/prototype1a.jpg';
	import prototype1b from '$lib/assets/projects/plumbum-piping/prototype1b.jpg';
	import prototype2 from '$lib/assets/projects/plumbum-piping/prototype2.png';
	import prototype3a from '$lib/assets/projects/plumbum-piping/prototype3a.jpg';
	import prototype3b from '$lib/assets/projects/plumbum-piping/prototype3b.jpg';
	import csketch from '$lib/assets/projects/plumbum-piping/csketch.png';
</script>

<section class="bg-base-200 pb-15">
	<div class="container mx-auto min-h-[calc(100vh-4.0001rem)] pt-5">
		<div class="mt-5 flex flex-row items-baseline gap-3">
			<h1 class="text-4xl font-extrabold">Plumbum Piping</h1>
		</div>
		<div class="divider mt-0"></div>
		<div
			class="mx-auto prose mt-10 prose-p:text-justify prose-a:transition-colors prose-a:hover:text-accent prose-blockquote:border-accent prose-figcaption:mx-auto prose-figcaption:text-center prose-strong:text-accent prose-li:marker:text-accent prose-img:mx-auto"
		>
			<h1>What's the problem?</h1>
			<p>
				As a part of my APSC 169 class, myself along with my 3 other group members were presented a
				number of challenges for which we were to tackle one of. My group selected a challenge from
				the AquaHacking Binational engineering design competition which surrounds lead
				contamination:
			</p>
			<blockquote class="">
				Design technology solutions for the effective detection of lead service lines by pioneering
				remote sensing techniques for accurate lead infrastructure identification and developing
				safe, innovative methods for the disposal and replacement of lead pipes, ensuring the
				protection of public health and the environment.
			</blockquote>
			<p>
				Through research into the current situation surrounding lead contamination in Canada, we
				learned:
			</p>
			<ul>
				<li>
					Many older areas of Canada still have lead pipes due to the large expense involved in
					their replacement.
				</li>
				<li>
					Current methods for dealing with issues stemming from lead pipes all involve complete pipe
					replacement.
				</li>
				<li>
					Lead pipes contaminate both the water flowing through them as well as the soil and
					environment surrounding them. This raises the environmental impact as an additional avenue
					to tackle with our solution.
				</li>
			</ul>
			<h1>Design Goals</h1>
			<p>
				With these points in mind, we challenged ourselves to design a solution to this problem
				that:
			</p>
			<ul>
				<li>
					reliably reduces or eliminates lead in water so it is safe for consumption uses materials
					and technology
				</li>
				<li>
					that are already widely available can be procured in required quantities within a
					realistic timeframe
				</li>
				<li>
					to avoid prolonged exposure is easily transported and installed over a large area is low
					cost so
				</li>
				<li>
					it can be deployed affordably by residents or governments is environmentally sustainable —
					i.e.
				</li>
				<li>does not create new environmental issues while solving the lead problem</li>
			</ul>
			<h1>Project Organization</h1>
			<p>
				To ensure that we utilize our time as efficiently as possible throughout this project, it
				was essential that we stayed organized. To help manage this, I created a Gantt chart and
				used it to identify critical tasks that needed to be prioritized to ensure this project
				would be completed to the required schedule prescribe by our course.
			</p>
			<figure>
				<img
					src={ganttChart}
					alt="Gantt chart outlining tasks for the completion of design project"
					class="max-h-75"
				/>
				<figcaption>
					Figure 1: Gantt chart outlining tasks for the completion of design project
				</figcaption>
			</figure>
			<p>
				This was my first exposure to work breakdown structures and gantt charts. In order to create
				this gantt chart, I used <a href="https://www.ganttproject.biz/">GanttProject</a>; however,
				I found it fairly unfriendly to use and later used
				<a href="https://en.wikipedia.org/wiki/Microsoft_Project">Microsoft Project</a> to create the
				second Gantt chart that was required later in the project.
			</p>
			<h1>Ideation</h1>
			<p>
				First, as a part of our ideation process, we initially followed the C-Sketch method to
				create various drawings of potential solutions. From those drawings, we discussed the merits
				of the various solutions and created a list of potential ideas to pursue. That list was then
				grouped into broader ideas which we then researched further to determine their feasibility.
				The list was then narrowed to 6 potentially promising concepts that would be taken forward
				to the next stage.
			</p>
			<figure>
				<img src={csketch} alt="" />
				<figcaption>
					Figure 2: External sheath with filter solution conceptualized during C-Sketch
				</figcaption>
			</figure>
			<h1>Concept Selection</h1>
			<p>
				To help us narrow down our ideas, we eliminated less feasible solutions using two methods,
				ranking and scoring. The solutions were ranked using a variety of voting methods to
				qualitatively determine the top 4 solutions. From there, the solution we would take forward
				to the rest of the project was determined quantitatively by using a weighted design matrix
				to score the solutions against our evaluation criteria.
			</p>
			<p>
				This processed produced the initial version of what would eventually become <strong
					>Plumbum Piping</strong
				>. The concept was an inflatable pipe liner that could be installed into the inside of a
				pipe to prevent the contact of the drinking water with the lead pipes ensuring there is no
				contamination.
			</p>
			<h1>Iteration</h1>
			<p>
				Through research as a part of our material selection, we realized a critical flaw that
				required us to rethink a portion of the solution. In our original design, the intention was
				to utilize the water flowing through the pipe to inflate the liner. Based on standards for
				piping, we decided it would be best to use a fibreglass liner with a silicone based resin.
				Unfortunately this creates a major issue with our planned deployment method; while the resin
				cures, it must stay dry; contact with water would prevent it from curing.
			</p>
			<p>To counteract this, we had two choices:</p>
			<ol>
				<li>Change the material of the liner such that it will not be affected by the water</li>
				<li>
					Change the deployment method to something that will not disrupt the curing of the resin
				</li>
			</ol>
			<p>
				We decided to go with option 2. Instead of using the water to inflate the liner, large fans
				would be used to utilize air pressure to inflate the liner. This approach came with an
				unexpected benefit; not only did it not disrupt the curing process, it would speed up the
				curing process thereby shortening overall deployment time.
			</p>
			<h1>Prototyping</h1>
			<p>
				To validate our solution, I developed and tested 3 prototypes to asses a variety of risks.
				These prototypes were developed before the pivot to air based inflation; however, many still
				remain applicable and continue to address potential risks
			</p>
			<h2>Prototype 1</h2>
			<p>
				During the deployment of the liner, the end needs to be closed in order to maintain air
				pressure and not have air pass through the liner before it is fully deployed; however, once
				it is fully inflated, the end needs to be able to be opened ideally without the need to dig
				another access hole. To solve this, I designed a system that would allow the end to be
				opened by pulling on a rope.
			</p>
			<figure>
				<img src={prototype1b} alt="" />
				<figcaption>Figure 3: Prototype 1</figcaption>
			</figure>
			<p>
				This prototype was constructed from 2 parts: a balloon animal type balloon and a piece of
				string. The balloon had its end removed in order to represent the liner. The string was
				inserted through the balloon and then tied in a slip knot such that pulling on the string
				would release the knot. By inflating the balloon then pulling on the string, I was able to
				successfully demonstrate the mechanism working as expected.
			</p>
			<figure>
				<img src={prototype1a} alt="" />
				<figcaption>Figure 4: Prototype 1 release mechanism</figcaption>
			</figure>
			<h2>Prototype 2</h2>
			<p>
				The second prototype was originally going to be a physical prototype demonstrating the
				systems ability to deal with small punctures to the liner material during inflation.
				Unfortunately, I was unable to successfully inflate a balloon with a small puncture without
				the balloon tearing.
			</p>
			<p>
				Because of this, this prototype was pivoted to a virtual prototype hypothesizing the liners
				ability to handle small leaks. This prototype unfortunately only applies to a system using a
				liquid for inflation rather than a gas. Despite its inapplicability to the final product, it
				was an important stepping stone in the process and for that reason I have included the
				diagram below.
			</p>
			<figure>
				<img src={prototype2} alt="" />
				<figcaption>Figure 5: Prototype 2 diagram</figcaption>
			</figure>
			<h2>Prototype 3</h2>
			<p>
				As the pipes that the liners are being installed in are often quite old and may be in
				varying condition, it was important to us that it would be able to handle being inserted
				into pipes in a variety of conditions. For this, I constructed an example of a pipe our of
				paper. I made a hole in the paper pipe and continued to increase the size of the hole until
				the pipe was no longer able to inflate properly.
			</p>
			<figure>
				<img src={prototype3a} alt="" class="max-h-50" />
				<figcaption>Figure 6: Significant bulging at point of damage due to pressure</figcaption>
			</figure>
			<figure>
				<img src={prototype3b} alt="" class="max-h-50" />
				<figcaption>
					Figure 7: Prototype 3 showing area of damage being too large for proper inflation
				</figcaption>
			</figure>
			<p>
				This prototype provided us insight into potential stresses on the liner due to a damaged
				pipe allowing us to further confirm our material choices.
			</p>
			<h1>What's next?</h1>
			<p>
				Overall the project was a success. We were able to conceptualize a solution to a problem
				that is affecting thousands of Canadians. Unfortunately due to time, budget, and current
				skill constraints, we were unable to take this project further. This project allowed us to
				become familiar with the engineering design process and learn how it can help teams to
				design better products more efficiently.
			</p>
		</div>
	</div>
</section>
