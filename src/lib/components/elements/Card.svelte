<script lang="ts">
    import type { Snippet } from "svelte";

    let { 
        title, 
        content, 
        footer,
        classes = ""
    }: {
        title?: Snippet,
        content: Snippet,
        footer?: Snippet,
        classes?: string
    } = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 text-center flex flex-col space-y-5 drop-shadow-sm {classes}">
    {#if title !== undefined}
        {@render title()}
    {/if}
    <div class="grow">
        {@render content()}
    </div>
    {#if footer !== undefined}
        {@render footer()}
    {/if}
</div>
