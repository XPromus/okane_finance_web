<script lang="ts">
    import type { GetOwnerDto } from '$lib/types/api/Owner';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    const targetOwner: GetOwnerDto = data.targetOwner[0];
</script>

<div class="">

</div>