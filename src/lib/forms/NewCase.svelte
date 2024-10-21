<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import {Separator} from "$lib/components/ui/separator";
	import * as Sheet from "$lib/components/ui/sheet/index";
    import Plus from 'lucide-svelte/icons/plus'

</script>


<Sheet.Root>
    <Sheet.Trigger asChild let:builder>
        <Button size='sm' builders={[builder]}>
            <Plus class="mr-2 h-4 w-4"/>
            New Case
        </Button>
    </Sheet.Trigger>
    <Sheet.Content>
        <Sheet.Header>
            <Sheet.Title>New Case</Sheet.Title>
            <Sheet.Description>Fill in the following to create a new case</Sheet.Description>
        </Sheet.Header>
        <Separator class='my-4'/>
        
    </Sheet.Content>
</Sheet.Root>