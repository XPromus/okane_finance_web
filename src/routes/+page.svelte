<script lang="ts">
    let count = $state(0)
</script>

<div>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>   
    <button type="button" class="btn variant-filled" onclick={() => count++}>
        clicks: {count}
    </button>
</div>