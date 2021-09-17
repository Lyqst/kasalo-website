<div
    class="fullpage-wrapper"
>
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
        transition: 2s ease;
        background: linear-gradient(
            -45deg,
            var(--color1),
            var(--color2),
            var(--color3),
            var(--color4),
            var(--color5)
        );
        background-size: 250% 250%;
        animation: gradient 30s ease-in-out infinite;
    }
    .fullpage-container {
        height: inherit;
        width: inherit;
        position: relative;
    }
</style>
