<script lang="ts">
    import Icon from "@iconify/svelte";
    import { type ConicStop } from "@skeletonlabs/skeleton-svelte";

    let open = $state(true)    
    const conicStops: ConicStop[] = [
        { label: "Primary", color: 'rgb(var(--color-primary-500))', start: 0, end: 10 },
        { label: "Secondary", color: 'rgb(var(--color-secondary-500))', start: 10, end: 35 },
        { label: "Tertiary", color: 'rgb(var(--color-tertiary-500))', start: 35, end: 100 }
    ]
</script>

<div class="card p-5 grow">
    <header class="flex flex-row-reverse space-x-2 space-x-reverse">
        <button class="btn-icon btn-icon-sm preset-tonal-error">
            <Icon icon="material-symbols:close-small-rounded" width="32" height="32" />
        </button>
        <button onclick={() => {open = !open}} class="btn-icon btn-icon-sm preset-tonal-surface">
            {#if open}
                <Icon icon="material-symbols:arrow-drop-up" width="32" height="32" />
            {:else}    
                <Icon icon="material-symbols:arrow-drop-down" width="32" height="32" />
            {/if}
            
        </button>
    </header>
    {#if open}
        <section>
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </section>
    {/if}
</div>