<script>
    export let brand = false;
    let hover = false;

    let color = 1;

    function toggleHoverIn() {
        if (!brand) {
            hover = true;
            color += 1;
            if (color > 5) color = 1;
        }
    }

    function toggleHoverOut() {
        hover = false;
    }
</script>

<div class="navitem-container">
    <div
        class="navitem"
        class:hover
        class:brand
        class:color1={hover && color == 1}
        class:color2={hover && color == 2}
        class:color3={hover && color == 3}
        class:color4={hover && color == 4}
        class:color5={hover && color == 5}
        on:mouseenter={toggleHoverIn}
        on:mouseleave={toggleHoverOut}
    >
        <a href="/"><slot /></a>
    </div>
</div>

<style>
    .navitem {
        background-color: rgba(255, 255, 255, 0);
        transition: 0.15s ease;
        border-radius: 50%;
        height: 164px;
        width: 164px;
        display: flex;
        align-items: center;
    }

    a {
        color: lavender;
        font-size: 26px;
        width: inherit;
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        transition: 0.15s ease;
    }

    .navitem-container {
        display: flex;
        width: inherit;
        height: inherit;
        justify-content: center;
    }

    .hover {
        animation: hoverAnim 4s ease-in-out 0.15s infinite;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05),
            0 6px 20px 0 rgba(0, 0, 0, 0.02);
        z-index: 2;
    }

    .hover a {
        color: lavender;
        transform: scale(1.1);
        animation: hoverAnimText 4s ease-in-out 0.15s infinite;
    }

    @keyframes hoverAnim {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes hoverAnimText {
        0% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }

    .brand {
        background: linear-gradient(
            -45deg,
            var(--color1),
            var(--color2),
            var(--color3),
            var(--color4),
            var(--color5)
        );
        background-size: 400% 400%;
        animation: gradient 30s linear infinite;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05),
            0 6px 20px 0 rgba(0, 0, 0, 0.02);
    }

    .brand a {
        font-size: 38px;
    }
</style>
