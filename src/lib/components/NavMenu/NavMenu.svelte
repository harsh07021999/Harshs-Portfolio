<script lang="ts">
    import { page } from "$app/stores";
    
    let currentRoute = '/';
    $: {
        if($page){
            currentRoute = $page.url.pathname;
        }
    }
</script>