<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<h1>Ciao Svelte Society Italia</h1>

<a href="/auth/signin" class="buttonPrimary" data-sveltekit-preload-data="off">Sign in</a>

{#if $page.data}
	<p>{JSON.stringify($page.data)}</p>
{/if}
