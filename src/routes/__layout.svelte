<script>
import "virtual:windi.css";
</script>

<div class="bg-gray-50">
    <div class="max-w-3xl prose mx-auto p-10 min-h-screen">
        <slot />
    </div>
</div>

<style>
:global(body) {
    overflow-y: scroll;
}
</style>
