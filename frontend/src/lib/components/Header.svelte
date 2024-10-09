<script lang="ts">
	import { gsap } from 'gsap';
	import DarkMode from '$UITools/DarkMode/index.svelte';
	import { t, locale, locales } from '$UITools/Translations/index';
	import { get } from 'svelte/store';

	import FullScreen from './FullScreen.svelte';
	import { PortfolioMenuData } from '$lib/data/data';

	import MenuIcon from '$lib/svg/MenuIcon.svelte';
	import { onMount } from 'svelte';
	import { sectionsStore } from '$stores/elementStore';
	import smoothScrollStore from '$stores/scrollStore';

	let panel: HTMLElement;
	let contentMenu: HTMLElement;
	let isMenuExpanded: boolean = false;
	let portfolioItems: any;

	const handleChangeLang = (event: Event) => {
		const currentTarget = event.currentTarget as HTMLSelectElement; // Cast ici si vous êtes sûr que c'est un élément select
		const { value } = currentTarget;

		document.cookie = `lang=${value};`;
	};

	onMount(() => {
		portfolioItems = document.querySelectorAll('.header-container article');
		if (portfolioItems) {
			gsap.set(portfolioItems, {
				duration: 0.2,
				stagger: 0.04,
				opacity: 0,
				y: '20px'
			});
		}
	});

	const handleMenu = () => {
		isMenuExpanded = !isMenuExpanded;

		if (isMenuExpanded) {
			gsap.to(panel, { height: '100%', duration: 0.25 });

			gsap.to('svg polyline', {
				rotateX: 180
			});

			gsap.to(portfolioItems, {
				stagger: 0.04,
				delay: 0.2,
				duration: 0.2,
				opacity: 1,
				y: '0px'
			});

			gsap.to(contentMenu, {
				display: 'flex',
				opacity: 1,
				visibility: 'visible'
			});

			gsap.to(contentMenu, {
				display: 'flex',
				opacity: 1,
				visibility: 'visible'
			});
		} else {
			gsap.to(panel, { height: '60px', duration: 0.25, delay: 0.2 });

			gsap.to(portfolioItems, {
				duration: 0.2,
				stagger: 0.04,
				opacity: 0,
				y: '20px'
			});

			gsap.to(contentMenu, {
				display: 'none',
				opacity: 0,
				visibility: 'hidden'
			});
		}
	};

	function scrollTo(section: HTMLElement) {
		handleMenu();

		const sectionElement = $sectionsStore.get(section);

		const smoothScroll = get(smoothScrollStore);

		console.log(isMenuExpanded);

		if (section && smoothScroll) {
			const sectionTop = sectionElement.offsetTop - 150; // Ajustement de 150px
			smoothScroll.scrollTo(0, sectionTop, 1000); // 1000 est la durée en ms
		} else {
			console.warn(`Section non trouvée ou smoothScroll non initialisé.`);
		}
	}
</script>

<header>
	<div bind:this={panel} class="header-container">
		<div bind:this={contentMenu} class="menu-container">
			<div class="portfolio-menu">
				{#each PortfolioMenuData as { id, title, content, position }}
					<article
						class={`${position}`}
						on:click={(event) => {
							scrollTo(id);
						}}
					>
						<h2>
							{#if title.length > 0}
								<span class="portfolio-menu-c">{title.charAt(0)}</span>
							{/if}
							{#if title.length > 1}
								<span class="portfolio-menu-next">{title.charAt(1)}</span>
							{/if}
							{title.substring(2)}
						</h2>
						<h4>
							{content}
						</h4>
					</article>
				{/each}
			</div>
		</div>

		<h1 class="header-branding">
			<span><b>Pierre</b> FABIEN</span>
		</h1>
		<!-- <nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname === '/transitionAPI' ? 'page' : undefined}>
					<a href="/transitionAPI">transitionAPI</a>
				</li>
			</ul>
		</nav> -->

		<div class={isMenuExpanded ? 'active linkMenu' : 'inactive linkMenu'} on:click={handleMenu}>
			<MenuIcon />
		</div>

		<div class="left-side">
			
			<!-- <label for="localeSelect">{$t('general.language')}</label>
			<select id="localeSelect" name="locale" bind:value={$locale} on:change={handleChangeLang}>
				{#each $locales as value}
					<option {value}>{$t(`lang.${value}`)}</option>
				{/each}
			</select> -->

			<DarkMode />

			<FullScreen />
		</div>
	</div>
</header>
