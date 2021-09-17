<script>
    import { slide } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    export let landing;
</script>

<section>
    {#if landing}
        <div
            class="landing-top-space"
            transition:slide={{ duration: 900, easing: cubicOut }}
        />
    {/if}
    <div
        class="section-container section-flexbox-expand"
        class:section-landing={landing}
        class:section-content={!landing}
    >
        <slot />
    </div>
</section>

<style>
    section {
        height: inherit;
        position: relative;
    }
    .section-flexbox-expand {
        flex: 1;
    }
    .section-container {
        height: inherit;
        width: inherit;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }
    .landing-top-space {
        height: 33%;
    }
</style>
