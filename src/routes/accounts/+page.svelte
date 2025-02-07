<script lang="ts">
    import PieChartCard from "$lib/components/PieChartCard.svelte";
import Icon from "@iconify/svelte";
    import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";

    const conicStops: ConicStop[] = [
        { label: "Primary", color: 'rgb(var(--color-primary-500))', start: 0, end: 10 },
        { label: "Secondary", color: 'rgb(var(--color-secondary-500))', start: 10, end: 35 },
        { label: "Tertiary", color: 'rgb(var(--color-tertiary-500))', start: 35, end: 100 }
    ]
</script>

<div class="w-full h-full flex flex-col space-y-5 p-5">
    <div class="flex flex-row space-x-5 ">
        <div class="card p-5 grow">
            <header class="flex flex-row-reverse space-x-2 space-x-reverse">
                <button class="btn-icon btn-icon-sm variant-soft-error">
                    <Icon icon="material-symbols:close-small-rounded" width="32" height="32" />
                </button>
                <button class="btn-icon btn-icon-sm variant-soft-surface">
                    <Icon icon="material-symbols:arrow-drop-up" width="32" height="32" />
                </button>
            </header>
            <section><ConicGradient stops={conicStops} legend>test</ConicGradient></section>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
    </div>
    <div class="flex flex-row space-x-5 ">
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
        <div class="card p-5 grow">
            <ConicGradient stops={conicStops} legend>test</ConicGradient>
        </div>
    </div>
</div>