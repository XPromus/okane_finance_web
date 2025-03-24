<script lang="ts">
    import { putEditPayee } from "$lib/api/PayeeAPI";
    import CloseButton from "$lib/components/elements/buttons/CloseButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditPayeeDto, GetPayeeDto } from "$lib/types/api/Payee";
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n";

    let { 
        payee, 
        update, 
        close 
    }: { 
        payee: GetPayeeDto, 
        update: any, 
        close: any 
    } = $props();
    
    let currentPayeeId: string = $state("");
    let currentPayeeName: string = $state("");

    const onSaveButtonClicked = async () => {
        const payeeToSave: EditPayeeDto = {
            payeeName: currentPayeeName
        };

        await putEditPayee(currentPayeeId, payeeToSave);
        update();
    }

    onMount(() => {
        currentPayeeId = payee.id;
        currentPayeeName = payee.payeeName;
    });
</script>

<div class="basis-1/5 card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 text-center flex flex-col space-y-5">
    <CardTitle text={$_("data.payees.editMenu.title.title")}/>
    <InputField
        label={$_("data.payees.editMenu.payeeNamePlaceholder.title")} 
        bind:value={currentPayeeName} 
        type="text" 
        placeholder={$_("data.payees.editMenu.payeeNamePlaceholder.title")} 
        optional={false}
    />
    <div class="flex flex-row space-x-5 w-full">
        <CloseButton close={close}/>
        <SaveButton save={onSaveButtonClicked}/>
    </div>
</div>
