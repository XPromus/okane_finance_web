<script lang="ts">
    import type { GetOwnerDto } from "$lib/types/api/Owner";

    let { owner }: { owner: GetOwnerDto } = $props();
</script>   

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-1 drop-shadow-sm">
    {owner.firstName} {owner.lastName}
</div>