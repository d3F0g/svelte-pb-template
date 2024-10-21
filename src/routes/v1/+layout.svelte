<script lang="ts">
	import {page} from '$app/stores';
	import {Input} from '$lib/components/ui/input';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import {Button} from '$lib/components/ui/button';
	import ThemeSwitch from '$lib/shared/ThemeSwitch.svelte';
	import Transition from '$lib/shared/Transition.svelte';
	import {applyAction, enhance} from '$app/forms';
	import {pb} from '$lib/pocketbase';
</script>

<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<nav class="mx-6 flex items-center space-x-4 lg:space-x-6">
				<a href="/v1/dashboard" class="text-sm font-medium transition-colors hover:text-primary">
					Dashboard
				</a>

				<a
					href="/v1/contacts"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
					Contacts
				</a>
				<a
					href="/v1/library"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
					Library
				</a>
				<a
					href="/v1/settings"
					class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
					Settings
				</a>
			</nav>
			<div class="ml-auto flex items-center space-x-4">
				<Input type="search" placeholder="Search..." class="h-9 md:w-[100px] lg:w-[300px]" />
				<ThemeSwitch />
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
							<Avatar.Root class="h-8 w-8">
								<Avatar.Image src="/avatars/01.png" alt="@shadcn" />
								<Avatar.Fallback>SC</Avatar.Fallback>
							</Avatar.Root>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56" align="end">
						<DropdownMenu.Label class="font-normal">
							<div class="flex flex-col space-y-1">
								<p class="text-sm font-medium leading-none">shadcn</p>
								<p class="text-xs leading-none text-muted-foreground">m@example.com</p>
							</div>
						</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Group>
							<DropdownMenu.Item>
								Profile
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								Billing
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								Settings
							</DropdownMenu.Item>
							<DropdownMenu.Item>New Team</DropdownMenu.Item>
						</DropdownMenu.Group>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							<form
								action="/logout" 
								method="POST"
								class="w-full"
								use:enhance={() => {
									return async ({result}) => {
										pb.authStore.clear();
										await applyAction(result);
									};
								}}
							>
								<button type="submit" class="w-full">Logout</button>
							</form>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
	<Transition path={$page.url.pathname.split('/')[2]}>
		<div class="flex-1 space-y-4 p-8 pt-4">
			<slot />
		</div>
	</Transition>
</div>
