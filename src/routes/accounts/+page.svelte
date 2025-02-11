<script lang="ts">
    import type { PageData } from "../$types";

    let { data }: { data: PageData } = $props();
</script>

<div class="w-full h-full flex flex-row space-x-5 p-5">
    <div class="basis-1/2 card p-5 flex flex-col space-y-3">
        {#each data.accounts as account, i}
            <div class="card">
                {account.accountName}
            </div>
        {/each}
    </div>
    <div class="basis-1/2 card">

    </div>
</div>