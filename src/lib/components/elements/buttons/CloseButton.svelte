<script lang="ts">
    import { _ } from "svelte-i18n";

    let { close }: { close: any } = $props();
</script>

<button onclick={close} type="button" class="btn preset-filled-surface-200-800 grow">
    <span>{$_("common.close.title")}</span>
</button>
