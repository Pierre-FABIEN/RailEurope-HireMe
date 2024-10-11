<script>
	import Link from './Link.svelte';

	export let title;
	export let githubLink;
	export let liveLink = null;
	export let liveTitle = 'Live version';
</script>

<li>
	<p>{title}</p>
	<div class="linkContent">
		<Link iconType="git" title={`Github: ${title}`} link={githubLink} />
		{#if liveLink}
			<Link iconType="live" title={liveTitle} link={liveLink} />
		{/if}
	</div>
</li>

<style lang="scss">
	.linkContent {
		display: flex;
		gap: 1rem;
	}

	li {
		list-style: none;
		border-radius: 5px;
		margin-top: 5px;
		margin-bottom: 5px;
		padding: 10px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		//background: linear-gradient(to bottom right, #f72a75, #b20041);

		/* Ombre portée */
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

		transition:
			transform 0.3s,
			box-shadow 0.3s; /* Transition pour les effets au survol */

		p {
			color: black;
			font-weight: 400;
		}

		.linkContent {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
