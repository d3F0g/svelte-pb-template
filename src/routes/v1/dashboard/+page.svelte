<script lang="ts">
	import Activity from 'lucide-svelte/icons/activity';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Download from 'lucide-svelte/icons/download';
	import Users from 'lucide-svelte/icons/users';

	import {Button} from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Avatar from '$lib/components/ui/avatar';
	import DateRangePicker from '$lib/shared/DateRangePicker.svelte';
	import BarChart from '$lib/shared/BarChart.svelte';
	import NewCase from '$lib/forms/NewCase.svelte';
</script>

<div class="flex items-center justify-between space-y-2">
	<h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
	<div class="flex items-center space-x-2">
		<DateRangePicker />
		<Button size="sm">
			<Download class="mr-2 h-4 w-4" />
			Download
		</Button>
		<NewCase />
	</div>
</div>
<Tabs.Root value="overview" class="space-y-4">
	<Tabs.List>
		<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
		<Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
		<Tabs.Trigger value="reports">Reports</Tabs.Trigger>
		<Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="overview" class="space-y-4">
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
					<DollarSign class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">$45,231.89</div>
					<p class="text-xs text-muted-foreground">+20.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
					<Users class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">+180.1% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Sales</Card.Title>
					<CreditCard class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-xs text-muted-foreground">+19% from last month</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
					<Card.Title class="text-sm font-medium">Active Now</Card.Title>
					<Activity class="h-4 w-4 text-muted-foreground" />
				</Card.Header>
				<Card.Content>
					<div class="text-2xl font-bold">+573</div>
					<p class="text-xs text-muted-foreground">+201 since last hour</p>
				</Card.Content>
			</Card.Root>
		</div>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
			<Card.Root class="col-span-4">
				<Card.Header>
					<Card.Title>Overview</Card.Title>
				</Card.Header>
				<Card.Content>
					<BarChart />
				</Card.Content>
			</Card.Root>
			<Card.Root class="col-span-3">
				<Card.Header>
					<Card.Title>Recent Sales</Card.Title>
					<Card.Description>You made 265 sales this month.</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="space-y-8">
						<div class="flex items-center">
							<Avatar.Root class="h-9 w-9">
								<Avatar.Image src="/avatars/01.png" alt="Avatar" />
								<Avatar.Fallback>OM</Avatar.Fallback>
							</Avatar.Root>
							<div class="ml-4 space-y-1">
								<p class="text-sm font-medium leading-none">Olivia Martin</p>
								<p class="text-sm text-muted-foreground">olivia.martin@email.com</p>
							</div>
							<div class="ml-auto font-medium">+$1,999.00</div>
						</div>
						<div class="flex items-center">
							<Avatar.Root class="flex h-9 w-9 items-center justify-center space-y-0 border">
								<Avatar.Image src="/avatars/02.png" alt="Avatar" />
								<Avatar.Fallback>JL</Avatar.Fallback>
							</Avatar.Root>
							<div class="ml-4 space-y-1">
								<p class="text-sm font-medium leading-none">Jackson Lee</p>
								<p class="text-sm text-muted-foreground">jackson.lee@email.com</p>
							</div>
							<div class="ml-auto font-medium">+$39.00</div>
						</div>
						<div class="flex items-center">
							<Avatar.Root class="h-9 w-9">
								<Avatar.Image src="/avatars/03.png" alt="Avatar" />
								<Avatar.Fallback>IN</Avatar.Fallback>
							</Avatar.Root>
							<div class="ml-4 space-y-1">
								<p class="text-sm font-medium leading-none">Isabella Nguyen</p>
								<p class="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
							</div>
							<div class="ml-auto font-medium">+$299.00</div>
						</div>
						<div class="flex items-center">
							<Avatar.Root class="h-9 w-9">
								<Avatar.Image src="/avatars/04.png" alt="Avatar" />
								<Avatar.Fallback>WK</Avatar.Fallback>
							</Avatar.Root>
							<div class="ml-4 space-y-1">
								<p class="text-sm font-medium leading-none">William Kim</p>
								<p class="text-sm text-muted-foreground">will@email.com</p>
							</div>
							<div class="ml-auto font-medium">+$99.00</div>
						</div>
						<div class="flex items-center">
							<Avatar.Root class="h-9 w-9">
								<Avatar.Image src="/avatars/05.png" alt="Avatar" />
								<Avatar.Fallback>SD</Avatar.Fallback>
							</Avatar.Root>
							<div class="ml-4 space-y-1">
								<p class="text-sm font-medium leading-none">Sofia Davis</p>
								<p class="text-sm text-muted-foreground">sofia.davis@email.com</p>
							</div>
							<div class="ml-auto font-medium">+$39.00</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</Tabs.Content>
</Tabs.Root>
