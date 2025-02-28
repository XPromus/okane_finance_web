<script lang="ts">
    import { getAllOwners } from "$lib/api/OwnerAPI";
    import OwnerAddPage from "$lib/components/pages/owners/OwnerAddPage.svelte";
    import OwnerEditPage from "$lib/components/pages/owners/OwnerEditPage.svelte";
    import OwnerOverviewPage from "$lib/components/pages/owners/OwnerOverviewPage.svelte";
    import { setContext } from "svelte";
    import type { PageData } from './$types';
    import type { GetOwnerDto } from "$lib/types/api/Owner";

    let { data }: { data: PageData } = $props();
    let owners: GetOwnerDto[] = $state(data.owners)
    
    const updateOwners = async () => {
        owners = await getAllOwners()
    }
</script>

<div class="w-full h-full flex flex-row space-x-5">
    <div class="card basis-1/2">
        <OwnerOverviewPage owners={owners} />
    </div>
    <div class="basis-1/2 flex flex-col space-y-5">
        <div class="card basis-1/2">
            <OwnerAddPage {updateOwners} />
        </div>
        <div class="card basis-1/2">
            <OwnerEditPage owners={owners} {updateOwners} />
        </div>
    </div>
</div>
