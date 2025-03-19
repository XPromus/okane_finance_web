<script lang="ts">
    import type { GetAccountDto } from "$lib/types/api/Account";
    
    let { account }: { account: GetAccountDto } = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-1 drop-shadow-sm">
    {account.accountName}
</div>  
