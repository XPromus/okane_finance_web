<script lang="ts">
    import type { SelectFieldData } from "$lib/types/components/selectField";

    let {
        selected = $bindable(),
        data,
        label,
        placeholder,
        optional
    }: {
        selected: any,
        data: SelectFieldData[],
        label: string,
        placeholder: string,
        optional: boolean
    } = $props();
</script>

<div class="flex flex-col space-y-2 text-left">
    <span class="font-bold">{label}</span>
    <select 
        bind:value={selected} 
        class="input" 
        placeholder={placeholder}
    >
        {#each data as entry }
            <option value={entry.value}>
                {entry.name}
            </option>
        {/each}
    </select>
</div>
