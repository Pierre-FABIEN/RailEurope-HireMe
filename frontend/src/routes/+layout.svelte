<script lang="ts">
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	import App from '$lib/js/index';
	import { registerServiceWorker } from '$UITools/serviceWorker';

	import Loader from '$UITools/InitialLoader/index.svelte';
	import SmoothScroller from '$UITools/SmoothScroller/index.svelte';

	import {
		firstLoadComplete,
		loadingStates,
		setFirstOpen,
		setRessourceToValide
	} from '$lib/stores/initialLoaderStore';

	import Canvas3D from '../lib/components/Canvas3D.svelte';

	onNavigate(async (navigation) => {
		if (!document.startViewTransition) return;

		//console.log("1. Capture de l'état actuel du DOM");

		await new Promise<void>((resolve) => {
			document.startViewTransition(async () => {
				resolve();
			});
		});
	});

	onMount(async () => {
		new App();
		registerServiceWorker();
		setFirstOpen(true);
		setRessourceToValide(true);
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width" />
	<link rel="manifest" href="/pwa/manifest.webmanifest" />
	<meta name="theme-color" content="#4285f4" />
</svelte:head>

{#if !$firstLoadComplete}
	<Loader />
{/if}

<Canvas3D />

<SmoothScroller>
	<main>
		<slot />
	</main>
</SmoothScroller>

<style lang="scss" global>
	body {
		margin: 0;
		padding: 0;
		overflow-x: hidden !important;
		font-family: 'Lato', sans-serif;
		transform-style: preserve-3d;
		image-rendering: smooth;

		max-width: 100vw;
		max-height: 100vh;
		overflow: hidden;
	}

	.scroll-content {
		min-height: 100vh;
	}

	.app {
		width: 100%;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
		position: relative;
		overflow: hidden; //cursor: none;
	}
</style>
