<script>
    export let contentBgColor;
</script>

<div
    class="container"
    class:color1={(contentBgColor == 1)}
    class:color2={(contentBgColor == 2)}
    class:color3={(contentBgColor == 3)}
    class:color4={(contentBgColor == 4)}
    class:color5={(contentBgColor == 5)}
/>

<style>
    .container {
        height: inherit;
        width: 100%;
        transition: 1.2s;
    }
</style>
