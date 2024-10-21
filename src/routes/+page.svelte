<script lang="ts">
	import {Button} from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import BlurFade from '$lib/shared/BlurFade.svelte';
	import FlickeringGrid from '$lib/shared/FlickeringGrid.svelte';
	import Marquee from '$lib/shared/Marquee.svelte';
	import ReviewCard from '$lib/shared/ReviewCard.svelte';
	import KeyRound from 'lucide-svelte/icons/key-round';
	import Phone from 'lucide-svelte/icons/phone';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import LayoutDashboard from 'lucide-svelte/icons/layout-dashboard';
	import {version} from '$app/environment';
	import type { PageData } from './$types';

	let innerHeight: number;
	let innerWidth: number;

	const reviews = [
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: 'https://avatar.vercel.sh/jack',
		},
		{
			name: 'Jodd',
			username: '@Jodd',
			body: 'Wooww, this is what I was looking for. Great work.',
			img: 'https://avatar.vercel.sh/jill',
		},
		{
			name: 'Josiah',
			username: '@joqeewee',
			body: 'これより良いことはありません。',
			img: 'https://avatar.vercel.sh/john',
		},
		{
			name: 'pablo',
			username: '@pablo',
			body: 'Remarkable Stuff broooo. Added to my favourites.',
			img: 'https://avatar.vercel.sh/jane',
		},
		{
			name: 'Saloni',
			username: '@Saloni',
			body: 'Acche hai, Chal mera Portfolio banade.',
			img: 'https://avatar.vercel.sh/jenny',
		},
		{
			name: 'Bhai',
			username: '@Bhai',
			body: 'Svelte made easy with these components. Great work.',
			img: 'https://avatar.vercel.sh/james',
		},
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);

	let actions = [
		{icon: KeyRound, name: 'login', desc: 'Your journey begins here', route: '/login'},
		{
			icon: Phone,
			name: 'Contact Us',
			desc: 'Get an account on us!',
			route: 'https://t.me/joqeewee',
		},
		{
			icon: DollarSign,
			name: 'Donate',
			desc: 'Help make Deskbud a better app',
			route: 'https://ko-fi.com/joqeewee',
		},
	];

	export let data: PageData;
	if (data.user) {
		actions.shift()
		actions.unshift({
			icon: LayoutDashboard,
			name: 'Return to Dashboard',
			desc: 'Back to being productive!',
			route: '/v1',
		})
	}

	const members = [
		{name: 'Yong Le', role: 'CTO'},
		{name: 'James Awesome', role: 'CFO'},
		{name: 'Josiah Wong', role: 'Tech Enthusiast'},
	];
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="relative mx-auto flex h-screen w-full overflow-hidden rounded-lg bg-background">
	<FlickeringGrid
		class="absolute inset-0 z-0 size-full"
		squareSize={4}
		gridGap={6}
		color="#6B7280"
		maxOpacity={0.5}
		flickerChance={0.1}
		width={innerWidth}
		height={innerHeight}
	/>
	<div class="z-10 flex flex-col gap-6">
		<section id="header" class="p-20 pb-10">
			<BlurFade delay={0.25}>
				<h1
					class="flex items-center gap-2 text-5xl font-bold tracking-tighter sm:text-6xl xl:text-6xl/none">
					<Avatar.Root>
						<Avatar.Image src="/logo.svg" alt="Deskbud" />
						<Avatar.Fallback>DB</Avatar.Fallback>
					</Avatar.Root>
					Deskbud
				</h1>
			</BlurFade>
			<BlurFade delay={0.25 * 2}>
				<span class="my-2 text-pretty text-xl tracking-tighter sm:text-xl xl:text-2xl/none">
					An easy and intuitive CRM for everybody
				</span>
			</BlurFade>
		</section>

		<BlurFade delay={0.25 * 3}>
			<section
				id="links"
				class="grid w-screen grid-cols-1 items-end gap-10 px-20 sm:grid-cols-2 lg:grid-cols-3">
				<Card.Root class="col-span-1 h-full">
					<Card.Header>
						<Card.Title>Team Members</Card.Title>
						<Card.Description>The few who stuck it through</Card.Description>
					</Card.Header>
					<Card.Content class="grid gap-6">
						{#each members as member}
							<div class="flex items-center justify-between space-x-4">
								<div class="flex items-center space-x-4">
									<Avatar.Root>
										<Avatar.Image src="/avatars/01.png" alt={member.name} />
										<Avatar.Fallback
											>{member.name
												.split(' ')
												.map((n) => n[0])
												.join('')}</Avatar.Fallback>
									</Avatar.Root>
									<div>
										<p class="text-sm font-medium leading-none">{member.name}</p>
										<p class="text-sm text-muted-foreground">{member.role}</p>
									</div>
								</div>
							</div>
						{/each}
					</Card.Content>
				</Card.Root>
				<Card.Root class="col-span-1 flex h-full flex-col">
					<Card.Header>
						<Card.Title>Version</Card.Title>
						<Card.Description>Making it better one step at a time</Card.Description>
					</Card.Header>
					<Card.Content class="flex flex-1 items-center justify-center text-9xl font-bold">
						{version}
					</Card.Content>
				</Card.Root>
				<Card.Root class="col-span-1">
					<Card.Header>
						<Card.Title>Actions</Card.Title>
						<Card.Description>The only ones you need</Card.Description>
					</Card.Header>
					<Card.Content class="grid gap-1">
						{#each actions as action}
							<Button
								variant="ghost"
								href={action.route}
								class="-mx-2 flex h-full cursor-pointer items-start justify-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground ">
								<svelte:component this={action.icon} class="mt-px h-5 w-5" />
								<div class="space-y-1">
									<p class="text-sm font-medium capitalize leading-none">{action.name}</p>
									<p class="text-wrap text-sm text-muted-foreground">{action.desc}</p>
								</div>
							</Button>
						{/each}
					</Card.Content>
				</Card.Root>
			</section>
		</BlurFade>

		<section
			id="marquee"
			class="relative flex flex-col items-end justify-end overflow-hidden rounded-lg py-20">
			<BlurFade delay={0.25 * 4}>
				<Marquee pauseOnHover class="[--duration:20s]">
					{#each firstRow as item}
						<ReviewCard {...item} />
					{/each}
				</Marquee>
				<Marquee reverse pauseOnHover class="[--duration:20s]">
					{#each secondRow as item}
						<ReviewCard {...item} />
					{/each}
				</Marquee>
			</BlurFade>
		</section>
	</div>
</div>
