<script lang="ts">
	import { page } from '$app/stores';
</script>

<rux-global-status-bar include-icon="true" app-domain="Astro" app-name="starter">
	<ul>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
	</ul>
	<rux-clock slot="right-side" />
</rux-global-status-bar>

<style>
	ul {
		display: flex;
		list-style: none;
	}

	li {
		margin: 0 20px;
		font-size: 20px;
		color: white;
	}

	a {
		color: white;
	}
</style>
