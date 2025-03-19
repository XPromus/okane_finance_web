<script lang="ts">
    let { 
        value = $bindable(), 
        type, 
        placeholder,
        optional
    }: { 
        value: any, 
        type: string, 
        placeholder: string,
        optional: boolean
    } = $props();
</script>

{#if !optional && value === ""}
    <input class="p-1 rounded-md card drop-shadow-md border border-red-500" bind:value={value} type={type} placeholder={placeholder}>
{:else}
    <input class="p-1 rounded-md card drop-shadow-md" bind:value={value} type={type} placeholder={placeholder}>
{/if}
