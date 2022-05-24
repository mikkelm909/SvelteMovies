<script context="module">
    export async function load(page) {
        let actorId = page.params.id
        return {
            props: {actor: actorId}
        }
    };
</script>
<script>
    import { loadActorDetails } from "$lib/header/Stores/Stores";
    import { fade } from "svelte/transition";
    export let actor

    const actorDetails = loadActorDetails(actor)
    
</script>

{#await $actorDetails}
    Loading
{:then person} 
<div transition:fade style="padding: 30px;">

    <img src='https://image.tmdb.org/t/p/w185_and_h278_bestv2{person.profile_path}' alt="profileImage" style="display: block; margin-left: auto; margin-right: auto; background-repeat: space; padding-right: 10%;" align="right" class="center" width="40%" height="40%">
    
    <h1>{person.name}  {person.birthday} {#if person.deathday != null} <p> {person.deathday} $$</p> {/if}</h1>
    
    <div class="row">
        <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span><p>{person.biography}</p></div>
    </div>
    
    AKA:
    <br><br>
    <ul>
        {#each person.also_known_as as nicNames}
            <li>{nicNames}</li>
        {/each}
    
    </ul>

    
    <div class="row">
    <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span>Birthplace:  {person.place_of_birth}</div>
</div>
    <br>
    {person.biography}
    <br>

</div>

{#if person.hompage != undefined}
<div  class="row">
    <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span><p><a href="{person.homepage}" target="_blank">Homepage</a></p></div>
</div>
{/if}
{#if person.imdb_id != undefined}
<div class="row">
    <div class="col-md-6"><span class="far fa-calender" aria-hidden="true"></span><p><a href="https://www.imdb.com/name/{person.imdb_id}" target="_blank">IMDB Page</a></p></div>
</div>
{/if}
{/await}
