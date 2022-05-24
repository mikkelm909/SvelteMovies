<script context="module">
    export async function load(page) {
        let search = page.params.id
        return {
            props: {searchId: search}
        }
    };
</script>

<script>
    import { loadSearchMovie } from "$lib/header/Stores/Stores";    
    import { fade } from "svelte/transition";
    export let searchId
    const movieSearch = loadSearchMovie(searchId)
</script>

{#await $movieSearch}
    Loading
{:then data} 
    
<ul transition:fade class="movielist">
    {#each data.results as movie}
         <div >
        <div class="row">
            <div class="col-md-1"></div>
            <a href="/movie/{movie.id}">
                <div class="col-md-2 poster">
                    <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2{movie.poster_path}" alt="movieTmdbImage" class="img-responsive img-rounded">
                </div>
            </a>

            <div class="col-md-6 well">
                <div class="row">

                        <div class="col-md-10"><h4>{movie.title}</h4></div>
                        <div class="col-md-2"> {movie.vote_average} <span class="far fa-star" aria-hidden="true"></span></div>

                </div>
                    <div class="row">
                        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>{movie.release_date}</div>
                    </div>
                    {movie.overview}<br><br>

                    <div style="width: 100%; display: table;">
                        <div style="display: table-row">                            
                            <div style="display: table-cell;">
                                Play Trailer
                                <a href="movietrailer/{movie.id}"> <button class="btn btn-default"  ><span class="far fa-play-circle"></span></button></a>
                            </div>

                            <div align="right" style="display: table-cell;">
                                See Credits
                                <a href="credits/{movie.id}"> <button class="btn btn-default"  ><span class="far fa-play-circle"></span></button></a>
                            </div>
                        </div>

                    </div>
                    


                    <div class="col-md-5"></div>

            </div>
        </div>
    </div>
    {/each}
</ul>
{/await}
