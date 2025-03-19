<script lang="ts">
    import type { GetOwnerDto } from "$lib/types/api/Owner";

    let { owner }: { owner: GetOwnerDto } = $props();
</script>   

<div class="w-full h-fit py-1 card">
    {owner.firstName} {owner.lastName}
</div>