<script context="module">
    export async function wapFuck(){
        const result =  await fetch('http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323');
        const data = await result.json()
        console.log(data)
        if(result.ok){
            return {
                props: {popular: data.results}
            }
        }

    }
</script>


<script>

</script>



fuuuuuuu
