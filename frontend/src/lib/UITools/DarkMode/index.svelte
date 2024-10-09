<script lang="ts">
	import { onMount } from 'svelte';
	import { localStorageStore } from '$stores/localStorageStore';
	import Light from '$lib/svg/Light.svelte';

	const darkMode = localStorageStore('darkMode', false);

	onMount(() => {
		// Ce code sera exécuté uniquement côté client
		const theme = $darkMode ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);

		// Mettre à jour lorsque le store change
		darkMode.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
		});
	});

	function toggleDarkMode() {
		$darkMode = !$darkMode;
	}
</script>

<button class="handleClass" on:click={toggleDarkMode}>
	<Light fill={'#1966cb'} active={$darkMode} />
</button>

<style>
	.handleClass {
		outline: none;
		border: none;
		background: transparent;
	}
</style>
