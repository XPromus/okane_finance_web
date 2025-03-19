<script lang="ts">
    let { 
        addMenuButton,
        addMenu, 
        list, 
        editMenu,
        showAddMenu = $bindable(),
        showEditMenu = $bindable()
    } = $props();
</script>

<div class="w-full h-full flex flex-row p-2 space-x-5">
    <div class="grow flex flex-col space-y-5">
        {@render addMenuButton()}
        {#if showAddMenu}
            {@render addMenu()}
        {/if}
        <hr class="hr border-t-4" />
        {@render list()}
    </div>
    {#if showEditMenu}
        {@render editMenu()}
    {/if}
</div>
