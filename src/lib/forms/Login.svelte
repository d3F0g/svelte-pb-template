<script lang="ts">
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import {Button} from '$lib/components/ui/button';
	import {Input} from '$lib/components/ui/input';
	import {Label} from '$lib/components/ui/label';
	import {cn} from '$lib/utils';
	import {goto} from '$app/navigation';

	let className: string | undefined | null = undefined;
	export {className as class};

	let isLoading = false;

	const goToMainPage = () => {
		goto('/');
	};
</script>

<div class={cn('grid gap-6', className)} {...$$restProps}>
	<form action="/login" method="POST">
		<div class="grid gap-4">
			<div class="grid gap-2">
				<Label class="sr-only" for="email">Email</Label>
				<Input
					id="email"
					name="email"
					placeholder="name@example.com"
					type="text"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading} />
			</div>
			<div class="grid gap-2">
				<Label class="sr-only" for="password">Password</Label>
				<Input
					id="password"
					name="password"
					placeholder="********"
					type="password"
					disabled={isLoading} />
			</div>
			<Button type="submit" disabled={isLoading}>
				{#if isLoading}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				Let's go!
			</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" />
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background px-2 text-muted-foreground"> or go back to </span>
		</div>
	</div>
	<Button variant="outline" type="button" disabled={isLoading} on:click={goToMainPage}>
		deskbud.io
	</Button>
</div>
