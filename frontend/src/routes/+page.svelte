<script lang="ts">
	import { threeStore } from '$stores/threeStore';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	import { setTransitionLoader } from '$lib/stores/transitionLoaderStore';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	import { get } from 'svelte/store';


	let container: HTMLElement;

	onMount(async () => {
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
						ease: "none"
					});

					cameraTimeline.to(camera.position, {
						x: 15,
						y: 10,
						z: 0,
						duration: 1,
						ease: "none"
					});

					cameraTimeline.to(camera.position, {
						x: 17,
						y: 5,
						z: 8,
						duration: 1,
						ease: "none"
					});

					cameraTimeline.to(camera.position, {
						x: 8,
						y: 3,
						z: 8,
						duration: 1,
						ease: "none"
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
		<h1>After more than a year of <br /> high-speed travel on SvelteKit</h1>
	</div>

	<div class="secondPage">
		<h1>It's time to settle down</h1>
	</div>

	<div class="thirdPage"></div>

	<div class="fourthPage">
		<h1>
			And enjoy all these achievements<br /> to share them with the world,<br /> with Rail Europe!
		</h1>
	</div>
</div>
