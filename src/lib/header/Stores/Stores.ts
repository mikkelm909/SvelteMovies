import { writable, readable } from 'svelte/store';

const cache = new Map();
export function loadPopular(){
 const popularMovies = writable(new Promise(() => {}));

if(cache.has("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")){
    popularMovies.set(Promise.resolve(cache.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")))
}
 const load = async () =>{
     const response = await fetch("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323");
     const data = await response.json();
     popularMovies.set(Promise.resolve(data))
 }
 load()
 return popularMovies
}



export function loadPopularKidsMovies(){
    const popularKidsMovies = writable(new Promise(() => {}));
   
   if(cache.has("http://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")){
    popularKidsMovies.set(Promise.resolve(cache.get("http://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323")))
   }
    const load = async () =>{
        const response = await fetch("http://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323");
        const data = await response.json();
        popularKidsMovies.set(Promise.resolve(data))
    }
    load()
    return popularKidsMovies
}


export function loadMovieDetails(movieId){
    const MovieDetails = writable(new Promise(() => {}));
   
   if(cache.has('https://api.themoviedb.org/3/movie/' + movieId + '?'+'&api_key=81c50c197b83129dd4fc387ca6c8c323')){
    MovieDetails.set(Promise.resolve(cache.get('https://api.themoviedb.org/3/movie/' + movieId + '?'+'&api_key=81c50c197b83129dd4fc387ca6c8c323')))
   }
    const load = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?'+'&api_key=81c50c197b83129dd4fc387ca6c8c323');
        const data = await response.json();
        MovieDetails.set(Promise.resolve(data))
    }
    load()
    return MovieDetails
}


export function loadCredits(movieId){
    const Credits = writable(new Promise(() => {}));
   
   if(cache.has('https://api.themoviedb.org/3/movie/'+ movieId + '/credits?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US')){
    Credits.set(Promise.resolve(cache.get('https://api.themoviedb.org/3/movie/'+ movieId + '/credits?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US')))
   }
    const load = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/credits?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US');
        const data = await response.json();
        Credits.set(Promise.resolve(data))
    }
    load()
    return Credits
}



export function loadActorDetails(actorId){
    const ActorDetails = writable(new Promise(() => {}));
   
   if(cache.has('https://api.themoviedb.org/3/person/' + actorId + '?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US')){
    ActorDetails.set(Promise.resolve(cache.get('https://api.themoviedb.org/3/person/' + actorId + '?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US')))
   }
    const load = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/person/' + actorId + '?api_key=81c50c197b83129dd4fc387ca6c8c323&language=en-US');
        const data = await response.json();
        ActorDetails.set(Promise.resolve(data))
    }
    load()
    return ActorDetails
}

export function loadSearchMovie(search){
    const SearchMovie = writable(new Promise(() => {}));
   
   if(cache.has('http://api.themoviedb.org/3/search/movie?query=' + search + '&api_key=81c50c197b83129dd4fc387ca6c8c323')){
    SearchMovie.set(Promise.resolve(cache.get('http://api.themoviedb.org/3/search/movie?query=' + search + '&api_key=81c50c197b83129dd4fc387ca6c8c323')))
   }
    const load = async () =>{
        const response = await fetch('http://api.themoviedb.org/3/search/movie?query=' + search + '&api_key=81c50c197b83129dd4fc387ca6c8c323');
        const data = await response.json();
        SearchMovie.set(Promise.resolve(data))
    }
    load()
    return SearchMovie
}