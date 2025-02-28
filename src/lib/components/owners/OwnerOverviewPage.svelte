<script lang="ts">
    let { owners } = $props();
</script>

<div class="grow flex flex-col space-y-3 w-full h-full p-5">
    <span class="w-full font-bold text-center">Overview</span>
    {#each owners as owner, i}
        <div class="">
            <span class="content-center text-left">{owner.firstName} {owner.lastName}</span>
        </div>
    {/each}
</div>