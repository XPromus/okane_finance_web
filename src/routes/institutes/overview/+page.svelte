<script lang="ts">
    import type { PageData } from './$types';
    import Icon from "@iconify/svelte";

    let { data }: { data: PageData } = $props()
</script>

<div class="table-container">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th>Total Account Balance</th>
            <th>Total Depot Balance</th>
        </tr>
        </thead>
        <tbody>
        {#each data.institutes as institute, i}
            <tr>
                <td>{institute.name}</td>
                <td>0€</td>
                <td class="flex flex-row">
                    <span class="grow">0€</span>
                    <button type="button" class="btn-icon btn-icon-sm variant-ghost">
                        <Icon icon="material-symbols:open-in-new-rounded" width="15" height="15" />
                    </button>
                </td>
            </tr>
        {/each}
        </tbody>
        <tfoot>
            <tr>
                <th colspan="2">Total Account Balance</th>
                <td>0€</td>
            </tr>
            <tr>
                <th colspan="2">Total Depot Balance</th>
                <td>0€</td>
            </tr>
        </tfoot>
    </table>
</div>