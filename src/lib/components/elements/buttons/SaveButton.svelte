<script lang="ts">
    import { _ } from "svelte-i18n";

    let { save }: { save: any } = $props();
</script>

<button onclick={save} type="button" class="btn preset-filled-success-200-800 grow">
    <iconify-icon icon="material-symbols:save-rounded" width="24" height="24"></iconify-icon>
    <span>{$_("common.save.title")}</span>
</button>
