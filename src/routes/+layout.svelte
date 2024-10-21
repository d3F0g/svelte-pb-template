<script lang="ts">
	import {page} from '$app/stores';
	import {ModeWatcher} from 'mode-watcher';
	import '../app.css';
	import Transition from '$lib/shared/Transition.svelte';
</script>

<ModeWatcher />

<Transition path={$page.url.pathname.split('/')[1]}>
	<slot />
</Transition>
