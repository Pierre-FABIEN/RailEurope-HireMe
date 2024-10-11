<script lang="ts">
	import { threeStore } from '$stores/threeStore';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { tick } from 'svelte';

	import { setTransitionLoader } from '$lib/stores/transitionLoaderStore';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	import { get } from 'svelte/store';
	import { linear } from 'svelte/easing';

	let container: HTMLElement;

	onMount(async () => {
		await tick(); // Assurez-vous que le DOM est prêt
		setTransitionLoader(false);

		const { camera } = get(threeStore);

		if (camera) {
			// Position initiale de la caméra
			camera.position.set(-10, 15, 0);
			camera.lookAt(new THREE.Vector3(0, 0, 0));

			// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
			requestAnimationFrame(() => {
				setTimeout(() => {
					// Créer une timeline pour les animations de la caméra
					const cameraTimeline = gsap.timeline({
						scrollTrigger: {
							trigger: container,
							start: 'top top',
							end: 'bottom bottom',
							scrub: true
						}
					});

					console.log('Timeline de la caméra créée:', cameraTimeline);

					// Définir les positions de la caméra dans la timeline
					cameraTimeline.to(camera.position, {
						x: 0,
						y: 15,
						z: 0,
						duration: 1,
						ease: linear
					});

					cameraTimeline.to(camera.position, {
						x: 15,
						y: 10,
						z: 0,
						duration: 1,
						ease: linear
					});

					cameraTimeline.to(camera.position, {
						x: 17,
						y: 5,
						z: 8,
						duration: 1,
						ease: linear
					});

					cameraTimeline.to(camera.position, {
						x: 8,
						y: 3,
						z: 8,
						duration: 1,
						ease: linear
					});
				}, 1000);
			});
		} else {
			console.error("La caméra n'est pas disponible.");
		}
	});
</script>

<svelte:head>
	<title>Pierre FABIEN Web-Dev</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<div class="home" bind:this={container}>
	<div class="firstPage">
		<div class="textContent">
			<h1>After more than a year of <br /> hard work on sveltekit</h1>
			<p>
				After all these tools crafted with Svelte to provide the finest browser experiences. After
				all the research to adopt the best practices and technologies surrounding SvelteKit. After
				all these CRUDs, forms, APIs, and even WebSocket and GraphQL implementations, exploring the
				most intriguing and, above all, useful solutions! After undergoing a test with the Americans
				that broadened my understanding of a SvelteKit SaaS. After all this passionate yet
				exhausting work on building a boilerplate e-commerce and SaaS platform for just €10 per
				year, designed for around 10 to 30 thousand visitors per month. It’s not over yet! Rail
				Europe has announced a position for a Frontend Engineer specializing in SvelteKit!
			</p>
		</div>
	</div>

	<div class="secondPage">
		<h1>It's time to take my<br /> place on this train</h1>
		<p>
			I hold all the passports in hand: WCAG, a11y, and a solid background in React. I bring with me
			the ability to tackle complex problems, along with an unwavering passion for learning and
			growing. The excitement of starting a greenfield project is palpable, and deep down, I am
			eager to share everything I’ve learned with those interested in SvelteKit, while continuing to
			learn myself. With experience in both aesthetic and technical fields, I’m requesting a ticket
			on this train to embark on a new adventure.
		</p>
	</div>

	<div class="thirdPage"></div>

	<div class="fourthPage">
		<h1>My GitHub projects that will<br /> showcase my experience:</h1>
		<ul>
			<li>
				<p>
					Ecommerce & SaaS boilerplate: svelte 4, Sveltekit, Tailwind, Shadcn, Superform, Zod,
					Prisma, Vercel, MongoDB, Cloundinary, 0Auth, Stripe, PWA, ThreeJs, Sitemap, ...
				</p>
				<a href="https://github.com/Pierre-FABIEN/E-com_Sveltekit-0Auth-Vercel-MongoDB">Link</a>
			</li>
			<li>
				<p>
					Technical Test Sofware Engineering: Svelte 5, Sveltekit, Tailwind, Shadcn, Superform, Zod,
					Prisma, Vercel, MongoDB
				</p>
				<a href="https://github.com/Pierre-FABIEN/TEST">Link</a>
			</li>
			<li>
				<p>BoilerPlate sveltekit GraphQL NodeJs and mongoDB Playwright</p>
				<a href="https://github.com/Pierre-FABIEN/Sveltekit-GraphQL-NodeJS-MongoDB">Link</a>
			</li>
			<li>
				<p>BoilerPlate sveltekit APIRestful NodeJs and mongoDB Playwright</p>
				<a href="https://github.com/Pierre-FABIEN/APIRestFul-Sveltekit-NodeJS-MongoDB">Link</a>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		position: absolute;
	}

	.firstPage,
	.secondPage,
	.thirdPage,
	.fourthPage {
		width: 100%;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	h1,
	p {
		color: #eb0055;
	}

	h1 {
		font-size: xx-large;
	}

	.fourthPage > h1 {
		margin-right: 45vw;
	}

	.firstPage {
		p {
			width: 600px;
			font-weight: 200;
			text-align: justify;
			color: white;
			font-size: 16px;
			line-height: 150%;
		}
	}

	.secondPage {
		p {
			width: 300px;
			font-weight: 200;
			text-align: justify;
			color: white;
			font-size: 16px;
			line-height: 150%;
		}
	}

	h1,
	p {
		font-family: 'Georama', sans-serif;
		font-weight: 700;
	}
</style>
