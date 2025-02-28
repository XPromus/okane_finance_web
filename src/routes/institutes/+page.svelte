<script lang="ts">
    import { getAllInstitutes } from "$lib/api/InstitutesAPI";
    import InstituteCreatePanel from "$lib/components/pages/institutes/InstituteCreatePanel.svelte";
    import InstituteEditPanel from "$lib/components/pages/institutes/InstituteEditPanel.svelte";
    import InstituteOverviewPanel from "$lib/components/pages/institutes/InstituteOverviewPanel.svelte";
    import type { GetInstituteDto } from "$lib/types/api/Institute";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let institutes: GetInstituteDto[] = $state(data.institutes);

    const updateInstitutes = async () => {
        institutes = await getAllInstitutes();
    }
</script>

<div class="w-full h-full flex flex-row space-x-5">
    <div class="card basis-1/2">
        <InstituteOverviewPanel {institutes} />
    </div>
    <div class="basis-1/2 flex flex-col space-y-5">
        <div class="card basis-1/2">
            <InstituteCreatePanel {updateInstitutes} />
        </div>
        <div class="card basis-1/2">
            <InstituteEditPanel {institutes} {updateInstitutes} />
        </div>
    </div>
</div>
