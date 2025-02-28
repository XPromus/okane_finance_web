<script lang="ts">
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import type { GetInstituteDto } from "$lib/types/api/Institute";

    let { institutes }: { institutes: GetInstituteDto[] } = $props();
</script>

<div class="flex flex-col space-y-5 h-full w-full p-5">
    <CardTitle text="Overview"/>
    {#each institutes as institute }
        <span class="content-center text-left">{institute.instituteName}</span>
    {/each}
</div>