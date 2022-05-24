<script context="module">
    export async function load(page) {
        let movieId = page.params.id
        return {
            props: {movie: movieId}
        }
    };
</script>
<script>
    import { loadMovieDetails } from "$lib/header/Stores/Stores";
    import { fade } from "svelte/transition";
    export let movie
    let moviedetails = loadMovieDetails(movie)
</script>


{#await $moviedetails}
    Loading
{:then moviedetail} 
<div transition:fade>
    <img style="display: block; margin-left: auto; margin-right: auto; background-repeat: space; padding-right: 10%;" align="right" class="center"  src="https://image.tmdb.org/t/p/w185_and_h278_bestv2{moviedetail.poster_path}" alt="noposter" width="40%" height="40%">
    <h1>{moviedetail.title}</h1>  
        {moviedetail.tagline}
    <br>
    <br>
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Overview: <br> {moviedetail.overview}</div>
    </div>

    {#if moviedetail.originalLang != undefined}
    <div class="row">
        <br>
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Original language: <br> {moviedetail.originalLang}</div>
    </div>
    {/if}

        
    {#if moviedetail.site != undefined}
    <div class="row">
        <div class="col-md-6">Website: {moviedetail.site} </div>
    </div>
    {/if}

    <br>
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Date of release: {moviedetail.release_date}</div>
    </div>


    {#if moviedetail.adult == true}
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Not for kids adult only!</div>
    </div>
    {/if}

    <br>
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>moviedetail budget: 
            {#if moviedetail.budget == 0 }
            <p style="color: red;" >not avaible</p>
            {/if} 
            {#if moviedetail.budget}
            <p>{moviedetail.budget} $$</p>
            {/if}
        </div>
    </div>

    <br>
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Revenue: {moviedetail.revenue}</div>
    </div>

    <br>
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Popularity: {moviedetail.popularity}</div>
    </div>

    <br>
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Playtime: {moviedetail.runtime} minutes</div>
    </div>
</div>
{/await}
