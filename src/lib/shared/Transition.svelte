<script lang="ts">
	import {fly} from 'svelte/transition';

	export let path: string;
</script>

{#key path}
	<div in:fly|global={{x: -50, duration: 300}}>
		<slot />
	</div>
{/key}
