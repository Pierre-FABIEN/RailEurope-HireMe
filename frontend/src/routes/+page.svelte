<script lang="ts">
	import { onMount } from 'svelte';

	import { setTransitionLoader } from '$lib/stores/transitionLoaderStore';
	import { t } from '$UITools/Translations/index.js';

	import Lines from '$components/Lines.svelte';
	import Items from '../lib/components/Items/Items.svelte';
	import Canvas3D from '../lib/components/Canvas3D.svelte';


	onMount(() => {
		setTransitionLoader(false);
	});
</script>

<svelte:head>
	<title>Pierre FABIEN Web-Dev</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<div
	class="home"
	>
<!-- 
	<p style="color: white;">{@html $t('general.language')}</p> -->
	<Canvas3D />
</div>

