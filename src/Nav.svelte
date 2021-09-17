<script>
    export let landing;
</script>

<div
    class="nav"
    class:landing
    class:content={!landing}
>
    <div class="container">
        <slot />
    </div>
</div>

<style>
    .nav {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        transition: 3s;
    }

    .landing {
        padding: 15px 0px;
    }

    .content {
        margin-top: -48px;
    }

    .content .container {
        margin-bottom: -42px;
    }
</style>
