<script>
    export let brand = false;
    let hover = false;

    let color = "";

    let list = [
        "rgb(217, 3, 104)",
        "rgb(34, 116, 165)",
        "rgb(247, 92, 3)",
        "rgb(241, 196, 15)",
        "rgb(145, 245, 173)",
    ];

    function toggleHover() {
        hover = !hover;
        color = list[Math.floor(Math.random() * list.length)];
    }
</script>

<div class="navitem-container">
    <div
        class:hover
        class:brand
        on:mouseenter={toggleHover}
        on:mouseleave={toggleHover}
        style="--bg-color:{color}"
    >
        <a href="/"><slot /></a>
    </div>
</div>

<style>
    div {
        background-color: rgba(255, 255, 255, 0);
        transition: ease-in-out;
        transition-duration: 0.15s;
        border-radius: 50%;
        height: 214px;
        width: 214px;
        display: flex;
        align-items: center;
    }

    a {
        color: black;
        font-size: 24px;
        width: inherit;
        text-decoration: none;
        text-align: center;
    }

    .navitem-container {
        display: flex;
        width: inherit;
        height: inherit;
        justify-content: center;
    }

    .hover {
        transform: scale(1.2);
        background-color: var(--bg-color);
        z-index: 2;
    }
    .hover a {
        color: lavender;
    }

    .brand {
        transform: scale(1);
        background-color: rgba(13, 255, 174, 255);
    }

    .brand a {
        font-size: 38px;
    }
</style>
