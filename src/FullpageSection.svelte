<script>
    export let center = false;
</script>

<section>
    <div
        class="fullpage-container fullpage-flexbox-expand"
        class:fullpage-flexbox-center={center}
    >
        <slot />
    </div>
</section>
ç

<style>
    section {
        height: inherit;
        position: relative;
    }
    .fullpage-flexbox-expand {
        flex: 1;
    }
    .fullpage-container {
        height: inherit;
        width: inherit;
        position: relative;
    }
    .fullpage-flexbox-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
