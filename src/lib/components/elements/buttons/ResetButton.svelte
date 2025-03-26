<script lang="ts">
    import { _ } from "svelte-i18n";

    let { reset }: { reset: any } = $props();
</script>

<button onclick={reset} type="button" class="btn preset-filled-surface-200-800 grow">
    <iconify-icon icon="material-symbols:reset-settings-rounded" width="24" height="24"></iconify-icon>
    <span>{$_("common.reset.title")}</span>
</button>
