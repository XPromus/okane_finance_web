<script lang="ts">
    import type { PageData } from './$types';
    import sparkasse_logo from "$lib/images/sparkasse-logo.svg";
    let { data }: { data: PageData } = $props();
</script>

<div class="w-full h-full flex flex-row space-x-5 p-5">
    <div class="basis-1/2 card p-5 flex flex-col space-y-3">
        {#each data.accounts as account, i}
            <button class="card card-hover p-2 flex flex-row space-x-5 max-h-8 align-middle">
                <img src={sparkasse_logo} alt="Logo Sparkasse" />
                <span>{account.accountName}</span>
            </button>
        {/each}
    </div>
    <div class="basis-1/2 card">

    </div>
</div>