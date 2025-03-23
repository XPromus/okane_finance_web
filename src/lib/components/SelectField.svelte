<script lang="ts">
    let {
        selected = $bindable(),
        data,
        label,
        placeholder,
        optional
    }: {
        selected: any,
        data: { 
            name: string, 
            value: string 
        }[],
        label: string,
        placeholder: string,
        optional: boolean
    } = $props();
</script>

<div class="flex flex-col space-y-2">
    <span>{label}</span>
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

