<script lang="ts">
	import Login from '$lib/forms/Login.svelte';
	import FlickeringGrid from '$lib/shared/FlickeringGrid.svelte';

	let innerHeight: number;
	let innerWidth: number;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div
	class="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<!-- <div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);" /> -->
		<FlickeringGrid
			class="absolute inset-0 z-0 size-full"
			squareSize={4}
			gridGap={6}
			color="#6B7280"
			maxOpacity={0.5}
			flickerChance={0.1}
			width={Math.ceil(innerWidth / 2)}
			height={innerHeight} />
		<div
			class="relative z-20 text-primary flex items-center text-5xl font-bold tracking-tighter sm:text-6xl xl:text-6xl/none">
			<!-- <Command class="mr-2 h-6 w-6" /> -->
			Deskbud
		</div>
		<div class="flex h-full items-center justify-center">
			<img src="/logo.svg" alt="Deskbud" class="scale-150" />
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2 text-primary">
				<p class="text-lg">これより良いことはありません</p>
				<footer class="text-sm">It doesn't get any better than this...</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Login</h1>
				<p class="text-sm text-muted-foreground">Enter your credentials to access your account</p>
			</div>
			<Login />
			<p class="px-8 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our
				<a href="/terms" class="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</a>
				and
				<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
