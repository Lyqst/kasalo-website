<script>
    export let type = "";
</script>

<div class="fullpage-wrapper {type}">
    <div class="fullpage-container">
        <slot />
    </div>
</div>

<style>
    .fullpage-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .fullpage-container {
        height: inherit;
        width: inherit;
        position: relative;
    }
</style>