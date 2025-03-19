<script lang="ts">
    import type { GetInstituteDto } from "$lib/types/api/Institute";

    let { institute }: { institute: GetInstituteDto } = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-1 drop-shadow-sm">
    {institute.instituteName}
</div>