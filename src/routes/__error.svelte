<script context="module">
    export function load({error}){
        return {
            props: {message: error.message}
        }
    }
</script>


<script>
    import stinky from "$lib/header/stinky.jpg"
    import { fade } from "svelte/transition";
    export let message
</script>



<div in:fade={{duration: 1011}}>
    <h1>Uh ohhh STINKYYY</h1>
    <p>{message}</p>
</div>

<img in:fade={{duration: 1011}} src={stinky} alt="asdsa" width="100%" height="70%">

