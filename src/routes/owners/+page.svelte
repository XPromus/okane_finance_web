<script lang="ts">
    import { getAllOwners } from "$lib/api/OwnerAPI";
    import OwnerAddPage from "$lib/components/owners/OwnerAddPage.svelte";
    import OwnerEditPage from "$lib/components/owners/OwnerEditPage.svelte";
    import OwnerOverviewPage from "$lib/components/owners/OwnerOverviewPage.svelte";
    import { setContext } from "svelte";
    import type { PageData } from './$types';
    import type { GetOwnerDto } from "$lib/types/api/Owner";

    let { data }: { data: PageData } = $props();
    let owners: GetOwnerDto[] = $state(data.owners)
    
    const updateOwners = async () => {
        owners = await getAllOwners()
    }

    setContext("owners", data.owners)
</script>

<div class="w-full h-full grid grid-flow-col grid-rows-4 gap-4">
    <div class="col-span-2 row-span-4 card">
        <OwnerOverviewPage owners={owners} />
    </div>
    <div class="col-span-1 row-span-2 card">
        <OwnerAddPage {updateOwners} />
    </div>
    <div class="col-span-1 row-span-2 card">
        <OwnerEditPage owners={owners} {updateOwners} />
    </div>
</div>
