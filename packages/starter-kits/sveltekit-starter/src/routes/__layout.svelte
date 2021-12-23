<script lang="ts">
	// Import Astro's base styles
	import '../../node_modules/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
	// Define the Astro Components
	import { defineCustomElements } from '../../node_modules/@astrouxds/astro-web-components/loader/index.js';
	defineCustomElements();
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		visit <a href="https://www.astrouxds.com/">www.astrouxds.com</a> to learn how to use the Astro UXDS
	</p>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
