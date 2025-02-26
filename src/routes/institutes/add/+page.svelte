<script lang="ts">
    import type {InstituteDto} from "$lib/types/api/Institute";
    import {postCreateInstitute} from "$lib/api/InstitutesAPI";
    import Icon from "@iconify/svelte";
    import {getToastStore, type ToastSettings} from "@skeletonlabs/skeleton";

    const toastStore = getToastStore();

    let newInstituteName: string = $state("");

    const onSaveButtonClicked = async () => {
        const instituteDto: InstituteDto = {
            name: newInstituteName
        };

        const newInstituteResponse = await postCreateInstitute(instituteDto);
        if (newInstituteResponse.ok) {
            const t: ToastSettings = {
                message: "New Institute has been created",
                timeout: 2500
            };
            toastStore.trigger(t);
        }
        resetInputFields();
    }

    const resetInputFields = () => {
        newInstituteName = "";
    }
</script>

<div class="card w-full h-full p-5 flex flex-col space-y-5">
    <div class="flex flex-col space-y-5">
        <label class="label">
            <span>Name</span>
            <input bind:value={newInstituteName} class="input" type="text" placeholder="Institute Name" />
        </label>
    </div>
    <div class="grow"></div>
    <div class="flex flex-row space-x-5">
        <button onclick={resetInputFields} type="button" class="btn variant-soft-surface basis-1/2">
            <Icon icon="material-symbols:reset-settings-rounded" width="24" height="24" />
            <span>Reset</span>
        </button>
        <button onclick={onSaveButtonClicked} type="button" class="btn variant-soft-success basis-1/2">
            <Icon icon="material-symbols:save-rounded" width="24" height="24" />
            <span>Save</span>
        </button>
    </div>
</div>