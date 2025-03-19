<script lang="ts">
    import Icon from "@iconify/svelte";

    let { text} = $props();
</script>

<div class="chip preset-tonal-error flex flex-row space-x-3">
    <Icon icon="material-symbols:error" width="24" height="24" />
    <span>{text}</span>
</div>
