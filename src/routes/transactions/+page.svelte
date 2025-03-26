<script lang="ts">
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import Card from "$lib/components/elements/Card.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import SelectField from "$lib/components/SelectField.svelte";
    import type { PageData } from "./$types";
    import { _ } from "svelte-i18n";
    import { getAllTransactions, postCreateTransaction } from "$lib/api/TransactionAPI";
    import type { CreateTransactionDto } from "$lib/types/api/Transaction";
    import { getTransactionListEntryData, getTransactionListEntryDataSortedByDate, sortTransactionsIntoDateGroupsByDoneDate, type TransactionListEntryByDate, type TransactionListEntryType } from "$lib/middleware/transactionMiddleware";
    import { Switch } from "@skeletonlabs/skeleton-svelte";
    import type { GetAccountDto } from "$lib/types/api/Account";
    import { onMount } from "svelte";

    let { data }: { data: PageData } = $props();
    let sortedTransactions = $derived(sortTransactionsIntoDateGroupsByDoneDate(data.transactions));
    let transactionListEntries: Promise<TransactionListEntryByDate[]> = $derived(
        getTransactionListEntryDataSortedByDate(sortedTransactions)
    );

    let newTransactionName: string = $state("");
    let newDoneDate: Date = $state(new Date());
    let newFinishedDate: Date | undefined = $state();
    let newAmount: number = $state(0);
    let newAccountID: string = $state("");
    let newPayeeID: string = $state("");
    let newCategoryID: string | undefined = $state();

    let showFilters: boolean = $state(false);
    let filterAccounts: GetAccountDto[] = [];

    const onAccountFilterClicked = (account: GetAccountDto, state: boolean) => {
        if (state) {
            filterAccounts.push(account);
        } else {
            const index = filterAccounts.indexOf(account);
            filterAccounts.splice(index, 1);
        }
    }

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

    const payeesToSelectData = (): {
        name: string,
        value: string
    }[] => {
        return data.payees.map((payee) => {
            return {
                name: payee.payeeName,
                value: payee.id
            }
        })
    }

    const categoriesToSelectData = (): {
        name: string,
        value: string
    }[] => {
        return data.categories.map((category) => {
            return {
                name: category.categoryName,
                value: category.id
            }
        })
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
        await updateTransactions();
    }

    const updateTransactions = async () => {
        data.transactions = await getAllTransactions();
    }
</script>

<div class="w-full h-full flex flex-row space-x-5 p-5">
    <Card classes="basis-1/5 overflow-hidden">
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
                    data={payeesToSelectData()} 
                    label={$_("data.transactions.create.payee.label")}  
                    placeholder={$_("data.transactions.create.payee.placeholder")}   
                    optional={false} 
                />
                <SelectField 
                    bind:selected={newCategoryID} 
                    data={categoriesToSelectData()} 
                    label={$_("data.transactions.create.category.label")}  
                    placeholder={$_("data.transactions.create.category.placeholder")}  
                    optional={false} 
                />
            </div>
        {/snippet}
        {#snippet footer()}
            <div class="flex flex-row">
                <SaveButton save={onTransactionSaveButtonClicked()} />
            </div>
        {/snippet}
    </Card>
    <Card classes="basis-4/5">
        {#snippet title()}
            <CardTitle text={$_("data.transactions.overview.title")} />
        {/snippet}
        {#snippet content()}
            <div class="flex flex-col space-y-5 w-full h-full">
                <div class="w-full flex flex-row-reverse">
                    <Switch checked={showFilters} onCheckedChange={() => {showFilters = !showFilters}} name="filter" controlWidth="w-9" controlActive="preset-filled-tertiary-500" compact>
                        {#snippet inactiveChild()}
                            <div class="flex justify-center">
                                <iconify-icon icon="material-symbols:filter-alt-outline" width="24" height="24"></iconify-icon>
                            </div>
                        {/snippet}
                        {#snippet activeChild()}
                            <div class="flex justify-center">
                                <iconify-icon icon="material-symbols:filter-alt" width="24" height="24"></iconify-icon>
                            </div>
                        {/snippet}
                    </Switch>
                </div>
                {#if showFilters}
                    <div class="w-full flex flex-row space-x-5">
                        <div class="flex flex-col space-y-2 grow">
                            <span class="font-bold">Accounts</span>
                            <hr class="hr" />
                            {#each data.accounts as account}
                                <div class="flex flex-row space-x-5">
                                    <span class="grow text-left preset-typo-menu">{account.accountName}</span>
                                    <input class="checkbox" type="checkbox">
                                </div>
                            {/each}
                        </div>
                        <div class="flex flex-col space-y-2 grow">
                            <span class="font-bold">Payees</span>
                            <hr class="hr" />
                            {#each data.payees as payee}
                                <div class="flex flex-row space-x-5">
                                    <span class="grow text-left preset-typo-menu">{payee.payeeName}</span>
                                    <input class="checkbox" type="checkbox">
                                </div>
                            {/each}
                        </div>
                        <div class="flex flex-col space-y-2 grow">
                            <span class="font-bold">Categories</span>
                            <hr class="hr" />
                            {#each data.categories as category}
                                <div class="flex flex-row space-x-5">
                                    <span class="grow text-left preset-typo-menu">{category.categoryName}</span>
                                    <input class="checkbox" type="checkbox">
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
                <div class="basis-1/4 bg-red-50">
                    Graph For Transactions
                </div>
                <div class="grow">
                    {#await transactionListEntries}
                        <span>Loading</span>
                    {:then transactionCollections} 
                        <div class="w-full h-full table-wrap">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            {$_("data.transactions.overview.table.headers.name")}
                                        </th>
                                        <th>
                                            {$_("data.transactions.overview.table.headers.payee")}
                                        </th>
                                        <th>
                                            {$_("data.transactions.overview.table.headers.account")}
                                        </th>
                                        <th class="!text-right">
                                            {$_("data.transactions.overview.table.headers.amount")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="[&>tr]:hover:preset-tonal-primary overflow-y-auto">
                                    {#each transactionCollections as transactionCollection}
                                        <tr>
                                            <td>{transactionCollection.date.toDateString()}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {#each transactionCollection.transactionListEntries as transaction}
                                            <tr>
                                                <td>{transaction.name}</td>
                                                <td>{transaction.payee}</td>
                                                <td>{transaction.account}</td>
                                                <td class="text-right">{transaction.amount}</td>
                                            </tr>
                                        {/each}
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    {/await}
                </div>
            </div>
        {/snippet}
    </Card>
</div>