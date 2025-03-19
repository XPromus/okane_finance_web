<script lang="ts">
    import { putEditPayee } from "$lib/api/PayeeAPI";
    import CardTitle from "$lib/components/elements/CardTitle.svelte";
    import InputField from "$lib/components/InputField.svelte";
    import type { EditPayeeDto, GetPayeeDto } from "$lib/types/api/Payee";
    import { onMount } from "svelte";

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
    <CardTitle text="Edit"/>
    <InputField bind:value={currentPayeeName} type="text" placeholder="Institute Name" optional={false}/>
    <div class="flex flex-row space-x-5 w-full">
        <button onclick={close} type="button" class="btn preset-tonal-surface grow">Close</button>
        <button onclick={onSaveButtonClicked} type="button" class="btn preset-tonal-success grow">Save</button>
    </div>
</div>
