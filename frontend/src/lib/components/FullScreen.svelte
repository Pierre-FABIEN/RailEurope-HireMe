<script lang="ts">
	import IconFullScreen from '$lib/svg/IconFullScreen.svelte';
	import { onMount } from 'svelte';

	let active = false;

	onMount(() => {
		// Ecouteur pour les changements d'état du mode plein écran
		function handleFullscreenChange() {
			// Mise à jour de `active` en fonction de l'état du mode plein écran
			active = !!document.fullscreenElement || !!document.webkitFullscreenElement;
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

		// Nettoyage lors de la destruction du composant
		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
			document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
		};
	});

	function toggleFullScreen(): void {
		let docElm = document.documentElement;

		if (!document.fullscreenElement && !document.webkitFullscreenElement) {
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			} else if (docElm.webkitRequestFullscreen) {
				docElm.webkitRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
	}
</script>

<button class="handleClass" on:click={toggleFullScreen}>
	<IconFullScreen fill="#1966cb" {active} />
</button>
