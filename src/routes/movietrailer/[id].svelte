<script context="module">
    export async function load(page) {
        let movieId = page.params.id
        const result =  await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=81c50c197b83129dd4fc387ca6c8c323');
        const data = await result.json()
        return {
            props: {trailers: data.results}
        }
    };
</script>
<script>
    import { fade } from "svelte/transition";
    export let trailers
    let movietrailers = trailers
</script>

{#if movietrailers != undefined}
<iframe transition:fade class="h_iframe" title="trailer" src="https://www.youtube.com/embed/{movietrailers[1].key}" frameborder="0" scrolling="no"  height="100%" width="100%"></iframe>
 {:else}
 No trailers in db
{/if}


<style>
    .h_iframe {
    overflow:hidden; height:100%; width:100%; position: absolute; top: 10; left: 10; bottom: 10; right: 10; padding: 300 px;
}
</style>