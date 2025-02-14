<script lang="ts">

    import {AppBar, LightSwitch} from "@skeletonlabs/skeleton";
import Icon from "@iconify/svelte";
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <span>Okane Finance</span>
    </svelte:fragment>
    <span>Center</span>
    <svelte:fragment slot="trail">
        <button type="button" class="btn btn-icon variant-soft-tertiary">
            <Icon icon="material-symbols:person-rounded" width="24" height="24" />
        </button>
        <button type="button" class="btn variant-soft-tertiary">
            <Icon icon="material-symbols:database-search-rounded" width="24" height="24" />
            <span>Data</span>
        </button>
        <div class="flex flex-row justify-end content-center items-center">
            <LightSwitch />
        </div>
    </svelte:fragment>
</AppBar>