<script lang="ts">
    import Icon from "@iconify/svelte";

    let { text} = $props();
</script>

<div class="chip variant-soft-success flex flex-row space-x-3">
    <Icon icon="material-symbols:check-circle-rounded" width="24" height="24" />
    <span>{text}</span>
</div>
