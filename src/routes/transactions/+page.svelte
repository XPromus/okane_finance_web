<script lang="ts">
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import SelectField from "$lib/components/SelectField.svelte";
    import type { PageData } from "./$types";
    import { _ } from "svelte-i18n";
    import { postCreateTransaction } from "$lib/api/TransactionAPI";
    import type { CreateTransactionDto } from "$lib/types/api/Transaction";
    import { getTransactionListEntryData } from "$lib/middleware/transactionMiddleware";

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

    const onTransactionSaveButtonClicked = async () => {
        const newTransaction: CreateTransactionDto = {
            transactionName: newTransactionName,
            doneDate: newDoneDate,
            finishedDate: newFinishedDate,
            amount: newAmount,
            targetAccountID: newAccountID,
            targetPayeeID: newPayeeID,
            targetCategoryID: newCategoryID
        }

        await postCreateTransaction(newTransaction);
    }

</script>

<div class="w-full h-full flex flex-row space-x-5 p-5">
    <Card classes="basis-1/5">
        {#snippet title()}
            <CardTitle text="Create Transaction"/>
        {/snippet}
        {#snippet content()}
            <div class="flex flex-col space-y-5">
                <InputField 
                    label={$_("data.transactions.create.transactionName.label")} 
                    bind:value={newTransactionName} 
                    type="text" 
                    placeholder={$_("data.transactions.create.transactionName.placeholder")}
                    optional={false} 
                />
                <InputField 
                    label={$_("data.transactions.create.doneDate.label")}
                    bind:value={newDoneDate} 
                    type="date" 
                    placeholder={$_("data.transactions.create.doneDate.placeholder")}
                    optional={false} 
                />
                <InputField 
                    label={$_("data.transactions.create.finishedDate.label")}
                    bind:value={newFinishedDate} 
                    type="date" 
                    placeholder={$_("data.transactions.create.finishedDate.placeholder")}
                    optional={true} 
                />
                <InputField 
                    label={$_("data.transactions.create.amount.label")}
                    bind:value={newAmount} 
                    type="number" 
                    placeholder={$_("data.transactions.create.amount.placeholder")} 
                    optional={true} 
                />
                <SelectField 
                    bind:selected={newAccountID} 
                    data={accountsToSelectData()} 
                    label={$_("data.transactions.create.account.label")} 
                    placeholder={$_("data.transactions.create.account.placeholder")} 
                    optional={false} 
                />
                <SelectField 
                    bind:selected={newPayeeID} 
                    data={accountsToSelectData()} 
                    label={$_("data.transactions.create.payee.label")}  
                    placeholder={$_("data.transactions.create.payee.placeholder")}   
                    optional={false} 
                />
                <SelectField 
                    bind:selected={newCategoryID} 
                    data={accountsToSelectData()} 
                    label={$_("data.transactions.create.category.label")}  
                    placeholder={$_("data.transactions.create.category.placeholder")}  
                    optional={false} 
                />
            </div>
        {/snippet}
        {#snippet footer()}
            <SaveButton save={onTransactionSaveButtonClicked()} />
        {/snippet}
    </Card>
    <Card classes="basis-4/5">
        {#snippet title()}
            <CardTitle text={$_("data.transactions.overview.title")} />
        {/snippet}
        {#snippet content()}
            <div class="flex flex-col space-y-5 w-full h-full">
                <div class="flex flex-row space-x-5 basis-1/4">
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="btn-icon preset-filled h-full">
                        <iconify-icon icon="material-symbols:arrow-left-rounded" width="24" height="24"></iconify-icon>
                    </button>
                    <div class="grow">
                        Graph For Transactions
                    </div>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="btn-icon preset-filled h-full">
                        <iconify-icon icon="material-symbols:arrow-right-rounded" width="24" height="24"></iconify-icon>
                    </button>
                </div>
                <div class="basis-3/4 table-wrap">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Payee
                                </th>
                                <th>
                                    Account
                                </th>
                                <th class="!text-right">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody class="[&>tr]:hover:preset-tonal-primary">
                            {#each await getTransactionListEntryData(data.transactions) as transaction}
                                <tr>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.payee}</td>
                                    <td>{transaction.account}</td>
                                    <td class="text-right">{transaction.amount}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        {/snippet}
    </Card>
</div>