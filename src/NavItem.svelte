<script>
    export let brand = false;
    let hover = false;

    let color = 1;

    function toggleHoverIn() {
        if (!brand) {
            hover = true;
            color = Math.floor(Math.random() * 6 + 1);
        }
    }

    function toggleHoverOut() {
        hover = false;
    }

</script>

<div class="navitem-container">
    <div
        class:hover
        class:brand
        class:color1="{hover && color == 1}"
        class:color2="{hover && color == 2}"
        class:color3="{hover && color == 3}"
        class:color4="{hover && color == 4}"
        class:color5="{hover && color == 5}"
        class:color6="{hover && color == 6}"
        on:mouseenter={toggleHoverIn}
        on:mouseleave={toggleHoverOut}
    >
        <a href="/"><slot /></a>
    </div>
</div>

<style>
    div {
        background-color: rgba(255, 255, 255, 0);
        transition: 0.15s ease;
        border-radius: 50%;
        height: 214px;
        width: 214px;
        display: flex;
        align-items: center;
    }

    a {
        color: lavender;
        font-size: 24px;
        width: inherit;
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
        z-index: 2;
    }

    .hover a {
        color: lavender;
        transform: scale(1.3);
    }

    @keyframes hoverAnim {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .brand {
        background: lavender;
    }

    .brand a {
        animation: brandBg infinite 20s cubic-bezier(1, 0, 0.35, 0.9);
        font-size: 38px;
    }
    
    @keyframes brandBg {
        0% {
            color: var(--color1);
        }
        16% {
            color: var(--color2);
        }
        33% {
            color: var(--color3);
        }
        50% {
            color: var(--color4);
        }
        66% {
            color: var(--color5);
        }
        83% {
            color: var(--color6);
        }
        100% {
            color: var(--color1);
        }
    }

</style>
