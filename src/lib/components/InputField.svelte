<script lang="ts">
    let { 
        label,
        value = $bindable(), 
        type, 
        placeholder,
        optional
    }: {
        label: string, 
        value: any, 
        type: string, 
        placeholder: string,
        optional: boolean
    } = $props();
</script>

<div class="flex flex-col space-y-2 text-left">
    <span>{label}</span>
    <input class="input" bind:value={value} type={type} placeholder={placeholder}>
</div>
