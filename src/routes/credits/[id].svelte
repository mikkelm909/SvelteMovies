<script context="module">
    export async function load(page) {
        let movieId = page.params.id
        return {
            props: {id: movieId}
        }
    };
</script>
<script>
    import { loadCredits, loadMovieDetails } from "$lib/header/Stores/Stores";
    import { fade } from "svelte/transition";
    export let id
    const credits = loadCredits(id)
    const movie = loadMovieDetails(id)

</script>


{#await $movie}
    Loading
{:then moviedetail} 
    <h1 transition:fade>Actors for: {moviedetail.title}<img style="al" class="rounded movie_img" src='https://image.tmdb.org/t/p/w185_and_h278_bestv2{moviedetail.poster_path}' alt="poster" width="180" height="180"> </h1>  
    <br>

{/await}


{#await $credits}
    Loading
{:then people} 

<ul transition:fade class="actorlist">
    {#each people.cast as actor}
        {#if actor.profile_path != undefined}
        <div class="row">
            <div class="col-md-1"></div>
            <a href="/actor/{actor.id}">
                <div class="col-md-2 poster">
                    <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2{actor.profile_path}" alt="/profile.jpg" class="img-responsive img-rounded">
                </div>
            </a>

            <div class="col-md-6 well">
                    <div class="row">
                            <div class="col-md-10"><h4>{actor.name}</h4></div>
                            <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Popularity: {actor.popularity}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Played: {actor.character}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Role: {actor.known_for_department}</div>
                    </div>

                    <div class="col-md-5"></div>

            </div>
        </div>
        {/if}
    {/each}
</ul>    

{/await}
    

