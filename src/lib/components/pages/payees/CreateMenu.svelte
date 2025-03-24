<script lang="ts">
    import { postCreatePayee } from "$lib/api/PayeeAPI";
    import ResetButton from "$lib/components/elements/buttons/ResetButton.svelte";
    import SaveButton from "$lib/components/elements/buttons/SaveButton.svelte";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { CreatePayeeDto } from "$lib/types/api/Payee";
    import { _ } from "svelte-i18n";

    let { update } = $props();

    let newPayeeName: string = $state("");

    const onSaveButtonClicked = async () => {
        const newPayee: CreatePayeeDto = {
            payeeName: newPayeeName
        }
        
        await postCreatePayee(newPayee);
        update();
    }

    const resetInputFields = () => {
        newPayeeName = "";
    }
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 text-center flex flex-col space-y-5 drop-shadow-sm">
    <CardTitle text={$_("data.payees.createMenu.title.title")}/>
    <div class="flex flex-col space-y-1">
        <InputField
            label={$_("data.payees.createMenu.payeeNamePlaceholder.title")} 
            bind:value={newPayeeName} 
            type="text" 
            placeholder={$_("data.payees.createMenu.payeeNamePlaceholder.title")} 
            optional={false}
        />
    </div>
    <div class="flex flex-row space-x-5">
        <ResetButton reset={resetInputFields} />
        <SaveButton save={onSaveButtonClicked} />
    </div>
</div>
