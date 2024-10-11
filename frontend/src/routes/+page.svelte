<script lang="ts">
	import { threeStore } from '$stores/threeStore';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	import { setTransitionLoader } from '$lib/stores/transitionLoaderStore';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	import { get } from 'svelte/store';
	import { linear } from 'svelte/easing';
	import Link from '../lib/components/link.svelte';

	let container: HTMLElement;

	onMount(async () => {
		setTransitionLoader(false);

		const { camera } = get(threeStore);

		if (camera) {
			camera.position.set(-10, 15, 0);
			camera.lookAt(new THREE.Vector3(0, 0, 0));

			requestAnimationFrame(() => {
				setTimeout(() => {
					const cameraTimeline = gsap.timeline({
						scrollTrigger: {
							trigger: container,
							start: 'top top',
							end: 'bottom bottom',
							scrub: true
						}
					});

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
		}
	});
</script>

<svelte:head>
	<title>Pierre FABIEN Web-Dev</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<div class="home" bind:this={container}>
	<section class="firstPage" aria-labelledby="firstPageTitle">
		<div class="textContent">
			<h1 id="firstPageTitle">After more than a year of <br /> hard work on SvelteKit</h1>
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
	</section>

	<section class="secondPage" aria-labelledby="secondPageTitle">
		<h1 id="secondPageTitle">It's time to take my<br /> place on this train</h1>
		<p>
			I hold all the passports in hand: WCAG, a11y, and a solid background in React. I bring with me
			the ability to tackle complex problems, along with an unwavering passion for learning and
			growing. The excitement of starting a greenfield project is palpable, and deep down, I am
			eager to share everything I’ve learned with those interested in SvelteKit, while continuing to
			learn myself. With experience in both aesthetic and technical fields, I’m requesting a ticket
			on this train to embark on a new adventure.
		</p>
	</section>

	<section class="thirdPage" aria-labelledby="thirdPageTitle">
		<h1 id="thirdPageTitle">Explore more about my journey</h1>
	</section>

	<section class="fourthPage" aria-labelledby="fourthPageTitle">
		<div class="textContent">
			<h1 id="fourthPageTitle">My GitHub projects that will<br /> showcase my experience:</h1>
			<ul>
				<li>
					<p>Ecommerce & SaaS boilerplate:</p>
					<div class="linkContent">
						<Link
							iconType="git"
							title="Github: Ecommerce & SaaS boilerplate"
							link="https://github.com/Pierre-FABIEN/E-com_Sveltekit-0Auth-Vercel-MongoDB"
						/>
						<Link
							iconType="live"
							title="Live: Ecommerce & SaaS boilerplate"
							link="https://e-com-sveltekit-0-auth-vercel-mongo-db.vercel.app/"
						/>
					</div>
				</li>
				<li>
					<p>Technical Test Software Engineering:</p>
					<div class="linkContent">
						<Link
							iconType="git"
							title="Github: Technical Test Software Engineering"
							link="https://github.com/Pierre-FABIEN/TEST"
						/>
						<Link
							iconType="live"
							title="Technical Test Software Engineering"
							link="https://test-sveltekit.vercel.app/"
						/>
					</div>
				</li>
				<li>
					<p>BoilerPlate SvelteKit GraphQL NodeJs and Playwright:</p>
					<Link
						iconType="git"
						title="Github: BoilerPlate SvelteKit GraphQL NodeJs and Playwright"
						link="https://github.com/Pierre-FABIEN/Sveltekit-GraphQL-NodeJS-MongoDB"
					/>
				</li>
				<li>
					<p>BoilerPlate SvelteKit APIRestful NodeJs and Playwright:</p>
					<Link
						iconType="git"
						title="Github: BoilerPlate SvelteKit APIRestful NodeJs and Playwright"
						link="https://github.com/Pierre-FABIEN/APIRestFul-Sveltekit-NodeJS-MongoDB"
					/>
				</li>
			</ul>
		</div>
	</section>
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
		color: #eb0055; /* Assurez-vous que ce contraste est suffisant avec l'arrière-plan */
		font-family: 'Georama', sans-serif;
		font-weight: 700;
	}

	h1 {
		font-size: xx-large;
	}

	.firstPage p,
	.secondPage p {
		width: 600px;
		font-weight: 200;
		text-align: justify;
		color: white; /* Vérifiez le contraste avec le fond */
		font-size: 16px;
		line-height: 150%;
	}

	.secondPage p {
		width: 300px;
	}

	.fourthPage {
		position: relative;

		.textContent {
			position: absolute;
			left: 15vw;
			top: 5vh;
			width: 500px;

			ul {
				padding: 0;
				margin: 0;

				li {
					list-style: none;
					border: 1px solid black;
					border-radius: 5px;
					margin-top: 5px;
					margin-bottom: 5px;
					padding: 5px;

					display: flex;
					justify-content: space-between;
					align-items: center;

					p {
						color: black; /* Vérifiez le contraste avec le fond */
						font-weight: 400;
					}

					.linkContent {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}
			}
		}
	}

	/* Styles de focus pour améliorer l'accessibilité */
	.link-button:focus {
		outline: 3px solid #eb0055; /* Couleur de l'outline pour le focus */
		outline-offset: 2px;
	}
</style>
