<script lang="ts">
    import OwnerAddPage from '$lib/components/owners/OwnerAddPage.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="w-full h-full p-5 flex flex-row space-x-3">
    <OwnerAddPage />
</div>