<script lang="ts">
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import SelectField from "$lib/components/SelectField.svelte";
    import type { GetAccountDto } from "$lib/types/api/Account";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    let newTransactionName: string = $state("");
    let newDoneDate: Date = $state(new Date());
    let newFinishedDate: Date | undefined = $state();
    let newAmount: number = $state(0);
    let newAccountID: string = $state("");
    let newPayeeID: string = $state("");
    let newCategoryID: string | undefined = $state();

    const accountsToSelectData = (): 
        { 
            name: string, 
            value: string 
        }[] => {
        return data.accounts.map((account) => {
            return {
                name: account.accountName,
                value: account.id
            };
        });
    }

</script>

<div class="w-full h-full flex flex-row space-x-5 p-5">
    <Card classes="basis-1/5">
        {#snippet title()}
            <CardTitle text="Create Transaction"/>
        {/snippet}
        {#snippet content()}
            <div class="flex flex-col space-y-5">
                <InputField bind:value={newTransactionName} type="text" placeholder="New Transaction Name" optional={false} />
                <InputField bind:value={newDoneDate} type="date" placeholder="New Done Date" optional={false} />
                <InputField bind:value={newFinishedDate} type="date" placeholder="New Finished Name" optional={true} />
                <InputField bind:value={newAmount} type="number" placeholder="New Amount" optional={false} />
                <SelectField 
                    bind:selected={newAccountID} 
                    data={accountsToSelectData()} 
                    label="Account" 
                    placeholder="Account" 
                    optional={false} 
                />
                <SelectField 
                    bind:selected={newPayeeID} 
                    data={accountsToSelectData()} 
                    label="Payee" 
                    placeholder="Payee" 
                    optional={false} 
                />
                <SelectField 
                    bind:selected={newCategoryID} 
                    data={accountsToSelectData()} 
                    label="Category (Optional)" 
                    placeholder="Category" 
                    optional={false} 
                />
            </div>
        {/snippet}
    </Card>
    <Card classes="basis-4/5">
        {#snippet title()}
            <CardTitle text="Overview"/>
        {/snippet}
        {#snippet content()}
            Overview
        {/snippet}
    </Card>
</div>