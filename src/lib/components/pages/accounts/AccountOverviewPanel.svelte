<script lang="ts">
    import CardTitle from "$lib/components/elements/CardTitle.svelte";

    let { accounts } = $props();
</script>

<div class="grow flex flex-col space-y-3 w-full h-full p-5">
    <CardTitle text="Overview"/>
    {#each accounts as account }
        <span class="content-center text-left">{account.accountName}</span>
    {/each}
</div>