<script lang="ts">
    import { RESUME } from "$lib/params";

    const { item, title } = RESUME;

</script>

<div class="resume">
    {#if item}
    <embed src={item} width="800px" height="2100px" />
    {:else}
        <p>Ooops! no CV at the moment.</p>
    {/if}
</div>