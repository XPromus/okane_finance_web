<script lang="ts">
    import type { GetPayeeDto } from "$lib/types/api/Payee";

    let { payee }: { payee: GetPayeeDto } = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-1 drop-shadow-sm">
    {payee.payeeName}
</div>
