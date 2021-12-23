<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<rux-progress />
	<h1>Astro UXDS in SvelteKit!</h1>
	<p>Check out the README.md for more information on getting started</p>
	<h2>Try editing src/routes/index.svelte</h2>

	<Counter />
</section>

<style>
	section {
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
