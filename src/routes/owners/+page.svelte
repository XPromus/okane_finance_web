<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    onMount(() => goto("/owners/overview"))
</script>

<div class="w-full h-full p-5 flex flex-row space-x-3 justify-center align-middle">
    Owners
</div>
