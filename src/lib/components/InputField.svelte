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

<input class="input" bind:value={value} type={type} placeholder={placeholder}>
