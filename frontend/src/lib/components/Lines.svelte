<script>
	import { windowStore } from '$stores/windowStore';
	import { onMount } from 'svelte';

	let lines = [];

	// Réactivité pour suivre les changements dans le store
	$: {
		const { scrollY } = $windowStore;
		updateElementsPosition(scrollY);
	}

	function updateElementsPosition(scrollY) {
		const distance = (scrollY - 30000) / 10;
		lines.forEach((element) => {
			if (element) {
				element.style.transform = `translateX(${distance}px)`;
				element.style.setProperty('--after', `${distance}px`);
				element.style.setProperty('--before', `${distance * 2}px`);
			}
		});
	}

	onMount(() => {
		// Mise à jour initiale des éléments line
		const { scrollY } = $windowStore;
		updateElementsPosition(scrollY);
	});
</script>

<div class="containerLines">
	<div class="background">
		{#each Array(4) as _, index (index)}
			<picture bind:this={lines[index]} class="line"></picture>
		{/each}
	</div>
</div>
